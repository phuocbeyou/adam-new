/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { motion, MotionValue } from "framer-motion";

interface AnimateLettersProps {
  text: string;
  className?: string;
}

export function AnimateLetters({ text, className = "" }: AnimateLettersProps) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      style={{ display: "inline-block" }}
    >
      {text
        .split("")
        .map(
          (
            char:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | Promise<
                | string
                | number
                | bigint
                | boolean
                | ReactPortal
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | null
                | undefined
              >
              | MotionValue<number>
              | MotionValue<string>
              | null
              | undefined,
            i: Key | null | undefined
          ) => (
            <motion.span
              key={i}
              variants={child}
              style={{
                display: "inline-block",
                whiteSpace: char === " " ? "pre" : "normal",
              }}
            ></motion.span>
          )
        )}
    </motion.span>
  );
}

export default function MainSection() {
  const [showText, setShowText] = useState(false);
  const [showAdam, setShowAdam] = useState(false);
  const [heroAdamVisible, setHeroAdamVisible] = useState(true);
  const [aboutAdamVisible, setAboutAdamVisible] = useState(false);
  const [visibleElements, setVisibleElements] = useState({
    hero: false,
    about: false,
    aboutAdam: false,
  });
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute("data-animate");
            setVisibleElements((prev) => ({
              ...prev,
              [elementId || ""]: true,
            }));
          }
        });
      },
      {
        threshold: isMobile ? 0.1 : 0.05,
        rootMargin: isMobile ? "0px 0px -10px 0px" : "-20px 0px -20px 0px",
      }
    );

    const elementsToObserve = document.querySelectorAll("[data-animate]");
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isMobile]);

  // Scroll observer for Adam character visibility
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const aboutIsVisible =
          aboutRect.top < windowHeight * (isMobile ? 0.9 : 0.8);

        if (aboutIsVisible) {
          setHeroAdamVisible(false);
          // Trên mobile ẩn luôn Adam trong about section
          setAboutAdamVisible(isMobile ? false : true);
        } else {
          setHeroAdamVisible(true);
          setAboutAdamVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    setShowText(true);

    const timer = setTimeout(
      () => {
        setShowAdam(true);
      },
      isMobile ? 800 : 1500
    );

    return () => clearTimeout(timer);
  }, [isMobile]);

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
              className={`mt-8 sm:mt-12 md:mt-16 lg:mt-10 absolute top-80 right-0 left-0 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-0 transition-all duration-1000 sm:duration-1500 ${showText
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
                }`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="text-center lg:text-right">
                <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-white mr-50 mb-10 sm:mb-4 md:mb-6 lg:mb-20 lg:ml-50">
                  Meme from Myth
                </h2>
                <p className="text-base sm:text-xl lg:text-2xl font-bold text-white lg:mr-30">
                  LET EVERY $ADAM
                </p>
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-white mr-50 mb-10 sm:mb-4 md:mb-6 lg:ml-50 lg:mb-20">
                  Built for Humanity
                </h2>
                <p className="text-base sm:text-xl lg:text-2xl font-bold text-white lg:ml-20">
                  BE A PRAYER FOR A BETTER WORLD
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="text-white mt-16 sm:mt-20 md:mt-24 lg:mt-32 "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* About Text */}
            <div
              className={`mx-auto text-left space-y-3 sm:space-y-4 lg:space-y-2 transition-all duration-1000 sm:duration-1500 ease-out ${visibleElements.about
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform -translate-x-20"
                }`}
              data-animate="about"
            >
              <div className="mb-6 sm:mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  {isMobile ? (
                    <span>ABOUT $ADAM</span>
                  ) : (
                    <AnimateLetters text="ABOUT $ADAM" />
                  )}
                </h2>
              </div>
              <p
                className={`text-base sm:text-lg lg:text-sm font-bold ${isMobile ? "" : "animate-fade-up"
                  }`}
                style={{ animationDelay: "0.05s" }}
              >
                {isMobile ? (
                  <span>Meme from Myth. Built for Humanity.</span>
                ) : (
                  <AnimateLetters text="Meme from Myth. Built for Humanity." />
                )}
              </p>

              <p
                className={`text-sm sm:text-base lg:text-sm font-bold ${isMobile ? "" : "animate-fade-up"
                  }`}
                style={{ animationDelay: "0.08s" }}
              >
                {isMobile ? (
                  <span>
                    Our Father — $ADAM. He left Eden, but not his children.
                  </span>
                ) : (
                  <AnimateLetters text="Our Father — $ADAM. He left Eden, but not his children." />
                )}
              </p>

              <p
                className={`text-sm sm:text-base lg:text-sm font-bold ${isMobile ? "" : "animate-fade-up"
                  }`}
                style={{ animationDelay: "0.11s" }}
              >
                {isMobile ? (
                  <span>
                    Now reborn as a meme coin for a new digital age – not to
                    rule, but to remind us:
                  </span>
                ) : (
                  <AnimateLetters text="Now reborn as a meme coin for a new digital age – not to rule, but to remind us:" />
                )}
              </p>

              <p
                className={`text-base sm:text-lg lg:text-sm font-bold ${isMobile ? "" : "animate-fade-up"
                  }`}
                style={{ animationDelay: "0.14s" }}
              >
                {isMobile ? (
                  <span>
                    PNL isn&apos;t what you hold, it&apos;s what you give.
                  </span>
                ) : (
                  <AnimateLetters text="PNL isn't what you hold, it's what you give." />
                )}
              </p>

              <p
                className={`text-sm sm:text-base lg:text-sm font-bold ${isMobile ? "" : "animate-fade-up"
                  }`}
                style={{ animationDelay: "0.17s" }}
              >
                {isMobile ? (
                  <span>
                    Every stake is a belief. Every meme, a chance to support a
                    better world.
                  </span>
                ) : (
                  <AnimateLetters text="Every stake is a belief. Every meme, a chance to support a better world." />
                )}
              </p>

              <p
                className={`text-sm sm:text-base lg:text-sm font-bold ${isMobile ? "" : "animate-fade-up"
                  }`}
                style={{ animationDelay: "0.2s" }}
              >
                {isMobile ? (
                  <span>
                    This is the meme with meaning — and $ADAM is where it
                    begins.
                  </span>
                ) : (
                  <AnimateLetters text="This is the meme with meaning — and $ADAM is where it begins." />
                )}
              </p>

              <div
                className={`mt-4 sm:mt-6 lg:mt-8 font-bold ${isMobile ? "" : "animate-fade-up"
                  }`}
                style={{ animationDelay: "0.23s" }}
              >

                <h2 className="text-4xl md:text-5xl font-bold mb-10">ABOUT $ADAM</h2>

                <div className="space-y-2 text-lg md:text-xl leading-relaxed mb-10">
                  <p>Meme from Myth. Built for Humanity.</p>

                  <p>
                    Our Father — <strong>$ADAM</strong>. He left Eden, but not his children.
                  </p>

                  <p>
                    Now reborn as a meme coin for a new digital age — not to rule, but to remind us:
                  </p>

                  <p>PNL isn’t what you hold, it’s what you give</p>

                  <p>
                    Every stake is a belief. Every meme, a chance to support a better world.
                  </p>

                  <p>
                    This is the meme with meaning — and <strong>$ADAM</strong> is where it begins.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 sm:gap-4 rounded-full border-2 border-white bg-gradient-to-r from-[#A1D5FF] to-[#3499FF] px-3 sm:px-6 py-2 sm:py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    src="/logo/solana.png"
                    alt="Solana"
                    className="h-4 sm:h-6 w-auto"
                  />
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-black lg:text-base">
                    <span className="mr-0.5 sm:mr-1">0</span>
                    <span className="mr-0.5 sm:mr-1">x</span>
                    <span className="mr-0.5 sm:mr-1">a</span>
                    <span className="mr-0.5 sm:mr-1">d</span>
                    <span className="mr-0.5 sm:mr-1">n</span>
                    <span className="mr-0.5 sm:mr-1">2</span>
                    <span className="mr-0.5 sm:mr-1">s</span>
                    <span className="mr-0.5 sm:mr-1">d</span>
                    <span className="mr-0.5 sm:mr-1">a</span>
                    <span className="mr-0.5 sm:mr-1">n</span>
                    <span className="mr-0.5 sm:mr-1">2</span>
                    <span className="mr-0.5 sm:mr-1">y</span>
                    <span className="mr-0.5 sm:mr-1">o</span>
                    <span className="mr-0.5 sm:mr-1">2</span>
                    <span className="mr-0.5 sm:mr-1">8</span>
                    <span className="mr-0.5 sm:mr-1">u</span>
                    <span className="mr-0.5 sm:mr-1">0</span>
                    <span className="mr-0.5 sm:mr-1">x</span>
                  </span>
                </div>
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
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up-letter {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes letter-bounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in-up {
          animation: slide-up-letter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }

        .animate-letter {
          animation: slide-up-letter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }

        .animate-fade-up {
          animation: fade-in-up 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
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

        .animate-letter.visible {
          animation: letter-bounce 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
