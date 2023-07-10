/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import { 
    grayTitleBorderBottom,
    fontSize,
    mainColor,
    subColor,
    whiteTitleBorderBottom,
} from "../../style/main";
import {useTheme} from "../../hooks/useTheme"



export default function Career () {
    const [theme] = useTheme();



    return (
        <article name='Career' css={careerContainer(theme)}>
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

const careerContainer = (theme) => css`
    margin: 30px 0;

    h2{
        ${theme === "light" ? grayTitleBorderBottom : whiteTitleBorderBottom};
        ${fontSize.contentFontSize30}
    }

    ul{
        display: grid;
        gap: 5px 10px;
        grid-template-columns: 2fr 1fr;
        ${fontSize.contentFontSize16}
        padding: 20px;
        
        li {
            padding: 4px 6px;
            display: flex;
            align-items: center;
        }

        li:first-of-type,
        li:nth-of-type(2) {
            background-color: ${mainColor};
            
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