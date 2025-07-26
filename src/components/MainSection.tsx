"use client"

import Image from "next/image"
import {
  useEffect,
  useState,
} from "react"
import { motion } from "framer-motion"

export default function MainSection() {
  const [showText, setShowText] = useState(false)
  const [showAdam, setShowAdam] = useState(false)
  const [heroAdamVisible, setHeroAdamVisible] = useState(true)
  const [aboutAdamVisible, setAboutAdamVisible] = useState(false)
  const [visibleElements, setVisibleElements] = useState({
    hero: false,
    about: false,
    aboutAdam: false,
  })
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute("data-animate")
            setVisibleElements((prev) => ({
              ...prev,
              [elementId || ""]: true,
            }))
          }
        })
      },
      {
        threshold: isMobile ? 0.1 : 0.05,
        rootMargin: isMobile ? "0px 0px -10px 0px" : "-20px 0px -20px 0px",
      },
    )

    const elementsToObserve = document.querySelectorAll("[data-animate]")
    elementsToObserve.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isMobile])

  // Scroll observer for Adam character visibility
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const aboutIsVisible = aboutRect.top < windowHeight * (isMobile ? 0.9 : 0.8)

        if (aboutIsVisible) {
          setHeroAdamVisible(false)
          // Trên mobile ẩn luôn Adam trong about section
          setAboutAdamVisible(isMobile ? false : true)
        } else {
          setHeroAdamVisible(true)
          setAboutAdamVisible(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  useEffect(() => {
    setShowText(true)
    const timer = setTimeout(
      () => {
        setShowAdam(true)
      },
      isMobile ? 800 : 1500,
    )
    return () => clearTimeout(timer)
  }, [isMobile])

  return (
    <main className="relative z-10 px-3 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section id="home" className="mb-6 sm:mb-8" data-animate="hero">
          <div className="text-center relative">
            <h1
              className={`relative text-4xl sm:text-6xl lg:text-8xl font-bold xl:text-[200px] text-white mb-4 sm:mb-8 lg:mb-12 transition-all duration-1500 sm:duration-2000 ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <div className="relative w-[280px] sm:w-[420px] lg:w-[600px] xl:w-[800px] h-auto mx-auto">
                <Image
                  src="/logo/adam_text.png"
                  alt="$ADAM logo"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </h1>

            <div
              className={`relative flex justify-center items-center mb-4 sm:mb-8 lg:mb-12 transition-all duration-800 sm:duration-1000 ${showAdam && heroAdamVisible
                ? "opacity-100 transform translate-y-0 scale-100"
                : "opacity-0 transform translate-y-10 sm:translate-y-20 scale-95 sm:scale-80"
                }`}
            >
              <div className="relative adam-character ">
                <Image
                  src="/chacracter/adam.png"
                  alt="Adam Character"
                  width={isMobile ? 300 : 500}
                  height={isMobile ? 390 : 650}
                  className="w-auto h-40 sm:h-56 md:h-64 lg:h-80 xl:h-170 mt-[-80px] sm:mt-[-120px] lg:mt-[-170px] hover:scale-110"
                  priority
                />
              </div>
            </div>

            <div
              className={`mt-8 sm:mt-12 md:mt-16 lg:mt-10 absolute top-80 right-0 left-0 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-0 transition-all duration-1000 sm:duration-1500 ${showText ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
                }`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="lg:text-right flex flex-col items-end ">
                <h2 className="-mt-5 text-base sm:text-xl lg:text-2xl text-left font-bold text-white mr-25 w-[300px] mb-10 sm:mb-4 md:mb-6 lg:mb-20 lg:ml-50">
                  Built for Humanity
                </h2>
                <p className="text-base mr-20 text-center w-[250px] sm:text-xl lg:text-2xl font-bold text-white">
                  Giving is the alpha
                  <br />
                  Coded for karma
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="-mt-5 text-sm min-w-[350px] text-center sm:text-lg lg:text-2xl font-bold text-white mr-50 mb-10 sm:mb-4 md:mb-6 lg:ml-25 lg:mb-20">
                  Your Father $ADAM is here
                </h2>
                <p className="text-base w-[330px] text-center sm:text-xl lg:text-2xl font-bold text-white lg:ml-20 -mt-2">
                  Every action with $ADAM
                  <br />
                  It all gives you back
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="text-white mt-16 sm:mt-20 md:mt-24 lg:mt-32 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* About Text */}
            <div
              className={`mx-auto text-left space-y-3 sm:space-y-4 lg:space-y-2 transition-all duration-1000 sm:duration-1500 ease-out ${visibleElements.about ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-20"
                }`}
              data-animate="about"
            >
              <motion.div
                className="mb-6 sm:mb-8 lg:mb-12"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  ABOUT $ADAM
                </h2>
              </motion.div>

              <div className="space-y-6 sm:space-y-8 lg:space-y-6 w-[700px] text-[16px]">
                <motion.div
                  className="text-base sm:text-lg lg:text-sm font-bold"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                >
                  Our Father — $ADAM. He left Eden, but not his children.
                </motion.div>

                <motion.div
                  className="text-sm sm:text-base lg:text-sm font-bold"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                >
                  Now reborn in the digital age, $ADAM comes not to rule, but to remind.
                </motion.div>

                <motion.div
                  className="text-sm sm:text-base lg:text-sm font-bold"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                >
                  "The true value of earning lies not in what you hold, but in what you give"
                </motion.div>

                <motion.div
                  className="w-[640px] text-base sm:text-lg lg:text-sm font-bold"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
                >
                  Every stake is an act of belief. Every DAO creation is a step toward collective healing. Every $ADAM held is a conscious act for humanity.
                </motion.div>

                <motion.div
                  className="text-sm sm:text-base lg:text-sm font-bold"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
                >
                  This is the mission of the Father reborn to awaken and redefine value through compassion.
                </motion.div>

                <motion.div
                  className="text-sm sm:text-base lg:text-sm font-bold"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
                >
                  Where giving is the alpha, and every action becomes a contribution toward a better world.
                </motion.div>

                <motion.div
                  className="text-base sm:text-lg lg:text-sm font-bold"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.7 }}
                >
                  And $ADAM is where it begins.
                </motion.div>
              </div>
            </div>

            {/* Chỉ hiển thị Adam character trên desktop */}
            {!isMobile && (
              <div
                className={`flex justify-center items-end transition-all duration-800 sm:duration-1000 ease-in-out ${aboutAdamVisible && visibleElements.aboutAdam
                  ? "opacity-100 transform translate-x-0 scale-100"
                  : "opacity-0 transform translate-x-20 scale-95"
                  }`}
                data-animate="aboutAdam"
              >
                <div className="relative adam-character">
                  <Image
                    src="/chacracter/adam.png"
                    alt="Adam Character About"
                    width={400}
                    height={520}
                    className="w-auto h-32 sm:h-40 md:h-48 lg:h-64 xl:h-150 mt-[-100px] sm:mt-[-150px] lg:mt-[-200px] hover:scale-110"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-mobile {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .duration-2000 {
          transition-duration: 2500ms;
        }
        .adam-character {
          position: relative;
        }
        .adam-character img {
          animation: float 3s ease-in-out infinite;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center bottom;
          filter: brightness(1) drop-shadow(0 0 0px #fff);
        }
        @media (max-width: 768px) {
          .adam-character img {
            animation: float-mobile 2s ease-in-out infinite;
            transition: all 0.3s ease-out;
          }
          .adam-character:hover img {
            animation: float-mobile 1s ease-in-out infinite;
            transform: scale(1.05);
            filter: brightness(1.1);
          }
        }
        @media (min-width: 769px) {
          .adam-character:hover img {
            animation: float 1.5s ease-in-out infinite;
            transform: scale(1.15);
            filter: brightness(1.3)
              drop-shadow(0 0 25px rgba(255, 255, 255, 0.8))
              drop-shadow(0 0 60px rgba(52, 153, 255, 0.6));
            box-shadow: 0 0 40px 10px rgba(255, 255, 255, 0.3);
          }
        }
        .animate-on-scroll {
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </main>
  )
}