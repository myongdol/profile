import React from "react";
import { useSelector } from "react-redux";
import { css, Global } from "@emotion/react";

export default function GlobalStyle() {
    const state = useSelector((state) => state); 

    return <Global styles={style(state)} /> 
}

const style = (state) => css`

@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800");
  @font-face {
    font-family: "GangwonEduPowerExtraBoldA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

body {
    background-color: ${state ? "#fff" : "#202124"};
    color: ${state ? "#000" : "#eeeeee"};
    font-family: Nanum Gothic;
}
`;