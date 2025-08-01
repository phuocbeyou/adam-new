"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RotatingBorderCard } from "./animation/rotating-border-card"

interface ContentItem {
  type: "paragraph" | "bullet" | "dot"
  text: string
}

interface SectionContent {
  id: string
  title: string
  content: ContentItem[]
}

const contentData: SectionContent[] = [
  {
    id: "why-adam",
    title: "Why $ADAM?",
    content: [
      {
        type: "paragraph",
        text: "$ADAM — the Father reborn to awaken compassion, restore balance, and serve humanity."
      },
      {
        type: "paragraph",
        text: "Every action with $ADAM — whether you stake, vote, or hold — carries meaning."
      },
      {
        type: "paragraph",
        text: "But creating a DAO to spread kindness is the highest act of all, turning belief into shared impact and uniting efforts for a better world."
      },
      {
        type: "dot",
        text: "$ADAM is created for people, not speculation."
      },
      {
        type: "dot",
        text: "$ADAM is designed with compassion at its core."
      },
      {
        type: "dot",
        text: "$ADAM turns every contribution into a step toward healing and collective transformation."
      },
      {
        type: "paragraph",
        text: "Whether you're a builder, a dreamer, or a giver, $ADAM empowers anyone to do good — transparently, together, and without the need for foundations, fame, or fortune."
      }
    ]
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
        text: "ADAM fuels a karma-driven path of sharing, where compassion is encoded by design, and generosity becomes the default setting.",
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
]

const AnimatedTitle = ({
  text,
  as: Component = "h1",
  className,
  onMouseEnter,
  isActive,
}: {
  text: string
  as?: React.ElementType
  className?: string
  onMouseEnter: () => void
  isActive: boolean
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  }
  const child = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" as const },
    },
  }
  return (
    <Component
      className={`${className} ${isActive ? "text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#198DF3] bg-clip-text" : "text-white"
        } transition-all duration-500 transform hover:scale-105 cursor-pointer`}
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
  )
}

const AdamIntroSection = () => {
  const [activeSection, setActiveSection] = useState(contentData[0].id)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isHovering) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      return
    }

    timerRef.current = setInterval(() => {
      setActiveSection((prevId) => {
        const currentIndex = contentData.findIndex((s) => s.id === prevId)
        const nextIndex = (currentIndex + 1) % contentData.length
        return contentData[nextIndex].id
      })
    }, 7000) // Change section every 7 seconds

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isHovering])

  const handleMouseEnter = (id: string) => {
    setIsHovering(true)
    if (activeSection !== id) {
      setActiveSection(id)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const currentContent = contentData.find((section) => section.id === activeSection)

  return (
    <div className="container mx-auto px-3 sm:px-4 lg:px-16 py-8 sm:py-12 lg:py-16 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6 lg:gap-12">
        {/* Left Column - Titles */}
        <motion.div
          className="w-full lg:w-1/3 space-y-6 sm:space-y-8 lg:space-y-25"
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {contentData.map((section) => (
            <AnimatedTitle
              key={section.id}
              as="h2"
              text={section.title}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-1 sm:p-2 font-bold text-center lg:text-left"
              onMouseEnter={() => handleMouseEnter(section.id)}
              isActive={activeSection === section.id}
            />
          ))}
        </motion.div>

        {/* Right Column - Content Box */}
        <motion.div
          className="w-full lg:w-2/3 bg-[#102544] rounded-[20px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        >
          {/* Main content box with rotating border effect */}

          <div
            className="relative group rotating-border-box h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl lg:rounded-4xl
           transition-all duration-300 ease-out hover:scale-[1.01]
           border-2 border-cyan-500/80
           shadow-[0_0_15px_5px_rgba(14,165,233,0.5)]"
          >

            {/* Inner content wrapper, now with padding and z-index */}
            <div className="relative z-20 flex flex-col justify-between h-full p-5 ">
              <RotatingBorderCard width="100%" height="100%">
                <AnimatePresence mode="wait">
                  {currentContent && (
                    <motion.div
                      key={currentContent.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="w-full z-10 flex-grow p-5"
                    >
                      <div className="space-y-4 sm:space-y-6 lg:space-y-4 text-white text-lg tracking-normal">
                        {currentContent.content.map((item, index) => {
                          if (item.type === "paragraph") {
                            return (
                              <p key={index} className="leading-normal">
                                {item.text}
                              </p>
                            );
                          }

                          if (item.type === "bullet") {
                            return (
                              <p key={index} className="leading-normal">
                                - {item.text}
                              </p>
                            );
                          }

                          if (item.type === "dot") {
                            return (
                              <p key={index} className="leading-normal">
                                • {item.text}.
                              </p>
                            );
                          }

                          return null;
                        })}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RotatingBorderCard>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AdamIntroSection
