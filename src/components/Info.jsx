import React from "react";
import { css } from "@emotion/css";

export default function Info() {
    return (
        <section css={infoContainer}>
            this is info 
        </section>
    )
}

const infoContainer = css`
    border: 3px solid;
    border-radius: 20px;
    height: 200px;
    padding: 20px;
`