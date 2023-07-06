import styled from "@emotion/styled";
import { lazy } from "react";

export const ResumeComponentMap = {
  ProfileImage: {
    Component: lazy(() => import("./Resume/ProfileImage")),
    height: 100,
    marginBottom: 40,
  },
  Name: {
    Component: lazy(() => import("./Resume/Name")),
    height: 45,
    marginBottom: 40,
  },
  Info: {
    Component: lazy(() => import("./Resume/Info")),
    height: 142,
  },
  Introduce: {
    Component: lazy(() => import("./Resume/Introduce")),
    height: 363,
  },
  Career: {
    Component: lazy(() => import("./Resume/Career")),
    height: 239,
  },
  TechStack: {
    Component: lazy(() => import("./Resume/TechStack")),
    height: 284,
  },
  Education: {
    Component: lazy(() => import("./Resume/Education")),
    height: 997,
  },
  ProjectSection: {
    Component: lazy(() => import("./Resume/ProjectSection")),
    height: 527,
  },
};

export const ResumeComponent = ({ name }) => {
  const { Component } = ResumeComponentMap[name];

  if (Component == null) {
    return <></>;
  }

  return <Component />;
};


ResumeComponent.Skeleton = ({ name }) => {
  const { height, marginBottom } = ResumeComponentMap[name];

  return <Skeleton height={height} marginBottom={marginBottom}></Skeleton>;
};


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