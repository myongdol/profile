import styled from "@emotion/styled";
import React, { useState } from "react";
import { Message } from "./Message";

const scrollText = [
  { id: 1, text: "안녕하세요", scale: 1 },
  { id: 2, text: "저희 집", scale: 1.5 },
  { id: 3, text: "강아지", scale: 2 },
  { id: 4, text: "깜이에요", scale: 2.5 },
  { id: 5, text: "감사합니다", scale: 3.3 },
];

export function LandingPage() {
  const [step, setStep] = useState(1);
  const target = scrollText.find((x) => x.id === step);

  return (
    <div>
      <Image>
        <img
          style={{
            transform: `scale(${target.scale})`,
            transition: "all .2s ease-in-out",
          }}
          src='/image/ggam-1.jpg'
          alt='깜이사진'
        />
      </Image>
      
      {scrollText.map((item) => (
        <Message
          key={`${item.id}`}
          id={item.id}
          text={item.text}
          transform={item.transform}
          onViewportEnter={() => {
            setStep(item.id);
          }}
        />
      ))}
    </div>
  );
}



const Image = styled.div`
  position: fixed;
  width: 450px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1000px;
  background: black;
  img {
    width: 100%;
  }
`;