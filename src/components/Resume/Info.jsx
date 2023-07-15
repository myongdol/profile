/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { URLs } from "../../constant";
import { 
    fontSize,
    mainColor,
    grayBorder,
    grayNormalBorderBottom,
    whiteBorder,
    whiteNormalBorderBottom 
} from "../../style/main";
import { useTheme } from "../../hooks/useTheme";
import {Hits} from "../common/Hits";
import {DateUpdate} from "../common/DateUpdate";



export default function Info() {
    const [theme] = useTheme();

    
    return (
        <article name='Info' css={infoContainer(theme)}>
            
            <Hits />
            <DateUpdate yyyymmdd={"20230715"} />


            <section>
                <p className="description">
                    <span>
                        프론트엔드 개발자가 되기 위해 공부를 지속적으로 하고 있는 성장하는 개발자 김용석 입니다.
                    </span>
                </p>
                <ul>
                    <li>
                        <a href={URLs.email} target="_blank" rel="noreferrer">
                            🐶<span>myongdol132@gmail.com</span>
                        </a>
                    </li>
                    <li>
                        <a href={URLs.blog} target="_blank" rel="noreferrer">
                            😎<span className='no-print'>Blog</span>
                            <span className='print'>{URLs.blog}</span>
                        </a>
                    </li>
                    <li>
                        <a href={URLs.github} target="_blank" rel="noreferrer">
                            🐱<span className='no-print'>GitHub</span>
                              <span className='print'>{URLs.github}</span>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    )
}

const infoContainer = (theme) => css`
  section {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    line-height: 1.5;
    ${fontSize.contentFontSize16};
  }

  .description {
    border-left-color: ${theme === "light" ? grayBorder : whiteBorder};
    border-left-width: 10px;
    border-left-style: solid;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 2rem;
    width: 60%;
    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    word-break: keep-all;
  }

  ul {
    width: 40%;
    overflow: scroll;
    border-left-color: ${theme === "light" ? grayBorder : whiteBorder};
    border-left-width: 10px;
    border-left-style: solid;
    padding: 10px 20px;

    li {
      margin: 4px 0;

      a {
        &:hover {
          background-color: ${mainColor};
        }
      }

      a span {
        margin-right: 10px;
        ${theme === "light" ? grayNormalBorderBottom : whiteNormalBorderBottom};
      }
    }
  }

  @media (max-width: 743px) {
    section {
      flex-wrap: wrap;
      justify-content: center;

      p.description,
      ul {
        width: 100%;
      }

      p.description span:first-of-type {
        margin-top: -4px;
      }
    }
  }
`;
