"use client"
import { motion } from "framer-motion"
import FeatureBox from "./FeatureBox"

const AdamFeaturesSection = () => {
  const title = "WHAT YOU CAN DO WITH $ADAM?"

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  }

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  return (
    <div className="container mx-auto px-3 sm:px-4 lg:px-16 relative z-10">
      <h2
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white mb-8 sm:mb-12 lg:mb-16 font-bold cursor-default flex justify-center text-center px-2"
        data-animate-id="features-title"
      >
        <motion.span
          variants={titleContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          className="inline-flex flex-wrap justify-center"
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 lg:gap-3 xl:gap-4 w-full max-w-8xl px-2 sm:px-4 lg:px-2">
        <FeatureBox
          iconSrc="./icon/stake_icon.svg"
          title="Stake"
          description1="Stake to earn yield, gain voting rights, and unlock DAO creation."
          description2="A portion of staking rewards is automatically redirected into the Karma Pool — turning belief into real-world impact."
          customDelay={0}
        />
        <FeatureBox
          iconSrc="./icon/vote_icon.svg"
          title="Vote"
          description1="Shape collective decisions and fund meaningful missions."
          description2="Each vote includes a micro-fee that contributes directly to the Karma Pool — every click becomes a small act of giving."
          customDelay={1}
        />
        <FeatureBox
          iconSrc="./icon/dao-icon.svg"
          title="Everyone Can DAO"
          description1="Launch your own donation-based micro-DAO using $ADAM, stablecoins, or $SOL."
          description2="DAO activity helps determine monthly reward distribution from the Karma Pool — transparency with purpose."
          customDelay={2}
        />
        <FeatureBox
          iconSrc="./icon/money-hold.svg"
          title="HODL"
          description1="Hold with intention to access future tools, perks, and airdrops."
          description2="1–2% of transaction fees are routed into the Karma Pool — doing good simply by holding"
          customDelay={3}
        />
      </div>
    </div>
  )
}

export default AdamFeaturesSection
