import { lazy } from "react";



export const ResumeComponentMap = {
    ProfileImage: lazy(() => import("./Resume/ProfileImage")),
    Name: lazy(() => import("./Resume/Name")),
    Info: lazy(() => import("./Resume/Info")),
    Introduce: lazy(() => import("./Resume/Introduce")),
    Career: lazy(() => import("./Resume/Career")),
    TechStack: lazy(() => import("./Resume/techStacks")),
    Education: lazy(() => import("./Resume/Education")),
    ProjectSection: lazy(() => import("./Resume/ProjectSection")),
  };
  
  export const ResumeComponent = ({ name }) => {
    const Component = ResumeComponentMap[name];
  
    return <Component />;
  };