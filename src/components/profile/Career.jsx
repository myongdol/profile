import React from "react";
import { css } from "@emotion/css";
import { grayTitleBorderBottom, grayNormalBorderBottom, contentFontSize16, subColor } from "../../style/main";

export default function Career () {
    return (
        <article css={careerContainer}>
            <h2>경력</h2>
            <ul>
                <li>회사</li>
                <li>근무기간</li>
                <li>직책</li>
                <li>경력</li>
            </ul>
        </article>
    )
}

const careerContainer = css`
    margin: 30px 0;

    h2{
        ${grayTitleBorderBottom};
    }

    ul{
        display: grid;
        gap: 15px;
        grid-template-columns: 2fr 1fr;
        ${contentFontSize16}
        padding: 20px;
        
        li {
            padding: 2px 4px;
        }

        li:first-of-type,
        li:nth-of-type(2) {
            ${grayNormalBorderBottom}
            border-radius: 3px;
            font-weight: bold;
        }

        li:nth-of-type(4n - 1),
        li:nth-of-type(4n) {
            background-color: rgb(211, 211 / 16%);
        }

        li:nth-of-type(4n + 1):not(li:first-of-type),
        li:nth-of-type(4n + 2):not(li:nth-of-type(2)) {
            background-color: ${subColor};
        }
    }
`