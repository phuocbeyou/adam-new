"use client"
import { motion } from "framer-motion"
import HeartFunds from "./HeartFunds"

const KarmaPoolSection = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between gap-8"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Left: Text */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-start mb-8 md:mb-0">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-white mb-4 lg:mb-8 transition-all duration-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#3499FF] hover:bg-clip-text hover:scale-105 transform cursor-default">
          KARMA POOL?
        </h2>
        <div className="space-y-3 sm:space-y-4 text-white">
          <p className="text-base sm:text-lg leading-relaxed transition-all duration-300 hover:text-gray-100 hover:translate-x-2 font-bold italic">
            &quot;Every cause creates an effect. What you give returns - whether in time or value.&quot;
          </p>

          <p className="text-base sm:text-lg leading-relaxed transition-all duration-300 hover:text-gray-100 hover:translate-x-2">
            Today, the Karma Pool reflects that truth directly.
          </p>
          <p className="text-base sm:text-lg leading-relaxed transition-all duration-300 hover:text-gray-100 hover:translate-x-2">
            And also supported by the community and drives transparent reward real-world missions.
          </p>
        </div>
        <button className="mt-6 sm:mt-8 bg-white text-black font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-500 hover:bg-gray-100 hover:scale-110 hover:shadow-xl hover:shadow-white/30 active:scale-95 transform">
          EXPLORE
        </button>
      </div>
      {/* Right: HeartFunds */}
      <div className="w-full md:w-2/3 flex justify-center items-center">
        <HeartFunds />
      </div>

    </motion.div>
  )
}

export default KarmaPoolSection
