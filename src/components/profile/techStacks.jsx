import React from "react";
import { css } from "@emotion/css";
import { contentFontSize16, contentFontSize30, grayTitleBorderBottom, mainColor, boxTextColor } from "../../style/main";

export default function TechStacks() {
    return (
        <article css={techStackContainer}>
            <h2>기술스택 목록</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Emotion</li>
                <li>Styled-Components</li>
            </ul>
        </article>
    )
}

const techStackContainer = css`
    margin: 30px 0;

    h2{
        ${contentFontSize16}
        ${contentFontSize30}
        ${grayTitleBorderBottom}
        padding: 20px;
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        
        li{
            padding: 3px 6px;
            color: ${boxTextColor};
            background-color: ${mainColor};
            border-radius: 3px;
        }
    }
`