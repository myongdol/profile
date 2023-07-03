import React from "react";
import { css } from "@emotion/css";
import { mainSection } from "../style/main";
import Info from "../components/Resume/Info";
import Career from "../components/Resume/Career";
import Education from "../components/Resume/Education";
import ProjectSection from "../components/Resume/ProjectSection";
import TechStacks from "../components/Resume/techStacks";
import Introduce from "../components/Resume/Introduce";



export default function Resume() {


    return (
        <main css={profileContainer}>
            <Info/>
            <Introduce />
            <Career />
            <Education />
            <TechStacks />
            <ProjectSection/>
        </main>
    );
}

const profileContainer = css`
    ${mainSection}
`