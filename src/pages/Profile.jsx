import React from "react";
import { css } from "@emotion/css";
import { mainSection } from "../style/main";
import Info from "../components/Info";
import Career from "../components/Career";
import Education from "../components/Education";
import Project from "../components/Project";
import techStacks from "../components/techStacks";

export default function Profile() {
    return (
        <main css={profileContainer}>
            <Info />
            <techStacks />
            <Career />
            <Education />
            <Project />
        </main>
    );
}

const profileContainer = css`
    ${mainSection}
`