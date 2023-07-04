import { css } from "@emotion/react";
import { mainSection } from "../style/main";
import { useMoveScroll } from "../hooks/useMoveScroll";
import {ProjectPart} from "../components/portfolio/ProjectPart";
import {useFetch} from "../hooks/useFetch";

export function Portfolio() { 

    const menuText = ["🦊Stack Over Flow", "클론코딩 팀 프로젝트"];
    const {elementRef: menuRef, onMoveElement: onMoveToMenu} = useMoveScroll(menuText);

    const fetchUrl = "data/portfolio/projectDetailData.json"
    const fetchStorage = "projectDetailData"

    const {dataList: projectDetailData} = useFetch(fetchUrl, fetchStorage);

    return (
        <main css={PortfolioContainer}>
            <ul>
                {menuText.map((projectName, index) => (
                    <li key={`project-name-${index}`}>
                        <button type='button' onClick={() => onMoveToMenu(index)}>
                            {projectName}
                        </button>
                    </li>
                ))}
            </ul>

            <p>
            ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG
            ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG
            </p>
            <p>
            ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG
            ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG
            </p>
            <p>
            ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG
            ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG
            </p>
            <p>
            ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG
            ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG ABCDEFG
            </p>

            {menuText.map((projectName, index) => (
                <div ref={menuRef?.current[index]}
                    css={css`padding-top: 100px;`}
                    key={`project-name-${index}`}
                >
                    <h2>{projectName}</h2>
                    <ProjectPart projectDetailData={projectDetailData[index]}/>
                </div>
            ))}

        </main>
    )


}


const PortfolioContainer = css`
    ${mainSection}
`;