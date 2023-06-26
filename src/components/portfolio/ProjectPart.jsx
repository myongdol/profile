import { css } from "@emotion/react";
import styled from "@emotion/styled";


export default function ProjectPart ({projectDetailsData}) {
    if (projectDetailsData === null) {
        return <div>Loading...</div>
    }

    const {part: projectPart} = projectDetailsData;
    console.log(projectPart);

    return (
        <ul css={css``}>
            {projectPart.map((project) => (
                <PartTitleList key={`project-part-${project.id}`}>
                    {project.title}
                    <ul>
                       {project.contentList.map((content) => (
                        <PartContentList key={`project-content-${content.id}`}>
                            {content.summary}
                        </PartContentList>
                       ))}
                    </ul>

                </PartTitleList>
            ))}

        </ul>
    )



}



const PartTitleList = styled.li`
    list-style: inside;
    list-style-type: "🐣";
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.4;
    margin-top: 10px;
`


const PartContentList = styled.li`
    list-style: inside;
    list-style-type: disc;
    font-weight: normal;
    font-size: 1.4rem;
    margin-left: 10px;
`