/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../hooks/useTheme";
import { fontSize, whiteTitleBorderBottom, grayTitleBorderBottom } from "../../style/main";


export default function Introduce() {
     const [theme] = useTheme();

     return (
        <article css={introduceContainer(theme)} name='Introduce'> 
            <h2>안녕하세요</h2>
            <section>
                <p css={css`text-indent: 16px;`}>
                    <span>🐶</span>
                    개발자는 항상 새로운 변화를 가장 먼저 마주하는 사람들인 것 같습니다. 새로운 기술이나 지식을 습득 해야 할 때 어떤것을 선택해야 미래에 대비
                    할수 있을지. 보다 경쟁력이 있는 것은 어느것인지 고려 하는 것은 필수적이나 불확실성으로 인해 두려움을 갖는다면 성장하지 못할 것이라 생각합니다.
                    지금의 저는 부족할 지 모르지만 두려움을 갖기보다는 꾸준히 성장 할 수 있는 개발자라는 신념을 바탕으로 끊임없이 공부하고 있습니다.
                </p>
                <p css={css`margin-top: 6px; text-indent: 16px;`}>
                    <span>🐻‍❄️</span>
                    프론트엔드 개발자가 되기 위하여 부트캠프 과정을 수강하였습니다. 새로운 분야에 대한 기대감과 한편으로는 불안한 마음도 있었지만 낯선 지식과
                    기술 스택들을 응용하여 새로운 것을 구현하고 사용자들에게 제공하는 제품에 대해 고민하고 개발을 해냈을때의 뿌듯함과 성취감은 개발자로서의 길을
                    포기하지 않도록 만드는 가장 큰 원동력이 되었습니다. 현재 부트캠프 수료 후에도 개발자가 되기 위하여 끊임없이 학습하는 것을 멈추지 않고 공부하고 있습니다.
                </p>
            </section>
        </article>
     );
}


const introduceContainer = (theme) => css`
    margin: 30px 0;

    h2 {
        ${theme === "light" ? grayTitleBorderBottom : whiteTitleBorderBottom}
        ${fontSize.contentFontSize30}
    }
    
    section {
        margin: 20px 0;
        ${fontSize.contentFontSize16}
        line-height: 1.5;
    }
`;