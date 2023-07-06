import { useEffect } from "react";




let onlyOneTime;

export function GreetingLog() {
  useEffect(() => {
    if (onlyOneTime) {
      return;
    }

    console.log(
      `%c안녕하세요 반갑습니다~ 🙇\n myongdol132@gmail.com`,
      "color: black; background-color: white;padding: 4px; border-radius: 4px; font-size:32px"
    );

    onlyOneTime = true;
  }, []);

  return null;
}