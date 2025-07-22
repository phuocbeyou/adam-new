/* eslint-disable @next/next/no-img-element */
"use client"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion" // Import motion

export const ScrollingText = ({
  text = "BECAUSE KINDNESS IS THE ONLY UTILITY THAT NEVER LOSES VALUE",
  speed = 50, // Lower = slower scroll
  backgroundColor = "rgba(255, 255, 255, 0.3)", // Equivalent to bg-white/10
  textColor = "#FFFFFF", // White for contrast
  fontSize = "14px",
}) => {
  const textContentRef = useRef<HTMLSpanElement>(null) // Ref for a single instance of the text
  const [singleTextWidth, setSingleTextWidth] = useState(0)

  useEffect(() => {
    if (textContentRef.current) {
      // Measure the width of a single instance of the text content
      setSingleTextWidth(textContentRef.current.offsetWidth)
    }
  }, [text])

  // Calculate duration based on speed and content width
  // The animation moves the content by `singleTextWidth` pixels.
  // If speed is pixels/second, duration = distance / speed.
  const animationDuration = singleTextWidth > 0 ? singleTextWidth / speed : 0

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
      {/* Use motion.div for the animated container */}
      <motion.div
        className="flex"
        style={{
          width: "fit-content", // Allow content to determine width
        }}
        // Animate the x position from 0 to -singleTextWidth
        animate={{ x: -singleTextWidth }}
        transition={{
          duration: animationDuration, // Use calculated duration
          ease: "linear", // Linear ease for constant speed
          repeat: Number.POSITIVE_INFINITY, // Repeat indefinitely
          repeatType: "loop", // Ensures it loops seamlessly by resetting x to 0 at the end of each cycle
        }}
      >
        {/* Render the text content multiple times to ensure seamless loop */}
        {/* We need at least two copies for a seamless loop from 0 to -width */}
        <span
          ref={textContentRef} // Attach ref to one instance to measure its width
          style={{
            paddingRight: "8rem", // Increased spacing to ensure lines don't touch
            color: textColor,
            fontSize,
            display: "flex", // Ensure flex for icon alignment
            alignItems: "center",
            gap: "0.5rem", // Tailwind's gap-2
          }}
          className="font-neueMachinaBold"
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" /> {text}
        </span>
        {/* Duplicate the content. Framer Motion will animate the container */}
        <span
          style={{
            paddingRight: "8rem", // Increased spacing
            color: textColor,
            fontSize,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          className="font-neueMachinaBold"
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" /> {text}
        </span>
        {/* Add more duplicates if the text is very short and the container needs to be wider than 2x text width */}
        <span
          style={{
            paddingRight: "8rem", // Increased spacing
            color: textColor,
            fontSize,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          className="font-neueMachinaBold"
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" /> {text}
        </span>
        <span
          style={{
            paddingRight: "8rem", // Increased spacing
            color: textColor,
            fontSize,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          className="font-neueMachinaBold"
        >
          <img src="/icon/lay.png" alt="Lay icon" className="w-5 h-5" /> {text}
        </span>
      </motion.div>
    </div>
  )
}
