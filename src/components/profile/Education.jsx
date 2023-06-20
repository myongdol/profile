import React from "react";
import { css } from "@emotion/css";
import { contentFontSize16, contentFontSize30, mainColor, subColor, grayTitleBorderBottom } from "../../style/main";
import { useFetch } from "../../hooks/useFetch";



export default function Education() {
    const fetchUrl = "/data/educationData.json";
    const fetchStorage = "educationData";

    const {dataList: educationList} = useFetch(fetchUrl, fetchStorage);


    return (
        <article css={educationContainer}>
            <h2>교육 관련 내용</h2>
            <ul>
               {educationList.map((item) => (
                <React.Fragment key={`education-${item.id}`}>
                    <li>{item.course}</li>
                    <li>{item.period}</li>
                </React.Fragment>
               ))}
            </ul>
        </article>
    )
}


const educationContainer = css`
  margin: 30px 0;

  h2 {
    ${contentFontSize30}
    ${grayTitleBorderBottom};
  }

  ul {
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5px 10px;
    ${contentFontSize16};
  }

  li {
    align-items: center;
    display: flex;
    padding: 2px 4px;
  }
  
  li:first-of-type,
  li:nth-of-type(2) {
    border-radius: 3px;
    background-color: ${mainColor};
    font-weight: bold;
  }

  li:nth-of-type(4n - 1),
  li:nth-of-type(4n) {
    background-color: rgb(221 221 221 / 16%);
  }

  li:nth-of-type(4n + 1):not(li:first-of-type),
  li:nth-of-type(4n + 2):not(li:nth-of-type(2)) {
    background-color: ${subColor};
  }
`;