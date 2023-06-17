import React from "react";
import { css } from "@emotion/css";
import { contentFontSize16, contentFontSize30, grayTitleBorderBottom, mainColor, boxTextColor } from "../../style/main";
import { useState, useEffect } from "react";
import axios from "axios";



export default function TechStacks() {
    const [techStackData, setTechStackData] = useState([]);
    const techkStackAPIurl = "/data/techStackData.json";

    const getTechStackData = async () => {
        await axios.get(techkStackAPIurl).then((res) => {
            const dataList = res.data.techStackData; 
            setTechStackData(dataList);
        });
    };

    useEffect(() => {
        getTechStackData();
    }, []);


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