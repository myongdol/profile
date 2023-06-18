import React from "react";
import { css } from "@emotion/css";
import { mainSection } from "../style/main";
import MotionImage from "../components/homepage/MotionImage";
import { useSelector } from "react-redux";



export default function Home() {
    const state = useSelector((state) => state); 


    return (
        <section css={homeContainer({state})}>
            <MotionImage />
        </section>
    )
}

const homeContainer = ({state}) => css`
    color: ${state ? "#000" : "#fff"}
`