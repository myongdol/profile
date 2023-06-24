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
  lightFontColor,
  darkFontColor,
  lightNavBackgroundColor,
  darkNavBackgroundColor,
} from "../../style/main";
import { useTheme } from "../../hooks/useTheme";


export default function Project() {

  const fetchUrl = "/data/projectInfoData.json";
  const fetchStorage = "projectInfoData";
  const {dataList: projectList} = useFetch(fetchUrl, fetchStorage);
  const [theme] = useTheme();


  return (
        <article css={projectContainer(theme)}>
            <h2>프로젝트 목록</h2>
            <div className="container">
            {projectList.map((item) => (
          <section key={`project-${item.id}`}>
            <a href={item.repositoryLink} target='_blank' rel='noreferrer'>
                <img src={item.projectImage} alt='project img' />
            </a>
                <div>
                  <p>{item.name}</p>
                  <p>{item.period}</p>
                  <p>프로젝트에 대한 설명</p>
                  <ul className='tech-stack'>
                    {item.techStack.name.map((x, index) => (
                      <li key={`techStack-${index}`}>{x}</li>
                    ))}
                  </ul>
                  <button>
                    <a href={item.repositoryLink} target="_blank" rel="noreferrer">repository보기</a>
                  </button>
                </div>
        
            
          </section>
        ))}
        </div>
        </article>
    )
}




const projectContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === "light" ? grayTitleBorderBottom : whiteTitleBorderBottom};
    ${contentFontSize30}
  }

  .container {
    margin: 20px 0;
    @media (max-width: 878px) {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
  


    section {
      border-radius: 20px;
      display: grid;
      overflow: hidden;
      ${contentFontSize16};
      grid-template-columns: 1fr 1fr;
      box-shadow: ${theme === "light" ? lightBoxShadow : darkBoxShadow};
      transition: all 0.3s ease-in-out;
      transform: translateY(0px);
      margin-top: 20px;

      &:hover {
        transition: all 0.3s ease-in-out;
        transform: translateY(-8px);
      }
      
      @media (max-width: 878px) {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin: 0;
      }

      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
      }

      div {
        padding: 20px;

        p + p {
          margin: 10px 0;
        }

        p:first-of-type {
          font-size: 1.8rem;
          font-weight: bold;
          text-align: center;
        }

        p:nth-of-type(2) {
          ${contentFontSize16}
          text-align: end;
          font-style: italic;
        }

        p:nth-of-type(3) {
          ${contentFontSize16}
        }

        button {
          display: block;
          font-size: 1.5rme;
          border: none;
          margin-left: auto;
          padding: 10px 12px;
          background-color: ${theme === "light" ? lightNavBackgroundColor : darkNavBackgroundColor};

          &:hover {
            background-color: ${theme === "light" ? lightNavBackgroundColor : darkNavBackgroundColor};
            color: ${theme === "light" ? darkFontColor : lightFontColor}
          }
        }

        .tech-stack {
          align-items: center;
          display: flex;
          gap: 10px;
          margin: 0 20px;

          li {
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
      border: 1px solid ${subColor};
      background-color: ${subColor};
    }
  }
  `;