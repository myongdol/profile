import React from "react";
import { css } from "@emotion/css";
import { useFetch } from "../../hooks/useFetch";
import {
  mainColor,
  boxTextColor,
  fontSize,
  grayTitleBorderBottom,
  whiteTitleBorderBottom,
  lightBoxShadow,
  darkBoxShadow,
} from "../../style/main";
import { useTheme } from "../../hooks/useTheme";
import {CircleButton} from "../common/CircleButton";
import styled from "@emotion/styled";


export default function ProjectSection() {
  const fetchUrl = "/data/resume/projectInfoData.json";
  const fetchStorage = "projectInfoData";
  const [theme] = useTheme();

  const { dataList: projectList } = useFetch(fetchUrl, fetchStorage);

  const putNewline = (data) => {
    const paragraph = data.split("/n");
    return paragraph;
  }
  return (
    <article name="ProjectSection" css={projectInfoContainer(theme)}>
      <h2>프로젝트</h2>
      <Container>
        {projectList.map((item) => (
          <ProjectCard key={`project-${item.id}`} theme>

            <img
              className="no-print"
              css={css`
                display: block;
                width: 100%;
                height: 150px;
                object-fit: cover;
                overflow: hidden;
              `}
              src={item.projectImage}
              alt=''
            />

            <ButtonContainer className="no-print">
              <div className='circle-button-container'>
                <CircleButton
                  onClick={() => {
                    window.open(item.repositoryLink, "_blank");
                  }}
                  light={<img src='/images/icons/github-light-icon.png' alt='' />}
                  dark={<img src='/images/icons/github-dark-icon.png' alt='' />}
                />
                <CircleButton>
                  <img src="/image/icon/notion-icon.svg" alt="notion" />
                </CircleButton>
              </div>
              <a href={item.projectLink} target='_blank' rel='noreferrer'>
                <CircleButton type='button' className='themore-button'>
                  😃 보러가기
                </CircleButton>
              </a>
            </ButtonContainer>

            <ProjectCardTextContainer>
              <ProjectName>{item.name}</ProjectName>
              <ProjectPeriod>프로젝트 진행기간 : {item.period}</ProjectPeriod>
              <div className="print">{item.projectLink}</div>
              <ProjectSummary>
                {putNewline(item.summary).map((summary, index) => (
                  <p key={`summary-${index}`}>{summary}</p>
                ))}
              </ProjectSummary>
              <TechStackContainer>
                {item.techStack.name.map((x, index) => (
                  <li key={`techStack-${index}`}>{x}</li>
                ))}
              </TechStackContainer>
            </ProjectCardTextContainer>
          </ProjectCard>
        ))}
      </Container>
    </article>
  );
}

const projectInfoContainer = (theme) => css`
  margin: 30px 0;

  h2 {
    ${theme === "light" ? grayTitleBorderBottom : whiteTitleBorderBottom}
    ${fontSize.contentFontSize30}
  }
  `;
  
  const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin: 20px 0;
  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ProjectCard = styled.section`
  position: relative;
  ${fontSize.contentFontSize16}
  border-radius: 3px;
  overflow: hidden;
  box-shadow: ${(props) => (props.theme === "light" ? lightBoxShadow : darkBoxShadow)};
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  left: 10px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0 0 10px;
  .themore-button {
    width: auto;
    border-radius: 8px;
    padding: 0 10px;
    font-weight: bold;
  }
  .circle-button-container {
    display: flex;
    gap: 10px;
  }
`;

const ProjectCardTextContainer = styled.div`
  padding: 20px;
  position: relative;
  p {
    line-height: 1.5;
  }
  p + p {
    margin-top: 16px;
  }
`;

const ProjectName = styled.p`
  font-weight: bold;
  text-align: center;
`;

const ProjectPeriod = styled.p`
  text-align: end;
  font-size: 1.2rem;
  font-style: italic;
`;

const TechStackContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 10px 0 20px;
  li {
    padding: 3px 6px;
    background-color: ${mainColor};
    border-radius: 3px;
    color: ${boxTextColor};
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const ProjectSummary = styled.div`
  padding: 10px;
  height: 100px;
  margin-top: 16px;
  overflow: scroll;
`;
