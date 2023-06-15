import React from "react";
import { css } from "@emotion/css";
import { mainSection } from "../style/main";

export default function Profile() {
    return (
        <section css={profileContainer}>
            <h1>hi hi </h1>
        </section>
    );
}

const profileContainer = css`
    ${mainSection}
`