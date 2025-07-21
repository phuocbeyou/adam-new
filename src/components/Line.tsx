/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useEffect, useState } from "react";

export const ScrollingText = ({
  text = "BECAUSE KINDNESS IS THE ONLY UTILITY THAT NEVER LOSES VALUE",
  speed = 50, // Lower = slower scroll
  backgroundColor = "rgba(255, 255, 255, 0.3)", // Equivalent to bg-white/10
  textColor = "#FFFFFF", // White for contrast
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
        background: backgroundColor,
        height: "50px",
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        opacity: 1,
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "fit-content",
          animation: `scroll ${animationDuration}s linear infinite`,
        }}
      >
        {/* Repeated text for seamless scrolling */}
        <div
          ref={textRef}
          className="flex font-neueMachinaBold"
          style={{
            color: textColor,
            fontSize,
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
        {/* Duplicate for smooth looping */}
        <div
          className="flex font-neueMachinaBold"
          style={{
            color: textColor,
            fontSize,
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
