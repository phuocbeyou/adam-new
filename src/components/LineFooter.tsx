/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useEffect, useState } from "react";

export const Scrolling = ({
  text = "Let every $ADAM be a prayer for the betterworld",
  speed = 50, // Lower = slower scroll
  backgroundColor = "#000000",
  textColor = "#FFFFFF",
  fontSize = "14px",
}) => {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (
      textRef.current &&
      typeof textRef.current === "object" &&
      "offsetWidth" in textRef.current
    ) {
      setTextWidth((textRef.current as HTMLElement).offsetWidth);
    }
  }, [text]);

  const animationDuration = textWidth > 0 ? (textWidth / speed).toFixed(2) : 0;

  return (
    <div
      className="overflow-hidden relative"
      style={{
        backgroundColor,
        height: "50px",
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "fit-content",
          animation: `scroll ${animationDuration}s linear infinite`,
        }}
      >
        {/* Lặp lại đoạn text nhiều lần để đảm bảo luôn liền mạch */}
        <div
          ref={textRef}
          style={{
            display: "flex",
            color: textColor,
            fontSize,
            fontWeight: "bold",
          }}
        >
          <span
            style={{ paddingRight: "2rem" }}
            className="flex items-center gap-2"
          >
            <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" />{" "}
            {text}
          </span>
          <span
            style={{ paddingRight: "2rem" }}
            className="flex items-center gap-2"
          >
            <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" />{" "}
            {text}
          </span>
          <span
            style={{ paddingRight: "2rem" }}
            className="flex items-center gap-2"
          >
            <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" />{" "}
            {text}
          </span>
          <span
            style={{ paddingRight: "2rem" }}
            className="flex items-center gap-2"
          >
            <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" />{" "}
            {text}
          </span>
        </div>
        {/* Bản sao giúp vòng lặp mượt */}
        <div
          style={{
            display: "flex",
            color: textColor,
            fontSize,
            fontWeight: "bold",
          }}
        >
          <span
            style={{ paddingRight: "2rem" }}
            className="flex items-center gap-2"
          >
            <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" />{" "}
            {text}
          </span>
          <span
            style={{ paddingRight: "2rem" }}
            className="flex items-center gap-2"
          >
            <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" />{" "}
            {text}
          </span>
          <span
            style={{ paddingRight: "2rem" }}
            className="flex items-center gap-2"
          >
            <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" />{" "}
            {text}
          </span>
          <span
            style={{ paddingRight: "2rem" }}
            className="flex items-center gap-2"
          >
            <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" />{" "}
            {text}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};
