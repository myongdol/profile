import { css } from "@emotion/css";



export const mainSection = css`
    padding: 100px 40px;
    border: 1px solid;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    min-width: 334px;

    @media (max-width: 600px) {
        padding: 100px 20px;
    }
`;

export const mainColor = "rgba(135,131,120,0.15)";

export const subColor = "rgba(208,199,173,0.16";

export const boxTextColor = "#EB5757";


//라이트 모드 

export const lightBackgroundColor = "#fff";

export const lightFontColor = "#000";

export const lightNavBackgroundColor = "#eeeeee";

export const lightBoxShadow = "rgb(15 15 15 / 10%) 2px 4px 4px 0px, rgb(15 15 15 / 10%) 4px 4px 10px";

export const grayNormalBorderBottom = css`
    border-bottom: 1px solid rgba(55, 53, 47, 0.16);
`

export const grayTitleBorderBottom = css`
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(55, 53, 47, 0.16);
`

export const grayBorder = css`
    border: 1px solid rgba(55, 53, 47, 0.16);
`


// 다크 모드 

export const darkBackgroundColor = "#202124";

export const darkNavBackgroundColor = "#2c2c2f"

export const darkFontColor = "#eeeeee";

export const darkBoxShadow = "rgb(0 0 0 / 10%) 2px 4px 0px, rgb(0 0 0 / 10%) 4px 4px 10px";

export const whiteNormalBorderBottom = css`
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const whiteTitleBorderBottom = css`
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding-bottom: 8px;
`

export const whiteBorder = css`
    border: 1px solid rgba(255, 255, 255, 0.5);
`


// 폰트 사이즈

export const fontSize = {
    contentFontSize16: css`
    font-size: 1.6rem;
    `,
    contentFontSize30: css`
    font-size: 3rem;
    `,
    contentFontSize40: css`
    font-size: 4rem;
    `,

}

