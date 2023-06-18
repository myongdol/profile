import React from "react";
import { css } from "@emotion/css";
import { NavLink } from "react-router-dom";
import { contentFontSize16, mainColor } from "../style/main";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeMode } from "../redux/actions/themeAction";


export default function Header() {
    const state = useSelector((state) => state);
    const [theme, setTheme] = useState(state);

    const dispatch = useDispatch();

    const handleChangeMode = () => {
        dispatch(changeThemeMode(!theme));
        setTheme(!theme);
    };



    return (
        <nav css={headerContainer}>
            <ul>
            <li>
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
                <NavLink to='/profile'>Profile</NavLink>
            </li>
            <li className="themeButton" onClick={handleChangeMode}>
                {state ? "❤️" : "🖤"}
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
    z-index: 999;
    background-color: white;

    ul{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 100px;
        ${contentFontSize16}
        border: 1px solid;
        max-width: 1200px;
        margin: 0 auto;
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
        &.themeButton {
            font-size: 3rem;
            margin-left: 2px;
        }
    }
    a{
        border: 1px solid;
        display: inline-block;
        padding: 10px 20px;
    }
`