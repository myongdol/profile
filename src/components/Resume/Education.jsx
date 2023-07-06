import React from "react";
import { css } from "@emotion/css";
import { fontSize, mainColor, subColor, grayTitleBorderBottom, whiteTitleBorderBottom } from "../../style/main";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";


export default function Education() {
    const fetchUrl = "/data/educationData.json";
    const fetchStorage = "educationData";

    const {dataList: educationList} = useFetch(fetchUrl, fetchStorage);
    const [theme] = useTheme();


    return (
        <article name='Education' css={educationContainer(theme)}>
            <h2>교육 관련 내용</h2>
            <ul>
              <li>과정</li>
              <li>교육기간</li>
              <li>수료증</li>
               {educationList.map((item) => (
                <React.Fragment key={`education-${item.id}`}>
                  <li>
                    <a href={item.site} target="_blank" rel="noreferrer">
                      {item.course}
                    </a>
                  </li>
                  <li>
                  <a 
                  href={item.certificates}
                  target="_blank"
                  rel="noreferrer"
                  css={css`margin: 0 auto;`}
                  >
                    🐥
                  </a>
                  </li>
                </React.Fragment>
               ))}
            </ul>
        </article>
    )
}


const educationContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${fontSize.contentFontSize30}
    ${theme === "light" ? grayTitleBorderBottom : whiteTitleBorderBottom};
  }

  ul {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 60px;
    gap: 5px 10px;
    ${fontSize.contentFontSize16};
    overflow: scroll;
  }

  li {
    align-items: center;
    display: flex;
    padding: 4px 6px;

    a {
      padding-bottom: 1px;
      color: ${theme === "light" ? "#005aad" : "skyblue"};
      font-weight: bold;
    }
  }
  
  li:first-of-type,
  li:nth-of-type(2),
  li:nth-of-type(3) {
    border-radius: 3px;
    background-color: ${mainColor};
    font-weight: bold;
  }

  li:nth-of-type(6n),
  li:nth-of-type(6n - 1),
  li:nth-of-type(6n - 2) {
    background-color: rgb(221 221 221 / 16%);
  }

  li:nth-of-type(6n + 1):not(li:first-of-type),
  li:nth-of-type(6n + 2):not(li:nth-of-type(2)),
  li:nth-of-type(6n + 3):not(li:nth-of-type(3)) {
    background-color: ${subColor};
  }
`;