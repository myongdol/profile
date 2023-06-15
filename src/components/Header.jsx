import React from "react";
import { css } from "@emotion/css";
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <nav css={headerContainer}>
            <li>
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
                <NavLink to='/profile'>Profile</NavLink>
            </li>

        </nav>
    )
}

const headerContainer = css`
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-around;

    li{
        cursor: pointer;
        &:hover,
        .active{
            border-bottom: 2px solid blue;
        }
    }
    a{
        border: 1px solid;
        display: inline-block;
        padding: 10px 20px;
    }
`