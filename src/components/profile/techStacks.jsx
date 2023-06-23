import React from "react";
import { css } from "@emotion/css";
import { contentFontSize16, contentFontSize30, grayTitleBorderBottom, mainColor, boxTextColor, whiteTitleBorderBottom } from "../../style/main";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";



export default function TechStacks() {
    const fetchUrl = "/data/techStackData.json";
    const fetchStorage = "techStackData";
    const {dataList: techStackData} = useFetch(fetchUrl, fetchStorage);
    const [theme] = useTheme();

    return (
        <article css={techStackContainer(theme)}>
            <h2>기술스택 목록</h2>
            <ul>
                {techStackData.map((item) => (
                    <React.Fragment key={`techStack-${item.id}`}>
                        <li>{item.techStackName}</li>
                    </React.Fragment>
                ))}
            </ul>
        </article>
    )
}

const techStackContainer = (theme) => css`
    margin: 30px 0;

    h2{
        ${contentFontSize16}
        ${contentFontSize30}
        ${theme === "light" ? grayTitleBorderBottom : whiteTitleBorderBottom}
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