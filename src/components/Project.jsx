import React from "react";
import { URLs } from "../constant";

export default function Project() {
    return (
        <article>
            <h2>프로젝트 목록</h2>
            <section>
                <img src='https://avatars.githubusercontent.com/u/110724985?v=4' alt="dd" />
                <div>
                    <p>스택오버플로우</p>
                    <p>123기간 ~ 기간123</p>
                    <a href={URLs.project1} target="_blank" rel="noreferrer">
                        Github Repository 이동
                    </a>
                    <ul>
                        <li>JavaScript, React</li>
                    </ul>
                </div>
            </section>

            <section>
                <img src='https://avatars.githubusercontent.com/u/110724985?v=4' alt="dd" />
                <div>
                    <p>스택오버플로우</p>
                    <p>123기간 ~ 기간123</p>
                    <a href={URLs.project1} target="_blank" rel="noreferrer">
                        Github Repository 이동
                    </a>
                    <ul>
                        <li>JavaScript, React</li>
                    </ul>
                </div>
            </section>

            <section>
                <img src='https://avatars.githubusercontent.com/u/110724985?v=4' alt="dd" />
                <div>
                    <p>스택오버플로우</p>
                    <p>123기간 ~ 기간123</p>
                    <a href={URLs.project1} target="_blank" rel="noreferrer">
                        Github Repository 이동
                    </a>
                    <ul>
                        <li>JavaScript, React</li>
                    </ul>
                </div>
            </section>
        </article>
    )
}