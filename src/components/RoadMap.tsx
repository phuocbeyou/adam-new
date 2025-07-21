"use client";
import React, { useState, useEffect, useRef } from "react";

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

  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const phaseRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = phaseRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const newVisibility = [...isVisible];
            newVisibility[index] = true;
            setIsVisible(newVisibility);
            if (ref.current) observer.unobserve(ref.current);
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the box is in view
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [isVisible]);

  return (
    <div className="">
      {/* Title */}
      <div className="relative z-20 text-center">
        <h1 className="text-6xl md:text-5xl p-2 font-bold text-white bg-white/20 backdrop-blur-sm tracking-wider">
          ROADMAP
        </h1>
      </div>

      {/* Zigzag Layout Container */}
      <div className="relative z-15 max-w-7xl mx-auto px-8 py-8">
        {/* Phase 1 - Left */}
        <div className="flex justify-start mb-16">
          <div
            ref={phaseRefs[0]}
            className={`w-full max-w-lg relative transform rotate-0 hover:rotate-6 transition-transform duration-500 ${
              isVisible[0] ? "fade-in" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 z-10 transition-all duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('/bg/Rectangle 44.png')",
                backgroundSize: "95% 95%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px",
              }}
            />
            <div className="bg-[#102644] backdrop-blur-sm border-2 border-[#3DBDF1] rounded-2xl p-6 shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300 relative glow">
              <h3 className="text-white font-bold text-xl mb-4 text-center">
                {phases[0].title}
              </h3>
              <div className="space-y-3">
                {phases[0].items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed hover:text-white transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 - Right */}
        <div className="flex justify-end mb-16">
          <div
            ref={phaseRefs[1]}
            className={`w-full max-w-lg relative transform rotate-5 hover:-rotate-2 transition-transform duration-500 ${
              isVisible[1] ? "fade-in" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 z-10 transition-all duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('/bg/Rectangle 44.png')",
                backgroundSize: "95% 95%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px",
              }}
            />
            <div className="bg-[#102644] backdrop-blur-sm border-2 border-[#3DBDF1] rounded-2xl p-6 shadow-2xl hover:shadow-purple-400/30 transition-all duration-300 hover:scale-[1.02] hover:border-purple-300 relative glow">
              <h3 className="text-white font-bold text-xl mb-4 text-center">
                {phases[1].title}
              </h3>
              <div className="space-y-3">
                {phases[1].items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed hover:text-white transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3 - Left */}
        <div className="flex justify-start mb-16">
          <div
            ref={phaseRefs[2]}
            className={`w-full max-w-lg relative transform -rotate-5 hover:rotate-2 transition-transform duration-500 ${
              isVisible[2] ? "fade-in" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 z-10 transition-all duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('/bg/Rectangle 44.png')",
                backgroundSize: "95% 95%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px",
              }}
            />
            <div className="bg-[#102644] backdrop-blur-sm border-2 border-[#3DBDF1] rounded-2xl p-6 shadow-2xl hover:shadow-green-400/30 transition-all duration-300 hover:scale-[1.02] hover:border-green-300 relative glow">
              <h3 className="text-white font-bold text-xl mb-4 text-center">
                {phases[2].title}
              </h3>
              <div className="space-y-3">
                {phases[2].items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed hover:text-white transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phase 4 - Right */}
        <div className="flex justify-end mb-16">
          <div
            ref={phaseRefs[3]}
            className={`w-full max-w-lg relative transform rotate-5 hover:-rotate-2 transition-transform duration-500 ${
              isVisible[3] ? "fade-in" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 z-10 transition-all duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('/bg/Rectangle 44.png')",
                backgroundSize: "95% 95%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px",
              }}
            />
            <div className="bg-[#102644] backdrop-blur-sm border-2 border-[#3DBDF1] rounded-2xl p-6 shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.02] hover:border-yellow-300 relative glow">
              <h3 className="text-white font-bold text-xl mb-4 text-center">
                {phases[3].title}
              </h3>
              <div className="space-y-3">
                {phases[3].items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed hover:text-white transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .glow {
          box-shadow: 10px 10px 20px rgba(255, 255, 255, 0.7),
            30px 50px 100px rgba(255, 255, 255, 1);
          transition: box-shadow 0.3s ease;
        }
        .glow:hover {
          box-shadow: 20px 20px 40px rgba(255, 255, 255, 0.9),
            30px 50px 100px rgba(255, 255, 255, 2);
        }
        .fade-in {
          animation: fadeIn 1s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default RoadmapComponent;
