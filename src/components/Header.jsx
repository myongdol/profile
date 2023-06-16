import React from "react";
import { css } from "@emotion/css";
import { NavLink } from "react-router-dom";
import { contentFontSize16, mainColor } from "../style/main";


export default function Header() {
    return (
        <nav css={headerContainer}>
            <ul>
            <li>
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
                <NavLink to='/profile'>Profile</NavLink>
            </li>
            </ul>
        </nav>
    )
}

const headerContainer = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
        ${contentFontSize16}
    }
    
    li{
        cursor: pointer;
        &:hover {
            background-color: ${mainColor};
        }
        &:active{
            border-bottom: 2px solid blue;
            background-color: ${mainColor};
        }
    }
    a{
        border: 1px solid;
        display: inline-block;
        padding: 10px 20px;
    }
`