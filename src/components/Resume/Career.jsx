/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
                <li>은혜앵글진열공사</li>
                <li>2015.02.02 ~ 2019.09.16</li>
                <li>현장 시공팀 대리</li>
                <li>현장시공을 다니며 시공 및 관리감독을 하였습니다.</li>
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