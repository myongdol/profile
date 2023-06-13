import React from "react";
import {css} from "@emotion/react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav css={navContainer} >
            <li> 
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
                <NavLink to='/profile'>Profile</NavLink>
            </li>
        </nav>
    )
}

const navContainer = css`
    li{
        margin: 10px 10px;
    }
`