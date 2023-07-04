import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/css";

export function Nav() {
    return (
        <nav css={navContainer} >
            <li> 
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
                <NavLink to='/profile'>profile</NavLink>
            </li>
        </nav>
    )
}

const navContainer = css`
    border: 3px solid;
    border-radius: 20px;
    height: calc(100% - 210px);
    margin-top: 10px;
    padding: 20px;
    li{
        margin: 10px 10px;
    }
    li .active {
        color: aquamarine;
    }
`