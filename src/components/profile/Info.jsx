import React from "react";
import { css } from "@emotion/css";
import { URLs } from "../../constant";
import { 
    contentFontSize16,
    contentFontSize40,
    mainColor,
    grayBorder,
    grayNormalBorderBottom,
    whiteBorder,
    whiteNormalBorderBottom 
} from "../../style/main";
import { useTheme } from "../../hooks/useTheme";
import Hits from "../common/Hits";
import DateUpdate from "../common/DateUpdate";



export default function Info() {
    const [theme] = useTheme();

    
    return (
        <article css={infoContainer(theme)}>
            
            <div className="profile">
                <img src='https://avatars.githubusercontent.com/u/110724985?v=4' alt='프로필사진' />
            </div>

            <h1> 김용석 (
                <a href={URLs.github} target="_blank" rel="noreferrer">
                    Myongdol
                </a>
                )
                
            </h1>

            <Hits />
            <DateUpdate yyyymmdd={"20230628"} />


            <section>
                <p className="description">
                    <span>😁</span>
                    <span>
                        프론트엔드 개발자가 되기 위해 공부를 지속적으로 하고 있습니다 안녕하세요.
                        반갑습니다.
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
                            😎<span>Blog</span>
                        </a>
                    </li>
                    <li>
                        <a href={URLs.github} target="_blank" rel="noreferrer">
                            🐱<span>Github</span>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    )
}

const infoContainer = (theme) => css`
    div.profile {
        text-align: center;
        width: 256px;
        height: 256px;
        border-radius: 50%;
        overflow: hidden;

    img {
        height: 100%;
        object-fit: cover;
    }
}
    
    h1 {
        font-family: "GangwonEduPowerExtraBoldA";
        letter-spacing: 2px;
        margin: 40px 0;
        ${contentFontSize40}
    }

    section {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        line-height: 1.5;
        ${contentFontSize16}
    }

    a {
        &:hover {
            color: ${theme === "light" ? "#ffc23a" : "#80869d"}
        }
    }

    p {
        ${theme === "light" ? grayBorder : whiteBorder}
        border-radius: 20px;
        padding: 20px;
    }

    ul{
        width: 40%;
        padding: 20px;
        overflow: scroll;
    }

    .description{
        width: 60%;
        display: flex;
        border-left-width: 100px;
        border-left-color: ${theme === "light" ? grayBorder : whiteBorder};
        border-left-style: solid;
        padding: 10px 20px;
        font-weight: 600;
        
        span:first-of-type {
            height: 100%;
        }
    }

    li{
        margin: 4px 0;

        a{
            &:hover {
                background-color: ${mainColor};
            }
        }

        a span {
            margin-right: 10px;
            ${theme === "light" ? grayNormalBorderBottom : whiteNormalBorderBottom}
        }
    }

    @media (max-width: 743px) {
    img {
      display: block;
      margin: 0 auto;
    }
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
`