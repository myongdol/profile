import React from "react";
import { css } from "@emotion/react";
import { useTheme } from "../hooks/useTheme";




export function ThemeButton({ handleChangeMode }) {
    const [theme] = useTheme();
  
    return (
      <button css={modeButtonContainer} onClick={handleChangeMode}>
        {theme === "light" ? "🤍" : "🖤"}
      </button>
    );
  }


  const modeButtonContainer = css`
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: unset;
  border: none;
  font-size: 6rem;
  z-index: 999;
  cursor: pointer;
`;