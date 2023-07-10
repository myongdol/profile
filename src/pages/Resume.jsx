/** @jsxImportSource @emotion/react */
import { mainSection } from "../style/main";
import { ResumeComponent } from "../components/ResumeComponent";
import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { ResumeType } from "../constant";
import { printStyle, resumesStyling } from "../style/resumeStyle";
import { css } from "@emotion/css";


export function Resume() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") ?? "default";
  const { components } = ResumeType[type] ?? {};

  if (components == null) {
    return (
      <div style={{ margin: "200px" }}>
        <h1>Not Found</h1>
      </div>
    );
  } 
  
  return (
    <main css={resumeContainer(type)}>
      {components.map((x, index) => (
        <Suspense key={`${x.name}-${index}`} fallback={<ResumeComponent.Skeleton name={x} />}>
          <ResumeComponent name={x} />
        </Suspense>
      ))}
    </main>
  );
}

const resumeContainer = (type) => css`
  ${mainSection};
  ${printStyle}
  ${resumesStyling[type] == null ? "" : resumesStyling[type]}
  `;