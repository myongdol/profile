import React from "react";
import { css } from "@emotion/css";
import { mainSection } from "../style/main";
import Info from "../components/profile/Info";
import Career from "../components/profile/Career";
import Education from "../components/profile/Education";
import Project from "../components/profile/Project";
import techStacks from "../components/profile/techStacks";



export default function Profile() {
    return (
        <main css={profileContainer}>
            <Info />
            <Career />
            <Education />
            <techStacks />
            <Project />
        </main>
    );
}

const profileContainer = css`
    ${mainSection}
`