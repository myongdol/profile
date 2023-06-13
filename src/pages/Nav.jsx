import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/css";

export default function Nav() {
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
    li{
        margin: 10px 10px;
    }
`