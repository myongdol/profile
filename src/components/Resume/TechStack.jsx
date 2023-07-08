import React from "react";
import { css } from "@emotion/css";
import { fontSize, grayTitleBorderBottom, boxTextColor, whiteTitleBorderBottom } from "../../style/main";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";
import { parseBoldString } from "../../js/ParseBoldString";


export default function TechStack() {
    const fetchUrl = "/data/techStackData.json";
    const fetchStorage = "techStackData";
    const {dataList: techStackData} = useFetch(fetchUrl, fetchStorage);
    const [theme] = useTheme();

    return (
        <article name="TechStack" css={techStackContainer(theme)}>
            <h2>기술스택 목록</h2>
            <ul>
                {techStackData.map((item) => (
                    <React.Fragment key={`techStack-${item.id}`}>
                        <li>
                            <img src={item.techStackImage} alt={item.StackName} />
                            <div>
                                <p css={css`font-weight: bold; color: ${boxTextColor};`}>
                                    {item.techStackName}
                                </p>
                                <p>
                                    {parseBoldString(item.techDescription).map((x, i) => {
                                        if (x.startsWith("**")) {
                                            return <strong key={`${i}-${x}`}>{x.slice(2)}</strong>
                                        } else {
                                            return <span key ={`${i}-${x}`}>{x}</span>
                                        }
                                    })}
                                </p>
                            </div>
                          
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </article>
    )
}


const techStackContainer = (theme) => css`
    margin: 30px 0;

    h2{
        ${fontSize.contentFontSize30}
        ${theme === "light" ? grayTitleBorderBottom : whiteTitleBorderBottom}
    }

    ul {
        padding: 20px;
        gap: 14px;
        ${fontSize.contentFontSize16};
        align-items: center;
        flex-wrap: wrap;
        line-height: 1.5;
        word-break: keep-all;

        li {
            display: grid;
            grid-template-columns: 50px 1fr;
            gap: 10px;
            align-items: center;
            padding: 10px 0;

            img {
                width: 40px;
                height: 40px;
                justify-self: center;
                object-fit: cover;
            }

            p {
                width: 100%;
            }

            p + p {
                margin-top: 5px;
            }
        }
    }
`;