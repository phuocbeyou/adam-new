"use client"

import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface FeatureBoxProps {
  iconSrc?: string
  title: string
  description1: string
  description2: string
  customDelay?: number
}

const featureVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut' as const,
    },
  },
};

const FeatureBox: React.FC<FeatureBoxProps> = ({ iconSrc, title, description1, description2, customDelay }) => {
  return (
    <motion.div
      className="group flex flex-col items-center"
      variants={featureVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={customDelay}
    >
      {/* Icon container với will-change để optimize rendering */}
      <div className="will-change-transform transition-transform duration-300 ease-out group-hover:scale-105">
        <img
          src={iconSrc || "/placeholder.svg"}
          alt={title}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 mb-2 sm:mb-4 object-cover transition-transform duration-300 ease-out"
        />

      </div>

      {/* Title với transform3d để hardware acceleration */}
      <h3 className={`text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white my-3 sm:my-4 lg:my-8 text-center will-change-transform transition-all duration-300 ease-out group-hover:text-[#3DBDF1] group-hover:scale-105 group-hover:translate3d(0,0,0) ${title === "Vote" ? "mr-[25px]" : ""}`}>
        {title}
      </h3>

      {/* Main content box với các optimizations */}
      <div className="bg-[#021E32] backdrop-blur-sm border border-[#3DBDF1] rounded-lg sm:rounded-xl h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] xl:h-[180px] flex items-center justify-center w-full shadow-lg shadow-black/50 p-1 sm:p-2 lg:p-3 will-change-transform transition-all duration-300 ease-out group-hover:border-[#5DCDFF] group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-blue-300/30 group-hover:bg-slate-700/50 group-hover:-translate-y-1 group-hover:translate3d(0,-4px,0)">
        <div className="flex flex-col items-center justify-center space-y-3 text-center px-1">
          <p className="text-[11px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-white leading-tight will-change-auto transition-colors duration-300 ease-out group-hover:text-gray-100">
            {description1}
          </p>
          <p className="text-[11px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-white leading-tight will-change-auto transition-colors duration-300 ease-out group-hover:text-gray-200">
            {description2}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default FeatureBox