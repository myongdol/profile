import React from "react";
import { css } from "@emotion/react";
import { useTheme } from "../../hooks/useTheme";
import { contentFontSize16, contentFontSize30, whiteTitleBorderBottom, grayTitleBorderBottom } from "../../style/main";


export default function Introduce() {
     const [theme] = useTheme();

     return (
        <article css={introduceContainer(theme)}> 
            <h2>안녕하세요</h2>
            <section>
                <p>
                abcd abcdㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇcd abcd
                abcd abcdabcd abcdabㄴㅇㄴㅇㅇㅇㅁㄴㄴㄴㅇㅁㅇㅁㅇㅁㅇㅁabcdabcd abcd
                </p>
            </section>
        </article>
     );
}


const introduceContainer = (theme) => css`
    margin: 30px 0;

    h2 {
        ${theme === "light" ? grayTitleBorderBottom : whiteTitleBorderBottom}
        ${contentFontSize30}
    }
    
    section {
        margin: 20px;
        ${contentFontSize16}
    }
`;