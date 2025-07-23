"use client"

import { motion } from "framer-motion"

interface RotatingLinesProps {
    /** Màu bắt đầu của đường viền 1, ví dụ: "#004DF4" */
    line1Color1?: string
    /** Màu kết thúc của đường viền 1, ví dụ: "#26DDFF" */
    line1Color2?: string
    /** Màu bắt đầu của đường viền 2, ví dụ: "#8A2BE2" (Tím) */
    line2Color1?: string
    /** Màu kết thúc của đường viền 2, ví dụ: "#FF69B4" (Hồng) */
    line2Color2?: string
    /** Thời gian hoàn thành một vòng quay (giây), ví dụ: 4 */
    animationDuration?: number
}

export function RotatingLines({
    line1Color1 = "#004DF4", // Blue
    line1Color2 = "#26DDFF", // Cyan
    line2Color1 = "#007bff", // A different shade of blue
    line2Color2 = "#00c6ff", // A lighter blue
    animationDuration = 3, // Faster duration
}: RotatingLinesProps) {
    return (
        <>
            {/* Đường viền 1 */}
            <motion.div
                className="absolute h-[1500%] w-[2000px]" // Increased height for much longer lines
                style={{
                    background: `linear-gradient(
            0deg,
            transparent 48%,
            ${line1Color1} 49%,
            ${line1Color2} 51%,
            transparent 52%
          )`,
                    transformOrigin: "center center",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: animationDuration, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Đường viền 2 (bắt đầu lệch 180 độ so với đường viền 1) */}
            <motion.div
                className="absolute h-[1500%] w-[2000px]" // Increased height for much longer lines
                style={{
                    background: `linear-gradient(
            0deg,
            transparent 48%,
            ${line2Color1} 49%,
            ${line2Color2} 51%,
            transparent 52%
          )`,
                    transformOrigin: "center center",
                    rotate: 180, // Bắt đầu lệch 180 độ
                }}
                animate={{ rotate: 360 + 180 }} // Xoay liên tục, duy trì độ lệch
                transition={{ duration: animationDuration, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            />
        </>
    )
}
