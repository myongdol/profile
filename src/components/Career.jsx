import React from "react";
import { css } from "@emotion/css";
import { grayTitleBorderBottom, grayNormalBorderBottom, contentFontSize } from "../style/main";

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
        grid-template-columns: 4fr 1fr;
        ${contentFontSize}
        padding-top: 20px;

        li:first-of-type,
        li:nth-of-type(2) {
            ${grayNormalBorderBottom}
        }

        li:nth-of-type(2n + 1) {
            margin: 0 0 0 20px;
        }
    }
`