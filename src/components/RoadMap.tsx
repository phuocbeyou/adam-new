"use client"
import { motion } from "framer-motion"

const RoadmapComponent = () => {
  const phases = [
    {
      id: 1,
      title: "Phase 1: Launch & Foundation",
      items: [
        "Launch $ADAM token (via Pump.fun or deployed contract)",
        "Activate Karma Pool & basic staking mechanism",
        "Build community on X, Discord, Telegram",
        '(Optional) Launch non-transferable "Proof of Builder" NFT - on-chain CV',
        "Kick off marketing campaigns and partnerships with KOLs & builders",
        "Open DAO registration and set up governance channels",
      ],
    },
    {
      id: 2,
      title: "Phase 2: DAO Activation & Utility Layer",
      items: [
        "Launch DAO voting system for fund allocation and builder grants",
        "Introduce XP system for contributors + tied to airdrops",
        "Enable Genesis NFT minting via staking - Optional",
        "Unlock builder-focused events: bootcamps, hackathons - Optional",
        "Release DAO dashboard: Karma Points, voting history, DAO metrics",
        "Integrate with infrastructure partners (RPCs, APIs, nodes) to support DAOs and builders",
        "Empowering contributors to co-create and co-own positive impact",
      ],
    },
    {
      id: 3,
      title: "Phase 3: Ecosystem Expansion & Incentives",
      items: [
        "Deploy Staking v2: dynamic APR, vote boosting, gated access",
        "Link Karma Points to real-world rewards: event tickets, NFTs...",
        "Launch internal marketplace or launchpad for sub-projects - Optional",
        "Create a cross-DAO reward network using Karma Points",
        "DAO-based voting to fund and support community-led projects",
        "Incentivizing real-world contribution, not just speculation",
      ],
    },
    {
      id: 4,
      title: "Phase 4: Decentralization & Long-term Vision",
      items: [
        "Fully transition Karma Pool governance to the DAO",
        "Launch DAO-to-DAO proposals & funding system",
        "Automate fund distribution via smart contracts",
        "Manage a multi-asset treasury (multi-chain, stables)",
        "Connect with new networks",
        "Open community voting on future roadmap direction",
        "From crypto-native to humanity-aligned: building a better world together",
      ],
    },
  ]

  return (
    <div className="relative">
      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-6xl md:text-5xl p-2 font-bold text-white tracking-wider bg-white/10 backdrop-blur-xs">
          ROADMAP
        </h1>
      </motion.div>

      {/* Zigzag Layout Container */}
      <div className="max-w-7xl mx-auto px-8 py-8 space-y-24">
        {phases.map((phase, index) => {
          const isLeft = index % 2 === 0

          return (
            <motion.div
              key={phase.id}
              className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
              viewport={{ once: true, amount: 0.4 }}
              animate={{ y: [0, -10, 0] }} // Keyframes for floating effect
              transition={{
                duration: 3, // Increased duration for a slower, more "drifting" feel
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror", // Makes the animation go back and forth smoothly
                ease: "easeInOut",
                delay: index * 0.3, // Stagger the animation start for each card
              }}
            >
              <div
                className="w-full max-w-xl relative rounded-2xl overflow-hidden roadmap-card-hover-effect"
                // Apply rotation based on position
                style={{ transform: isLeft ? "rotate(-3deg)" : "rotate(3deg)" }}
              >
                {/* First Rotating Gradient Layer (Clockwise) */}
                <motion.div
                  className="absolute z-0"
                  style={{
                    width: "200%",
                    height: "200%",
                    top: "-50%",
                    left: "-50%",
                    background: `linear-gradient(
                      0deg,
                      rgba(0, 77, 244, 0) 30%,
                      rgba(0, 77, 244, 0.4) 42%,
                      rgba(0, 77, 244, 1) 50%,
                      rgba(38, 221, 255, 1) 100%,
                      rgba(38, 221, 255, 0) 95%
                    )`,
                    transformOrigin: "center center",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
                {/* Second Rotating Gradient Layer (Counter-Clockwise) */}
                <motion.div
                  className="absolute z-0"
                  style={{
                    width: "200%",
                    height: "200%",
                    top: "-50%",
                    left: "-50%",
                    background: `linear-gradient(
                      180deg, /* Changed angle for visual distinction */
                      rgba(0, 77, 244, 0) 30%,
                      rgba(0, 77, 244, 0.4) 42%,
                      rgba(0, 77, 244, 1) 50%,
                      rgba(38, 221, 255, 1) 100%,
                      rgba(38, 221, 255, 0) 95%
                    )`,
                    transformOrigin: "center center",
                  }}
                  animate={{ rotate: -360 }} /* Rotate in opposite direction */
                  transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
                {/* Inner Dark Background Layer */}
                <div className="absolute inset-[3px] bg-[#102644] rounded-[16px] z-10" />

                {/* Content Layer */}
                <div className="relative z-20 p-6">
                  <h3 className="text-white font-bold text-xl mb-4 text-center relative z-100">{phase.title}</h3>
                  <div className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex z-100 items-start gap-3 text-white text-sm leading-relaxed hover:text-gray-200 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p className="z-100">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <style jsx>{`
        .shadow-lg {
          box-shadow: 0 5px 20px rgba(0, 0, 0, 2);
        }
      `}</style>
    </div>
  )
}

export default RoadmapComponent
