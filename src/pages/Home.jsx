import React from "react";
import { css } from "@emotion/css";
import { mainSection } from "../style/main";
import MotionImage from "../components/homepage/MotionImage";

export default function Home() {
    return (
        <section css={homeContainer}>
            <MotionImage />
        </section>
    )
}

const homeContainer = css`
    ${mainSection}
`