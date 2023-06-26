import React from "react";
import { css } from "@emotion/css";
import { useFetch } from "../../hooks/useFetch";
import {
  mainColor,
  subColor,
  boxTextColor,
  contentFontSize16,
  contentFontSize30,
  grayTitleBorderBottom,
  whiteTitleBorderBottom,
  lightBoxShadow,
  darkBoxShadow,
} from "../../style/main";
import { useTheme } from "../../hooks/useTheme";
import CircleButton from "../common/CircleButton";


export default function ProjectCard() {
  const fetchUrl = "/data/projectInfoData.json";
  const fetchStorage = "projectInfoData";
  const [theme] = useTheme();

  const { dataList: projectList } = useFetch(fetchUrl, fetchStorage);

  return (
    <article css={projectInfoContainer(theme)}>
      <h2>프로젝트!!!!!!!!!!</h2>
      <div className='container'>
        {projectList.map((item) => (
          <section key={`project-${item.id}`}>
            <a href={item.projectLink} target='_blank' rel='noreferrer'>
              <img
                css={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  overflow: hidden;
                `}
                src={item.projectImage}
                alt=''
              />
            </a>
            <div>
              <div>
                <CircleButton
                  onClick={() => {
                    window.open(item.repositoryLink, "_blank");
                  }}
                  light={<img src='/image/icon/github-light-icon.png' alt='' />}
                  dark={<img src='/image/icon/github-dark-icon.pn' alt='' />}
                />
                <CircleButton>•••</CircleButton>
              </div>
              <p>{item.name}</p>
              <p>{item.period}</p>
              <p>{item.summary}</p>
              <ul className='tech-stack'>
                {item.techStack.name.map((x, index) => (
                  <li key={`techStack-${index}`}>{x}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

const projectInfoContainer = (theme) => css`
  margin: 30px 0;
  h2 {
    ${theme === "light" ? grayTitleBorderBottom : whiteTitleBorderBottom}
    ${contentFontSize30}
  }
  .container {
    margin: 20px 0;
    @media (max-width: 878px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 20px;
    }
    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 335px;
      ${contentFontSize16}
      border-radius: 20px;
      overflow: hidden;
      margin-top: 20px;
      box-shadow: ${theme === "light" ? lightBoxShadow : darkBoxShadow};
      @media (max-width: 878px) {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0;
      }
      div {
        padding: 20px;
        position: relative;
        div {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
          align-items: center;
          padding: 0;
          margin: 0 0 10px;
        }
        p + p {
          margin: 16px 0;
        }
        p:first-of-type {
          font-size: 1.8rem;
          font-weight: bold;
          text-align: center;
        }
        p:nth-of-type(2) {
          ${contentFontSize16}
          font-style: italic;
          text-align: end;
        }
        p:nth-of-type(3) {
          height: 95px;
          display: flex;
          align-items: center;
          overflow: scroll;
          line-height: 1.5;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin: 10px 0 20px;
          li {
            ${contentFontSize16}
            padding: 3px 6px;
            background-color: ${mainColor};
            color: ${boxTextColor};
            border-radius: 3px;
          }
        }
      }
    }
    section:nth-of-type(2n - 1) {
      background-color: rgb(221 221 221 / 16%);
      border: 1px solid rgb(221 221 221 / 16%);
    }
    section:nth-of-type(2n) {
      background-color: ${subColor};
      border: 1px solid ${subColor};
    }
  }
`;
