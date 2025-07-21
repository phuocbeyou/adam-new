/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/button.css";
const contentData = [
  {
    id: "why-adam",
    title: "Why $ADAM?",
    content: [
      {
        type: "paragraph",
        text: "$ADAM - a meme that gives back - where every action of $ADAM (stake, vote, or hold) helps fund real-world impact",
      },
      {
        type: "bullet",
        text: "A memecoin that commits to people - not just pump and dump",
      },
      {
        type: "bullet",
        text: "A memecoin where giving is embedded in the code",
      },
      {
        type: "bullet",
        text: "A memecoin with meaning into the missions for spreading out the love for better world, and transactions into transformation",
      },
      {
        type: "paragraph",
        text: "Whether you're a developer, a dreamer, or a donor - $ADAM give everyone a way to do good, transparently and collectively, without needing a foundation, fame, or fortune.",
      },
    ],
  },
  {
    id: "mission",
    title: "Mission",
    content: [
      {
        type: "paragraph",
        text: "To awaken a new standard in Web3 where every $ADAM transaction is not just a trade, but a conscious act of giving.",
      },
      {
        type: "paragraph",
        text: "Our mission is to transform memes into meaningful movements, and turn every on-chain action into real-world impact.",
      },
      {
        type: "paragraph",
        text: "$ADAM fuels a karma-driven path of sharing, where compassion is encoded by design, and generosity becomes the default setting.",
      },
      {
        type: "paragraph",
        text: "Each interaction with $ADAM whether staking, DAO voting, or simply holding is a seed for collective healing, balance, and a better future.",
      },
      {
        type: "paragraph",
        text: "Planted on-chain. Grown through community. Harvested as shared humanity.",
      },
    ],
  },
  {
    id: "vision",
    title: "Vision",
    content: [
      {
        type: "paragraph",
        text: "We envision a world where technology is no longer just a tool for efficiency, but a vessel for healing, consciousness, and collective elevation.",
      },
      {
        type: "paragraph",
        text: "Where $ADAM is not merely meme, but sacred energies - the masculine energy of trendsetting and leading the world for a better existence, the 3D world of survival to the realm of awakening, unity, and shared purpose and spreadign the supports",
      },
      {
        type: "paragraph",
        text: "In this future, blockchain becomes the new scripture not just recording transactions, but encoding karma, compassion, and collective will",
      },
      { type: "paragraph", text: "A decentralized world where:" },
      { type: "bullet", text: "Wealth is redefined as impact," },
      { type: "bullet", text: "Value is measured by intention," },
      {
        type: "bullet",
        text: "And every action, stake, and vote helps as a weave of a new contribution to a better place",
      },
      {
        type: "paragraph",
        text: "One built on clarity, responsibility, and love for humanity",
      },
    ],
  },
];

const AnimatedTitle = ({
  text,
  as: Component = "h1",
  className,
  onMouseEnter,
  isActive,
}: {
  text: string;
  as?: React.ElementType;
  className?: string;
  onMouseEnter: () => void;
  isActive: boolean;
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" as const },
    },
  };

  return (
    <Component
      className={`${className} ${
        isActive
          ? "text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#3499FF] bg-clip-text"
          : "text-white"
      } transition-all duration-300 transform hover:scale-105 cursor-default`}
      onMouseEnter={onMouseEnter}
    >
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="inline-block overflow-hidden"
        aria-label={text}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};

const AdamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(contentData[0].id);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovering) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveSection((prevId) => {
        const currentIndex = contentData.findIndex((s) => s.id === prevId);
        const nextIndex = (currentIndex + 1) % contentData.length;
        return contentData[nextIndex].id;
      });
    }, 7000); // 7 seconds loop

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovering]);

  const title = "WHAT YOU CAN DO WITH $ADAM?";

  // Variants cho từng chữ
  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // thời gian delay giữa các chữ
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut" as const,
        delay: 0.2 + i * 0.25, // delay tăng dần cho từng box
      },
    }),
  };

  const handleMouseEnter = (id: string) => {
    setIsHovering(true);
    setActiveSection(id);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22 fill%3D%22%23ffffff%22 fill-opacity%3D%220.03%22/%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 lg:py-16 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-16 gap-6 lg:gap-12">
          {/* Left Column - Animated */}
          <motion.div
            className="lg:w-1/3 space-y-10 lg:space-y-20"
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <AnimatedTitle
              as="h1"
              text="Why $ADAM?"
              className="text-3xl sm:text-4xl lg:text-5xl p-2 font-bold"
              onMouseEnter={() => handleMouseEnter("why-adam")}
              isActive={activeSection === "why-adam"}
            />

            <div className="space-y-10 lg:space-y-20 text-lg">
              <AnimatedTitle
                as="h2"
                text="Mission"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                onMouseEnter={() => handleMouseEnter("mission")}
                isActive={activeSection === "mission"}
              />
              <AnimatedTitle
                as="h2"
                text="Vision"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                onMouseEnter={() => handleMouseEnter("vision")}
                isActive={activeSection === "vision"}
              />
            </div>
          </motion.div>

          {/* Right Column - Fixed Height Box with Centered Content */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          >
            <div className="relative group">
              {/* Rectangle 44 nằm song song với border xanh */}
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

              {/* Content container với border xanh - FIXED HEIGHT */}
              <div className="relative bg-[#102644] backdrop-blur-md border-2 border-[#3DBDF1] rounded-4xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 hover:border-[#5DCDFF] h-[600px] flex items-center p-6 lg:p-12">
                <AnimatePresence mode="wait">
                  {/* BOX 1: WHY $ADAM? */}
                  {activeSection === "why-adam" && (
                    <motion.div
                      key="why-adam"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="w-full"
                    >
                      <div className="space-y-12 text-white text-base tracking-normal sm:text-lg max-h-[480px] overflow-y-auto pr-4">
                        <p className="leading-[40px]">
                          $ADAM - a meme that gives back - where every action of
                          $ADAM (stake, vote, or hold) helps fund real-world
                          impact
                        </p>
                        <div className="leading-[40px]">
                          <p className="">
                            - A memecoin that commits to people - not just pump
                            and dump
                          </p>
                          <p className="">
                            - A memecoin where giving is embedded in the code
                          </p>
                          <p className="">
                            - A memecoin with meaning into the missions for
                            spreading out the love for better world, and
                            transactions into transformation
                          </p>
                        </div>
                        <p className="leading-[40px]">
                          Whether you&apos;re a developer, a dreamer, or a donor
                          - $ADAM give everyone a way to do good, transparently
                          and collectively, without needing a foundation, fame,
                          or fortune.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* BOX 2: MISSION */}
                  {activeSection === "mission" && (
                    <motion.div
                      key="mission"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="w-full"
                    >
                      <div className="space-y-8 text-white leading-[30px] text-base sm:text-lg max-h-[480px] overflow-y-auto pr-4">
                        <p>
                          To awaken a new standard in Web3 where every $ADAM
                          transaction is not just a trade, but a conscious act
                          of giving.
                        </p>
                        <p>
                          Our mission is to transform memes into meaningful
                          movements, and turn every on-chain action into
                          real-world impact.
                        </p>
                        <p>
                          $ADAM fuels a karma-driven path of sharing, where
                          compassion is encoded by design, and generosity
                          becomes the default setting.
                        </p>
                        <p>
                          Each interaction with $ADAM whether staking, DAO
                          voting, or simply holding is a seed for collective
                          healing, balance, and a better future.
                        </p>
                        <p>
                          Planted on-chain. Grown through community. Harvested
                          as shared humanity.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* BOX 3: VISION */}
                  {activeSection === "vision" && (
                    <motion.div
                      key="vision"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="w-full"
                    >
                      <div className="text-white text-base sm:text-lg leading-[25px] max-h-[600px] tracking-wider">
                        <p>
                          We envision a world where technology is no longer just
                          a tool for efficiency, but a vessel for healing,
                          consciousness, and collective elevation.
                        </p>
                        <p className="my-3">
                          Where $ADAM is not merely meme, but sacred energies -
                          the masculine energy of trendsetting and leading the
                          world for a better existence, the 3D world of survival
                          to the realm of awakening, unity, and shared purpose
                          and spreadign the supports
                        </p>
                        <p>
                          In this future, blockchain becomes the new scripture
                          not just recording transactions, but encoding karma,
                          compassion, and collective will
                        </p>
                        <p className="my-3">A decentralized world where:</p>
                        <p className="">- Wealth is redefined as impact,</p>
                        <p className="">- Value is measured by intention,</p>
                        <p className="mb-3">
                          - And every action, stake, and vote helps as a weave
                          of a new contribution to a better place
                        </p>
                        <p>
                          One built on clarity, responsibility, and love for
                          humanity
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What You Can Do Section */}
        <div className="my-40 lg:mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 lg:mb-16 font-bold cursor-default flex justify-center"
            data-animate-id="features-title"
          >
            <motion.span
              variants={titleContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              className="inline-flex"
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

          {/* HARDCODED FEATURE BOXES - Bạn có thể chỉnh từng box riêng biệt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* BOX 1 - STAKE */}
            <motion.div
              className="group flex flex-col items-center"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
            >
              <div className="transition-all duration-500 hover:scale-110 hover:rotate-3">
                <img
                  src="./icon/layer_1.svg"
                  alt="Stake"
                  className="w-20 h-20 sm:w-24 sm:h-24 mb-4 object-cover transition-all duration-500 group-hover:filter group-hover:brightness-125"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white my-8 transition-all duration-500 group-hover:text-[#3DBDF1] group-hover:scale-105">
                Stake
              </h3>
              <div className="bg-[#021E32] backdrop-blur-md border-1 border-[#3DBDF1] rounded-xl p-2 sm:p-4 transition-all duration-500 hover:border-[#5DCDFF] hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:bg-slate-700/60 group-hover:-translate-y-2 h-[200px] flex items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center space-y-3 text-center px-2">
                  <p className="text-[14px] text-white leading-relaxed transition-all duration-300 group-hover:text-gray-100">
                    Stake to earn yield, gain voting rights, and unlock DAO
                    creation.
                  </p>
                  <p className="text-[14px] text-white leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                    A portion of staking rewards is automatically redirected
                    into the Karma Pool — turning belief into real-world impact.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* BOX 2 - VOTE */}
            <motion.div
              className="group flex flex-col items-center"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
            >
              <div className="transition-all duration-500 hover:scale-110 hover:rotate-3">
                <img
                  src="./icon/vote-icon.svg"
                  alt="Vote"
                  className="w-20 h-20 sm:w-24 sm:h-24 mb-4 object-cover transition-all duration-500 group-hover:filter group-hover:brightness-125"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white my-8 transition-all duration-500 group-hover:text-[#3DBDF1] group-hover:scale-105">
                Vote
              </h3>
              <div className="bg-[#021E32] backdrop-blur-md border-1 border-[#3DBDF1] rounded-xl p-2 sm:p-4 transition-all duration-500 hover:border-[#5DCDFF] hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:bg-slate-700/60 group-hover:-translate-y-2 h-[200px] flex items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center space-y-3 text-center px-2">
                  <p className="text-[14px] text-white leading-relaxed transition-all duration-300 group-hover:text-gray-100">
                    Shape collective decisions and fund meaningful missions.
                  </p>
                  <p className="text-[14px] text-white leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                    Each vote includes a micro-fee that contributes directly to
                    the Karma Pool — every click becomes a small act of giving.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* BOX 3 - EVERYONE CAN DAO */}
            <motion.div
              className="group flex flex-col items-center"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
            >
              <div className="transition-all duration-500 hover:scale-110 hover:rotate-3">
                <img
                  src="./icon/dao-icon.svg"
                  alt="Everyone Can DAO"
                  className="w-20 h-20 sm:w-24 sm:h-24 mb-4 object-cover transition-all duration-500 group-hover:filter group-hover:brightness-125"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white my-8 transition-all duration-500 group-hover:text-[#3DBDF1] group-hover:scale-105">
                Everyone Can DAO
              </h3>
              <div className="bg-[#021E32] backdrop-blur-md border-1 border-[#3DBDF1] rounded-xl p-2 sm:p-4 transition-all duration-500 hover:border-[#5DCDFF] hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:bg-slate-700/60 group-hover:-translate-y-2 h-[200px] flex items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center space-y-3 text-center px-2">
                  <p className="text-[14px] text-white leading-relaxed transition-all duration-300 group-hover:text-gray-100">
                    Launch your own donation-based micro-DAO using $ADAM,
                    stablecoins, or $SOL.
                  </p>
                  <p className="text-[14px] text-white leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                    DAO activity helps determine monthly reward distribution
                    from the Karma Pool — transparency with purpose.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* BOX 4 - HODL */}
            <motion.div
              className="group flex flex-col items-center"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={3}
            >
              <div className="transition-all duration-500 hover:scale-110 hover:rotate-3">
                <img
                  src="./icon/money-hold.svg"
                  alt="HODL"
                  className="w-20 h-20 sm:w-24 sm:h-24 mb-4 object-cover transition-all duration-500 group-hover:filter group-hover:brightness-125"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white my-8 transition-all duration-500 group-hover:text-[#3DBDF1] group-hover:scale-105">
                HODL
              </h3>
              <div className="bg-[#021E32] backdrop-blur-md border-1 border-[#3DBDF1] rounded-xl p-2 sm:p-4 transition-all duration-500 hover:border-[#5DCDFF] hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:bg-slate-700/60 group-hover:-translate-y-2 h-[200px] flex items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center space-y-3 text-center px-2">
                  <p className="text-[14px] text-white leading-relaxed transition-all duration-300 group-hover:text-gray-100">
                    Hold with intention to access future tools, perks, and
                    airdrops.
                  </p>
                  <p className="text-[14px] text-white leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                    1–2% of transaction fees are routed into the Karma Pool —
                    doing good simply by holding
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Karma Pool Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: "easeInOut" as const }}
        >
          <div className="w-1/2">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-white mb-4 lg:mb-8 transition-all duration-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#3499FF] hover:bg-clip-text hover:scale-105 transform cursor-default">
              KARMA POOL?
            </h2>
            <div className="space-y-3 sm:space-y-4 text-white">
              <p className="text-base sm:text-lg leading-relaxed transition-all duration-300 hover:text-gray-100 hover:translate-x-2">
                &quot;Every cause creates an effect. What you give returns -
                whether in time or value.&quot;
              </p>
              <p className="text-base sm:text-lg leading-relaxed transition-all duration-300 hover:text-gray-100 hover:translate-x-2">
                Today, the Karma Pool reflects that truth directly.
              </p>
              <p className="text-base sm:text-lg leading-relaxed transition-all duration-300 hover:text-gray-100 hover:translate-x-2">
                And also supported by the community and drives transparent
                reward real-world missions.
              </p>
            </div>
            <button className="mt-6 sm:mt-8 bg-white text-black font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-500 hover:bg-gray-100 hover:scale-110 hover:shadow-xl hover:shadow-white/30 active:scale-95 transform">
              Give On-Chain. Change Off-Chain.
            </button>
          </div>
          <div className="w-1/2"></div>
        </motion.div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute top-1/4 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-blue-500/10 rounded-full blur-xl sm:blur-3xl transition-all duration-1000 hover:scale-150 hover:bg-blue-400/20"></div>
      <div className="absolute bottom-1/4 left-4 sm:left-10 w-24 sm:w-48 h-24 sm:h-48 bg-purple-500/10 rounded-full blur-xl sm:blur-3xl transition-all duration-1000 hover:scale-150 hover:bg-purple-400/20"></div>

      {/* Additional floating elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute top-20 left-20 w-6 h-6 bg-white/10 rounded-full blur-sm animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-40 right-32 w-4 h-4 bg-blue-400/20 rounded-full blur-sm animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/3 w-8 h-8 bg-purple-400/15 rounded-full blur-sm animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      ></div>
    </div>
  );
};

export default AdamSection;
