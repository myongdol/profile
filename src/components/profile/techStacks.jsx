import React from "react";
import { css } from "@emotion/css";
import { contentFontSize16, contentFontSize30, grayTitleBorderBottom, mainColor, boxTextColor } from "../../style/main";
import { useFetch } from "../../hooks/useFetch";


export default function TechStacks() {
    const fetchUrl = "/data/techStackData.json";
    const fetchStorage = "techStackData";
    const {dataList: techStackData} = useFetch(fetchUrl, fetchStorage);


    return (
        <article css={techStackContainer}>
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