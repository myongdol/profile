import React from "react";
import { URLs } from "../../constant";
import { css } from "@emotion/css";
import { mainColor, boxTextColor, contentFontSize16, contentFontSize30, grayTitleBorderBottom } from "../../style/main";



export default function Project() {
    return (
        <article css={projectContainer}>
            <h2>프로젝트 목록</h2>
            <section>
                <img src='https://avatars.githubusercontent.com/u/110724985?v=4' alt="dd" />
                <div>
                    <p>스택오버플로우</p>
                    <p>123기간 ~ 기간123</p>
                    <a href={URLs.project1} target="_blank" rel="noreferrer">
                        Github Repository 이동
                    </a>
                    <ul>
                        <li>JavaScript, React</li>
                    </ul>
                </div>
            </section>

            <section>
                <img src='https://avatars.githubusercontent.com/u/110724985?v=4' alt="dd" />
                <div>
                    <p>스택오버플로우</p>
                    <p>123기간 ~ 기간123</p>
                    <a href={URLs.project1} target="_blank" rel="noreferrer">
                        Github Repository 이동
                    </a>
                    <ul>
                        <li>JavaScript, React</li>
                    </ul>
                </div>
            </section>

            <section>
                <img src='https://avatars.githubusercontent.com/u/110724985?v=4' alt="dd" />
                <div>
                    <p>스택오버플로우</p>
                    <p>123기간 ~ 기간123</p>
                    <a href={URLs.project1} target="_blank" rel="noreferrer">
                        Github Repository 이동
                    </a>
                    <ul>
                        <li>JavaScript, React</li>
                    </ul>
                </div>
            </section>
        </article>
    )
}

const projectContainer = css`
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
      box-shadow: rgb(15 15 15 / 10%) 2px 4px 4px 0px, rgb(15 15 15 / 10%) 4px 4px 10px;
      transition: all 0.3s ease-in-out;
      transform: translateY(0);
      opacity: 0.7;
      &:hover {
        transition: all 0.3s ease-in-out;
        transform: translateY(-8px);
        opacity: 1;
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