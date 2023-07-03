import React from "react";
import { css } from "@emotion/css";
import { mainSection } from "../style/main";
import Info from "../components/Resume/Info";
import Career from "../components/Resume/Career";
import Education from "../components/Resume/Education";
import ProjectSection from "../components/Resume/ProjectSection";
import TechStacks from "../components/Resume/techStacks";
import Introduce from "../components/Resume/Introduce";
import { ResumeComponent } from "../components/ResumeComponent";


const defaultArray = [
    "Info",
    "Introduce",
    "Career",
    "TechStack",
    "Education",
    "ProjectSection",
]


export default function Resume() {


    return (
        <main css={profileContainer}>
           {defaultArray.map((x) => (
            <ResumeComponent key={x} name={x} />
           ))}
        </main>
    );
}

const profileContainer = css`
    ${mainSection}
`