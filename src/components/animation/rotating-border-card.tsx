"use client"

import type { ReactNode } from "react"
import { RotatingLines } from "./rotating-lines" // Import the new component

interface RotatingBorderCardProps {
    children?: ReactNode
    /** Chiều rộng của card, ví dụ: "300px" */
    width?: string
    /** Chiều cao của card, ví dụ: "400px" */
    height?: string
    /** Bán kính bo tròn của card, ví dụ: "20px" */
    borderRadius?: string
    /** Màu nền bên trong của card, ví dụ: "#102644" */
    innerBgColor?: string
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

export function RotatingBorderCard({
    children,
    width = "300px",
    height = "400px",
    borderRadius = "20px",
    innerBgColor = "#102644",
    line1Color1 = "#004DF4", // Blue
    line1Color2 = "#26DDFF", // Cyan
    line2Color1 = "#007bff", // A different shade of blue
    line2Color2 = "#00c6ff", // A lighter blue
    animationDuration = 3, // Default to faster animation
}: RotatingBorderCardProps) {
    // Tính toán bán kính bo tròn cho lớp nền bên trong để tạo viền 3px
    const innerBorderRadius = `calc(${borderRadius} - 3px)`

    return (
        <div className="relative flex items-center justify-center overflow-hidden" style={{ width, height, borderRadius }}>
            {/* Rotating Lines Component */}
            <RotatingLines
                line1Color1={line1Color1}
                line1Color2={line1Color2}
                line2Color1={line2Color1}
                line2Color2={line2Color2}
                animationDuration={animationDuration}
            />

            {/* Lớp nền bên trong, tạo hiệu ứng viền */}
            <div
                className="absolute z-10"
                style={{ inset: "3px", backgroundColor: innerBgColor, borderRadius: innerBorderRadius }}
            />

            {/* Nội dung của card */}
            <div className="relative z-20">{children}</div>
        </div>
    )
}
