/* eslint-disable @next/next/no-img-element */
"use client"
import type React from "react"
import { motion } from "framer-motion"

interface FeatureBoxProps {
  iconSrc: string
  title: string
  description1: string
  description2: string
  customDelay: number
}

const featureVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Giảm thời lượng animation để mượt hơn khi scroll
      ease: "easeInOut" as const,
      delay: 0.2 + i * 0.25,
    },
  }),
}

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
      <div className="transition-all duration-500 hover:scale-95">
        <img
          src={iconSrc || "/placeholder.svg"}
          alt={title}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 mb-2 sm:mb-4 object-cover transition-all duration-500 group-hover:filter"
        />
      </div>
      <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white my-3 sm:my-4 lg:my-8 transition-all duration-500 group-hover:text-[#3DBDF1] group-hover:scale-105 text-center">
        {title}
      </h3>
      <div className="bg-[#021E32] backdrop-blur-sm border-1 border-[#3DBDF1] rounded-lg sm:rounded-xl transition-all duration-300 ease-out group-hover:border-[#5DCDFF] group-hover:scale-[1.01] group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:bg-slate-700/60 h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] xl:h-[180px] flex items-center justify-center w-full shadow-lg shadow-black/50 p-1 sm:p-2 lg:p-3">
        <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 text-center px-1">
          <p className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[12px] text-white transition-all duration-300 group-hover:text-gray-100 leading-tight">
            {description1}
          </p>
          <p className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[12px] text-white transition-all duration-300 group-hover:text-gray-200 leading-tight">
            {description2}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default FeatureBox
