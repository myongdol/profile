import React from "react";
import { css } from "@emotion/css";
import { mainSection } from "../style/main";
import Info from "../components/profile/Info";
import Career from "../components/profile/Career";
import Education from "../components/profile/Education";
import Project from "../components/profile/Project";
import TechStacks from "../components/profile/techStacks";
import { useSelector } from "react-redux";


export default function Profile() {
    const state = useSelector((state) => state);


    return (
        <main css={profileContainer}>
            <Info state={state}/>
            <Career />
            <Education />
            <TechStacks />
            <Project state={state}/>
        </main>
    );
}

const profileContainer = css`
    ${mainSection}
`