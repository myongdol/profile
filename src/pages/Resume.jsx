import React, {Suspense} from "react";
import { css } from "@emotion/css";
import { ResumeComponent } from "../components/ResumeComponent";
import { mainSection } from "../style/main";
import styled from "@emotion/styled";


const defaultArray = [
    { name: "ProfileImage", height: 256, marginBottom: 40 },
    { name: "Name", height: 45, marginBottom: 40 },
    { name: "Info", height: 142 },
    { name: "Introduce", height: 363 },
    { name: "Career", height: 239 },
    { name: "TechStacks", height: 860 },
    { name: "Education", height: 284 },
    { name: "ProjectSection", height: 997 },
  ];
  

  export function Resume() {
    return (
      <main css={resumeContainer}>
        {defaultArray.map((x) => (
          <Suspense key={x.name} fallback={<Skeleton height={x.height} />}>
            <ResumeComponent name={x.name} />
          </Suspense>
        ))}
      </main>
    );
  };


  const resumeContainer = css`
    ${mainSection};
  `;
  
  const Skeleton = styled.div`
    margin-bottom: ${(props) => props.marginBottom ?? 30}px;
    width: 100%;
    height: ${(props) => props.height ?? 100}px;
    border-radius: 3px;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
    @keyframes skeleton-gradient {
      0% {
        background-color: rgba(165, 165, 165, 0.1);
      }
      50% {
        background-color: rgba(165, 165, 165, 0.3);
      }
      100% {
        background-color: rgba(165, 165, 165, 0.1);
      }
    }
  `;