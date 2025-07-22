/* eslint-disable @next/next/no-img-element */
"use client"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion" // Import motion

export const Scrolling = ({
  text = "Let every $ADAM be a prayer for the better world",
  speed = 50, // Lower = slower scroll
  backgroundColor = "#000000",
  textColor = "#FFFFFF",
  fontSize = "14px",
}) => {
  const textContentRef = useRef<HTMLSpanElement>(null)
  const [singleTextWidth, setSingleTextWidth] = useState(0)

  useEffect(() => {
    if (textContentRef.current) {
      setSingleTextWidth(textContentRef.current.offsetWidth)
    }
  }, [text])

  const animationDuration = singleTextWidth > 0 ? singleTextWidth / speed : 0

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
      <motion.div
        className="flex"
        style={{
          width: "fit-content",
        }}
        animate={{ x: -singleTextWidth }}
        transition={{
          duration: animationDuration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <span
          ref={textContentRef}
          style={{
            paddingRight: "8rem", // Increased spacing
            color: textColor,
            fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" /> {text}
        </span>
        <span
          style={{
            paddingRight: "8rem", // Increased spacing
            color: textColor,
            fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" /> {text}
        </span>
        <span
          style={{
            paddingRight: "8rem", // Increased spacing
            color: textColor,
            fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" /> {text}
        </span>
        <span
          style={{
            paddingRight: "8rem", // Increased spacing
            color: textColor,
            fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" /> {text}
        </span>
      </motion.div>
    </div>
  )
}
