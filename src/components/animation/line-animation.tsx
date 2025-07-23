"use client"

import { motion } from "framer-motion"

export default function LineAnimation() {
    return (
        <div className="relative h-[600px] w-[1200px] overflow-visible rounded-md border border-dashed border-white/10 bg-transparent">
            {/* Circle */}
            <motion.svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute bottom-[250px] left-[70px] z-20"
            >
                {/* Outer gray ring */}
                <circle cx="60" cy="60" r="58" stroke="#888" strokeWidth="2" />
                {/* Inner white circle */}
                <circle cx="60" cy="60" r="10" fill="white" />
                {/* Smallest white dot (center) */}
                <circle cx="60" cy="60" r="4" fill="white" />
            </motion.svg>

            {/* Animated Line (Inline SVG) */}
            <motion.svg
                className="absolute left-[130px] top-[290px] z-10" // Adjusted position to start exactly from the circle's center (70+60, 600-(250+60))
                width="140" // Adjusted width to fit the path
                height="50" // Adjusted height to fit the path
                viewBox="0 0 140 50" // Adjusted viewBox to match new dimensions
                fill="none"
            >
                <motion.path
                    d="M0 0 C 20 0, 50 50, 140 50" // Path starts at (0,0) (circle center relative to this SVG) and ends at (140,50) (box edge relative to this SVG)
                    stroke="url(#paint0_linear_6254_708)"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    initial={{ strokeDashoffset: 170 }} // Adjusted dashoffset for the new path length
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
                    style={{ strokeDasharray: 170 }} // Adjusted dasharray for the new path length
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_6254_708"
                        x1="0" // Adjusted x1 to match new viewBox
                        y1="0" // Adjusted y1 to match new viewBox
                        x2="140" // Adjusted x2 to match new viewBox
                        y2="50" // Adjusted y2 to match new viewBox
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.303689" stopColor="white" />
                        <stop offset="0.89827" stopColor="#35A5D5" />
                    </linearGradient>
                </defs>
            </motion.svg>

            {/* Box */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 2 }}
                className="absolute left-[270px] top-[290px] z-30 h-[100px] w-[600px] rounded-full border border-[#35A5D5] bg-[#1a203f]"
            />
        </div>
    )
}
