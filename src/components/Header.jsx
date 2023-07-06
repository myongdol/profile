import React from "react";
import { css } from "@emotion/css";
import { NavLink } from "react-router-dom";
import { 
    fontSize,
    mainColor,
    darkNavBackgroundColor,
    lightNavBackgroundColor,
    darkBackgroundColor,
    lightBackgroundColor
} from "../style/main";
import { useTheme } from "../hooks/useTheme";
import { GithubIcon } from "./Resume/GithubIcon";


export function Header() {
    const [theme] = useTheme();
    const title = window.document.title;

    const downloadResumePdf = () => {
    window.addEventListener("afterprint", ()=> {
        window.document.title = title;
    });

    window.document.title = " ";
    window.print();
    }


    return (
        <nav css={headerContainer(theme)} className='no-print'>
            <ul>
                <li>
                    <NavLink to='/'>HOME</NavLink>
                </li>
                <li>
                    <NavLink to='/resume'>Resume</NavLink>
                </li>
                <li style={{ marginLeft: "auto" }}>
                    <button
                        css={css`
                        padding: 16px;
                        cursor: pointer;
                        `}
                        onClick={downloadResumePdf}
                    >
                        Enter
                    </button>
                </li>

                <li className='github-repository-link' style={{ marginLeft: "10px" }}>
                    <a href='https://github.com/myongdol/profile' target="_blank" rel="noreferrer">
                        <GithubIcon />
                    </a>
                </li>
            </ul>
        </nav>
    )
}





const headerContainer = (theme) => css`
    font-family: "GangwonEduPowerExtraBoldA";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: ${theme ? lightNavBackgroundColor : darkNavBackgroundColor};

    ul{
        display: flex;
        align-items: center;
        justify-content: start;
        ${fontSize.contentFontSize16}
        margin: 16px 0px 0 16px;
    }
    
    li{
        cursor: pointer;
        box-shadow: ${theme === "light" ? "2px -2px 3px 0px rgb(200 200 200)" : "2px 0px 3px 0px rgb(24 24 24)"};
        &:hover {
            background-color: ${mainColor};
            box-shadow: none;
        }
        .active{
            background-color: ${theme ? lightBackgroundColor : darkBackgroundColor};
        }
    }

        li + li {
            margin-left: 6px;
        }

        li.github-repository-link {
            margin-left: auto;
            align-self: flex-end;

            a {
                display: block;
                padding: 10px 12px;
                
                svg {
                    width: 30px;
                    height: 30px;
                }
            }
        }

    a:not(li.github-repository-link a){
        display: inline-block;
        padding: 10px 20px;
        border-radius: 10px 10px 0 0;
    }
`;