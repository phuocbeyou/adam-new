/* eslint-disable @next/next/no-img-element */
"use client"
import { useRef, useEffect, useState } from "react"
import type React from "react"

import { motion } from "framer-motion"

interface CardScrollingLinesProps {
  text: string
  speed?: number // pixels per second
  textColor?: string
  fontSize?: string
}

const CardScrollingLines: React.FC<CardScrollingLinesProps> = ({
  text,
  speed = 30, // Slower speed for card lines
  textColor = "#FFFFFF",
  fontSize = "10px",
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
      className="overflow-hidden relative p-2.5" // padding: 10px
      style={{
        height: "40px", // Adjust height as needed
        display: "flex",
        flexDirection: "column", // Stack lines vertically
        justifyContent: "space-around", // Space between lines
        whiteSpace: "nowrap",
        maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
      }}
    >
      {/* First Line */}
      <motion.div
        className="flex"
        style={{ width: "fit-content" }}
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
            paddingRight: "4rem", // Spacing between repetitions
            color: textColor,
            fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem", // Tailwind's gap-1
          }}
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-3 h-3" /> {text}
        </span>
        <span
          style={{
            paddingRight: "4rem",
            color: textColor,
            fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-3 h-3" /> {text}
        </span>
        <span
          style={{
            paddingRight: "4rem",
            color: textColor,
            fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-3 h-3" /> {text}
        </span>
      </motion.div>

      {/* Second Line (offset slightly for "chasing" effect) */}
      <motion.div
        className="flex"
        style={{ width: "fit-content" }}
        animate={{ x: -singleTextWidth }}
        transition={{
          duration: animationDuration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: animationDuration / 2, // Start second line halfway through first
        }}
      >
        <span
          style={{
            paddingRight: "4rem",
            color: textColor,
            fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-3 h-3" /> {text}
        </span>
        <span
          style={{
            paddingRight: "4rem",
            color: textColor,
            fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-3 h-3" /> {text}
        </span>
        <span
          style={{
            paddingRight: "4rem",
            color: textColor,
            fontSize,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-3 h-3" /> {text}
        </span>
      </motion.div>
    </div>
  )
}

export default CardScrollingLines
