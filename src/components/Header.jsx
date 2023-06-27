import React from "react";
import { css } from "@emotion/css";
import { NavLink } from "react-router-dom";
import { 
    contentFontSize16,
     mainColor,
    darkNavBackgroundColor,
    lightNavBackgroundColor,
    darkBackgroundColor,
    lightBackgroundColor
} from "../style/main";
import { useTheme } from "../hooks/useTheme";


export default function Header() {
    const [theme] = useTheme();


    return (
        <nav css={headerContainer(theme)}>
            <ul>
                <li>
                    <NavLink to='/'>HOME</NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
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
        gap: 100px;
        ${contentFontSize16}
        border: 1px solid;
        max-width: 1200px;
        margin: 16px 0px 0 16px;
    }
    
    li{
        cursor: pointer;
        border-width: 1.8px 1.8px 0px 1.8px;
        border-style: solid;
        border-radius: 10px 10px 0 0;
        &:hover {
            background-color: ${mainColor};
        }
        &:active{
            background-color: ${theme ? lightBackgroundColor : darkBackgroundColor};
        }
    }

        li + li {
            margin-left: 6px;
        }

    a{
        display: inline-block;
        padding: 10px 20px;
        border-radius: 10px 10px 0 0;
    }
`