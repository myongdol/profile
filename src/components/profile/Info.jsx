import React from "react";
import { css } from "@emotion/css";
import { URLs } from "../../constant";

export default function Info() {
    return (
        <article css={infoContainer}>
            <img src='https://avatars.githubusercontent.com/u/110724985?v=4' alt='프로필사진' />
            
            <h1>Profile | Myongdol</h1>

            <section>
                <p className="description">
                    <span>😁</span>
                    <span>
                        프론트엔드 개발자가 되기 위해 노력중인 myongdol 입니다.
                        <br />
                        잘 만들어 보자ㅏㅏㅏㅏㅏ
                    </span>
                </p>
                <ul>
                    <li>
                        <a href={URLs.email} target="_blank" rel="noreferrer">
                            🐶<span>myongdol132@gmail.com</span>
                        </a>
                    </li>
                    <li>
                        <a href={URLs.blog} target="_blank" rel="noreferrer">
                            😎<span>Blog</span>
                        </a>
                    </li>
                    <li>
                        <a href={URLs.github} target="_blank" rel="noreferrer">
                            🐱<span>Github</span>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    )
}

const infoContainer = css`
    img {
        width: 256px;
        height: 256px;
        border-radius: 50%;
    }
    h1 {
        margin: 40px 0;
        font-size: 4rem;
    }
    section {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        line-height: 1.5;
        font-size: 1.6rem;
    }
    p {
        border: 1px solid rgba(55, 53, 47, 0.16);
        border-radius: 20px;
        padding: 20px;
    }
    ul{
        width: 40%;
        padding: 20px;
        overflow: scroll;
    }
    .description{
        display: flex;
        width: 60%;
        align-items: center;
        gap: 10px;
        
        span:first-of-type {
            height: 100%;
            margin-top: 14px;
        }
    }
    li{
        margin: 4px 0;

        a span {
            margin-right: 10px;
            vertical-align: middle;
            border-bottom: 0.1rem solid rgba(55, 53, 47, 0.16);
        }
    }
`