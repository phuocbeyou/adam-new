"use client"

import { motion } from "framer-motion"

interface FundItemProps {
    name: string
    percent: string
    delay: number
    boxPosition: { top: string; left?: string; right?: string }
    lineStart: { x: number; y: number } // Absolute coordinates on canvas (Heart side)
    lineEnd: { x: number; y: number } // Absolute coordinates on canvas (Box side)
    gradientId: string
}

export default function FundItem({ name, percent, delay, boxPosition, lineStart, lineEnd, gradientId }: FundItemProps) {
    // Calculate SVG properties based on start and end points
    const minX = Math.min(lineStart.x, lineEnd.x)
    const minY = Math.min(lineStart.y, lineEnd.y)
    const maxX = Math.max(lineStart.x, lineEnd.x)
    const maxY = Math.max(lineStart.y, lineEnd.y)

    const svgWidth = maxX - minX + 20 // Add padding for control points
    const svgHeight = maxY - minY + 20 // Add padding for control points

    const pathStartX = lineStart.x - minX + 10 // Relative to SVG viewBox, +10 for padding
    const pathStartY = lineStart.y - minY + 10
    const pathEndX = lineEnd.x - minX + 10
    const pathEndY = lineEnd.y - minY + 10

    // Control points for a cubic Bezier curve to create a soft, outward bend
    const curveOffset = 25 // Controls how much the line bends outwards (adjust this value)

    let cp1x, cp1y, cp2x, cp2y

    // Determine the general direction to apply the curve consistently
    const isLeftToRight = lineEnd.x > lineStart.x

    if (isLeftToRight) {
        // For lines going from left (heart) to right (box)
        // Bend slightly downwards/outwards
        cp1x = pathStartX + (pathEndX - pathStartX) * 0.3
        cp1y = pathStartY + (pathEndY - pathStartY) * 0.3 + curveOffset
        cp2x = pathStartX + (pathEndX - pathStartX) * 0.7
        cp2y = pathStartY + (pathEndY - pathStartY) * 0.7 + curveOffset
    } else {
        // For lines going from right (heart) to left (box)
        // Bend slightly upwards/outwards
        cp1x = pathStartX + (pathEndX - pathStartX) * 0.3
        cp1y = pathStartY + (pathEndY - pathStartY) * 0.3 - curveOffset
        cp2x = pathStartX + (pathEndX - pathStartX) * 0.7
        cp2y = pathStartY + (pathEndY - pathStartY) * 0.7 - curveOffset
    }

    const linePath = `M${pathStartX} ${pathStartY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pathEndX} ${pathEndY}`
    // Estimate line length for stroke-dasharray, increased multiplier for curves
    const lineLength = Math.sqrt(Math.pow(pathEndX - pathStartX, 2) + Math.pow(pathEndY - pathStartY, 2)) * 1.3

    // Position for the dot SVG at the START of the line (near the heart)
    const dotSvgLeft = lineStart.x - 10 // Center the 20x20 dot SVG
    const dotSvgTop = lineStart.y - 10

    // Dot stroke animation properties
    const dotRadius = 4 // Inner dot radius
    const outerRingRadius = 8 // Outer ring radius
    const outerRingCircumference = 2 * Math.PI * outerRingRadius

    return (
        <>
            {/* Fund Box */}
            <motion.div
                initial={{ opacity: 0, x: boxPosition.left ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: delay + 1.5 }}
                className={`absolute flex items-center justify-between gap-4 rounded-full border border-[#35A5D5] bg-[#1a203f] px-6 py-3 text-white text-lg font-semibold whitespace-nowrap`}
                style={boxPosition}
            >
                <span>{name}</span>
                <span className="text-[#35A5D5]">{percent}</span>
            </motion.div>

            {/* Connecting Line */}
            <motion.svg
                className={`absolute z-10`}
                style={{ left: minX - 10, top: minY - 10 }} // Adjust SVG position by padding
                width={svgWidth}
                height={svgHeight}
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                fill="none"
            >
                <motion.path
                    d={linePath}
                    stroke={`url(#${gradientId})`}
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    initial={{ strokeDashoffset: lineLength }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: delay + 0.5 }}
                    style={{ strokeDasharray: lineLength }}
                />
                <defs>
                    <linearGradient
                        id={gradientId}
                        x1={pathStartX} // Gradient starts at the heart side
                        y1={pathStartY}
                        x2={pathEndX} // Gradient ends at the box side
                        y2={pathEndY}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.303689" stopColor="white" />
                        <stop offset="0.89827" stopColor="#35A5D5" />
                    </linearGradient>
                </defs>
            </motion.svg>

            {/* Dot with Stroke Animation at the START of the line (near the heart) */}
            <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className={`absolute z-20`}
                style={{ left: dotSvgLeft, top: dotSvgTop }}
            >
                {/* Outer animated stroke circle */}
                <motion.circle
                    cx="10"
                    cy="10"
                    r={outerRingRadius}
                    stroke="#888" // Gray stroke color
                    strokeWidth="1"
                    fill="none"
                    initial={{ strokeDashoffset: outerRingCircumference, opacity: 0 }}
                    animate={{ strokeDashoffset: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: delay + 0.2 }} // Appears slightly before inner dot
                    style={{ strokeDasharray: outerRingCircumference }}
                />
                {/* Inner solid white dot */}
                <motion.circle
                    cx="10"
                    cy="10"
                    r={dotRadius}
                    fill="white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: delay + 0.3 }} // Appears slightly before line starts drawing
                />
            </motion.svg>
        </>
    )
}
