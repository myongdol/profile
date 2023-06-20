import React from "react";
import { css } from "@emotion/css";
import { useFetch } from "../../hooks/useFetch";
import {
  mainColor,
  boxTextColor,
  contentFontSize16,
  contentFontSize30,
  grayTitleBorderBottom,
  lightBoxShadow,
  darkBoxShadow,
} from "../../style/main";


export default function Project({state}) {
 
  const fetchUrl = "/data/projectInfoData.json";
  const fetchStorage = "projectInfoData";
  const {dataList: projectList} = useFetch(fetchUrl, fetchStorage);


  return (
        <article css={projectContainer(state)}>
            <h2>프로젝트 목록</h2>
            <div>
            {projectList.map((item) => (
          <React.Fragment key={`project-${item.id}`}>
            <a href={item.repositoryLink} target='_blank' rel='noreferrer'>
              <section>
                <img src={item.projectImage} alt='' />
                <div>
                  <p>{item.name}</p>
                  <p>{item.period}</p>
                  <ul className='tech-stack'>
                    {item.techStack.name.map((x, index) => (
                      <li key={`techStack-${index}`}>{x}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </a>
          </React.Fragment>
        ))}
        </div>
        </article>
    )
}

const projectContainer = (state) => css`
  margin: 30px 0;
  h2 {
    ${grayTitleBorderBottom};
    ${contentFontSize30}
  }
  div {
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    section {
      border-radius: 10px;
      border-width: 1.5px;
      overflow: hidden;
      ${contentFontSize16};
      cursor: pointer;
      box-shadow: ${state ? lightBoxShadow : darkBoxShadow};
      transition: all 0.3s ease-in-out;
      transform: translateY(0);
      &:hover {
        transition: all 0.3s ease-in-out;
        transform: translateY(-8px);
      }
      img {
        width: 100%;
      }
      p:first-of-type {
        font-weight: bold;
        background-color: ${mainColor};
        display: inline-block;
      }
      p {
        margin: 0 20px;
      }
    }
  }
  .tech-stack {
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
  
  `;