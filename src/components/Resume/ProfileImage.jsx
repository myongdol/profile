import { css } from "@emotion/react";



export default function ProfileImage() {
  return (
    <article css={infoContainer}>
      <div className='profile'>
        <img src='/image/ggam-1.jpg' alt='프로필 사진' />
      </div>
    </article>
  );
}



const infoContainer = css`
  div.profile {
    text-align: center;
    width: 256px;
    height: 256px;
    border-radius: 50%;
    overflow: hidden;
    img {
      margin-top: -14px;
      width: 100%;
    }
  }
`;