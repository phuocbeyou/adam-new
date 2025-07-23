"use client"

import { motion } from "framer-motion"
import { RotatingBorderCard } from "./animation/rotating-border-card"

const RoadmapComponent = () => {
  const phases = [
    {
      id: 1,
      title: "Phase 1: Launch & Foundation",
      items: [
        "Activate Karma Pool & basic staking mechanism",
        "Build community on X, Discord, Telegram",
        "Kick off marketing campaigns and partnerships with KOLs & builders",
        "Open DAO registration and set up governance channels",
      ],
    },
    {
      id: 2,
      title: "Phase 2: DAO Activation & Utility Layer",
      items: [
        "Launch DAO voting system for fund allocation and builder grants",
        "Introduce XP system for contributors → tied to airdrops",
        "Release DAO dashboard: Karma Points, voting history, DAO metrics",
        "Integrate with infrastructure partners (RPCs, APIs, nodes) to support DAOs and builders",
        "Empowering contributors to co-create and co-own positive impact",
      ],
    },
    {
      id: 3,
      title: "Phase 3: Ecosystem Expansion & Incentives",
      items: [
        "Deploy Staking V2: dynamic APR, vote boosting, gated access",
        "Link Karma Points to real-world rewards: event tickets, NFTs,…",
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
        "Launch DAO-to-DAO proposal & funding system",
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
        <h1 className="text-6xl md:text-5xl p-2 font-bold text-white tracking-wider bg-white/10 backdrop-blur-xs shadow-white-title">
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
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <div
                className="w-full max-w-xl relative rounded-2xl overflow-hidden roadmap-card-hover-effect shadow-white-glow-enhanced hover:shadow-white-glow-intense transition-all duration-300"
                style={{ transform: isLeft ? "rotate(-3deg)" : "rotate(3deg)" }}
              >
                <div className="absolute inset-[3px] bg-[#102644] rounded-[16px] z-10 shadow-inner-white" />

                {/* Content Layer */}
                <div className="relative z-20 p-5">
                  <RotatingBorderCard width="100%" height="100%">
                    <div className="p-5">
                      <h3 className="text-white font-bold text-xl mb-4 text-center relative z-100 shadow-text-white">
                        {phase.title}
                      </h3>
                      <div className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex z-100 items-start gap-3 text-white text-sm leading-relaxed hover:text-gray-200 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0 shadow-white-dot"></div>
                            <p className="z-100">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </RotatingBorderCard>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <style jsx>{`
 .shadow-white-glow-enhanced {
  box-shadow: 
    0 0 20px 6px rgba(255, 255, 255, 0.4),
    0 0 40px 10px rgba(255, 255, 255, 0.2),
    0 0 60px 15px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 153, 255, 0.8);
  border-radius: 16px;
}

.shadow-white-glow-intense:hover {
  box-shadow: 
    0 0 30px 8px rgba(255, 255, 255, 0.6),
    0 0 60px 14px rgba(255, 255, 255, 0.35),
    0 0 90px 20px rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(0, 153, 255, 1);
}

.shadow-inner-white {
  box-shadow: none; /* Xóa hiệu ứng trong */
  background: #102644;
  border-radius: 16px;
}

`}</style>

    </div>
  )
}

export default RoadmapComponent
