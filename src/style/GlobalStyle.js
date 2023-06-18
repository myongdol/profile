import React from "react";
import { useSelector } from "react-redux";
import { css, Global } from "@emotion/react";

export default function GlobalStyle() {
    const state = useSelector((state) => state); 

    return <Global styles={style(state)} /> 
}

const style = (state) => css`
body {
    background-color: ${state ? "#fff" : "#202124"};
}
`;