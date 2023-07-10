import { css } from "@emotion/react";



export default function ProfileImage() {
  return (
    <article name='ProfileImage' css={infoContainer}>
      <div className='profile'>
        <img src='/image/profileImage.jpg' alt='프로필 사진' />
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
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;