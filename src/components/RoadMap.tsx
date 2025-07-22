"use client";
import React from "react";
import { motion } from "framer-motion";

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
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    }),
  };

  const floatingAnimation = (delay = 0) => ({
    y: ["0px", "-15px", "0px"],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay,
    },
  });

  return (
    <div className="">
      {/* Title */}
      <motion.div
        className="relative z-20 text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-6xl md:text-5xl p-2 font-bold text-white backdrop-blur-sm tracking-wider">
          ROADMAP
        </h1>
      </motion.div>

      {/* Zigzag Layout Container */}
      <div className="relative z-15 max-w-7xl mx-auto px-8 py-8 space-y-24">
        {phases.map((phase, index) => {
          const isLeft = index % 2 === 0;
          const initialRotate = isLeft ? (index === 0 ? 0 : -5) : 5;

          return (
            <div
              key={phase.id}
              className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <motion.div
                className="w-full max-w-xl relative"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={index}
                animate={{
                  ...floatingAnimation(index * 0.5),
                  rotate: initialRotate,
                }}
                whileHover={{
                  scale: 0.98,
                  rotate: 0,
                  y: 0,
                  transition: { duration: 0.4 },
                }}
              >
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    backgroundImage: "url('/bg/Rectangle 44.png')",
                    backgroundSize: "95% 95%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                  }}
                />
                <div className="bg-[#102644] backdrop-blur-sm border-2 rounded-2xl p-6 relative glow">
                  <h3 className="text-white font-bold text-xl mb-4 text-center">
                    {phase.title}
                  </h3>
                  <div className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-3 text-white text-sm leading-relaxed hover:text-white transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .glow {
          border-color: #3dbdf1;
          box-shadow: 0 0 10px rgba(61, 189, 241, 0.3),
            0 0 20px rgba(61, 189, 241, 0.2);
          transition: border-color 0.5s ease-out, box-shadow 0.5s ease-out;
        }
        .glow:hover {
          border-color: #82e9ff;
          box-shadow: 0 0 20px rgba(130, 233, 255, 0.8),
            0 0 40px rgba(130, 233, 255, 0.6);
        }
      `}</style>
    </div>
  );
};

export default RoadmapComponent;
