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
        staggerChildren: 0.06,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" as const },
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
            >
              {char}
            </motion.span>
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

  // Intersection Observer for scroll animations với threshold thấp hơn
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
        // Giảm threshold để kích hoạt sớm hơn
        threshold: 0.05,
        // Giảm rootMargin để animation bắt đầu sớm hơn
        rootMargin: "-20px 0px -20px 0px",
      }
    );

    // Observe elements after component mounts
    const elementsToObserve = document.querySelectorAll("[data-animate]");
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Scroll observer for Adam character visibility
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Tính toán khi nào about section bắt đầu xuất hiện trên màn hình
        const aboutIsVisible = aboutRect.top < windowHeight * 0.8; // 80% của viewport

        if (aboutIsVisible) {
          // Khi about section hiện lên, ẩn hero Adam và hiện about Adam
          setHeroAdamVisible(false);
          setAboutAdamVisible(true);
        } else {
          // Khi about section không hiện, hiện hero Adam và ẩn about Adam
          setHeroAdamVisible(true);
          setAboutAdamVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Gọi một lần để check vị trí ban đầu
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initial hero animations
    setShowText(true);

    const timer = setTimeout(() => {
      setShowAdam(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section id="home" className="mb-8" data-animate="hero">
          <div className="text-center relative">
            {/* Main Title with Animation */}
            <h1
              className={`text-6xl lg:text-8xl xl:text-[200px] text-white mb-8 lg:mb-12 transition-all duration-2000 ${
                showText
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              <span
                className="mr-3 inline-block animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                $
              </span>
              <span
                className="mr-3 inline-block animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                A
              </span>
              <span
                className="mr-3 inline-block animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                D
              </span>
              <span
                className="mr-3 inline-block animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                A
              </span>
              <span
                className="inline-block animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                M
              </span>
            </h1>

            {/* Central Adam Figure with Animation and Hover Effects */}
            <div
              className={`relative flex justify-center items-center mb-8 lg:mb-12 transition-all duration-1000 ${
                showAdam && heroAdamVisible
                  ? "opacity-100 transform translate-y-0 scale-100"
                  : "opacity-0 transform translate-y-20 scale-80"
              }`}
            >
              <div className="relative adam-character">
                <Image
                  src="/chacracter/adam.png"
                  alt="Adam Character"
                  width={500}
                  height={650}
                  className="w-auto h-64 lg:h-80 xl:h-170 mt-[-170px] hover:scale-110"
                  priority
                />
              </div>
            </div>

            {/* Taglines with Animation */}
            <div
              className={`absolute top-80 right-0 left-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-50 transition-all duration-1500 ${
                showText
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="text-left lg:text-right">
                <h2 className="text-2xl lg:text-3xl text-white mr-50 mb-10">
                  Meme from Myth
                </h2>
                <p className="text-lg lg:text-xl text-white mr-20">
                  LET EVERY $ADAM
                </p>
              </div>

              <div className="text-left">
                <h2 className="text-2xl lg:text-3xl text-white ml-50  mb-10">
                  Built for Humanity.
                </h2>
                <p className="text-lg lg:text-xl text-white ml-20">
                  BE A PRAYER FOR A BETTER WORLD
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="text-white mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* About Text */}
            <div
              className={`mx-auto text-left space-y-4 lg:space-y-2 transition-all duration-1500 ease-out ${
                visibleElements.about
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform -translate-x-20"
              }`}
              data-animate="about"
            >
              <div className="mb-8 lg:mb-12">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <AnimateLetters text="ABOUT $ADAM" />
                </h2>
              </div>
              <p
                className="text-lg lg:text-sm animate-fade-up"
                style={{ animationDelay: "1.2s" }}
              >
                <AnimateLetters text="Meme from Myth. Built for Humanity." />
              </p>

              <p
                className="text-base lg:text-sm animate-fade-up"
                style={{ animationDelay: "1.4s" }}
              >
                <AnimateLetters text="Our Father — $ADAM. He left Eden, but not his children." />
              </p>

              <p
                className="text-base lg:text-sm animate-fade-up"
                style={{ animationDelay: "1.6s" }}
              >
                <AnimateLetters text="Now reborn as a meme coin for a new digital age – not to rule, but to remind us:" />
              </p>

              <p
                className="text-lg lg:text-sm animate-fade-up"
                style={{ animationDelay: "1.8s" }}
              >
                <AnimateLetters text="PNL isn't what you hold, it's what you give." />
              </p>

              <p
                className="text-base lg:text-sm animate-fade-up"
                style={{ animationDelay: "2.0s" }}
              >
                <AnimateLetters text="Every stake is a belief. Every meme, a chance to support a better world." />
              </p>

              <p
                className="text-base lg:text-sm animate-fade-up"
                style={{ animationDelay: "2.2s" }}
              >
                <AnimateLetters text="This is the meme with meaning — and $ADAM is where it begins." />
              </p>

              {/* Solana Address */}
              <div
                className="mt-6 lg:mt-8 animate-fade-up"
                style={{ animationDelay: "2.4s" }}
              >
                <div className="bg-gradient-to-r from-[#A1D5FF] to-[#3499FF] rounded-full border-2 border-white px-10 py-4 flex items-center justify-between transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/logo/solana.png"
                      alt=""
                      className="w-30 h-auto"
                    />
                  </div>
                  <span className="text-black font-mono font-bold text-sm lg:text-base">
                    0 x a d n 2 s d a n 2 y o 2 8 u 0 x
                  </span>
                </div>
              </div>
            </div>

            {/* About Adam Character với animation mượt mà hơn và hiệu ứng scroll */}
            <div
              className={`flex justify-center items-center transition-all duration-1000 ease-in-out ${
                aboutAdamVisible && visibleElements.aboutAdam
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
                  className="w-auto h-48 lg:h-64 xl:h-150 mt-[-200px] hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom CSS for animations */}
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
          animation: fade-in-up 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }

        .duration-2000 {
          transition-duration: 2500ms;
        }

        /* Adam Character Hover Effects - Slower and Smoother */
        .adam-character {
          position: relative;
        }

        .adam-character img {
          animation: float 3s ease-in-out infinite;
          /* Transition mượt mà hơn */
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center bottom;
          filter: brightness(1) drop-shadow(0 0 0px #fff);
        }

        .adam-character:hover img {
          animation: float 1.5s ease-in-out infinite;
          transform: scale(1.15);
          /* Hiệu ứng glow mềm mại hơn */
          filter: brightness(1.3) drop-shadow(0 0 25px rgba(255, 255, 255, 0.8))
            drop-shadow(0 0 60px rgba(52, 153, 255, 0.6));
          box-shadow: 0 0 40px 10px rgba(255, 255, 255, 0.3);
        }

        /* About Section Adam Character với transition chậm hơn */
        .adam-character-about {
          position: relative;
        }

        .adam-character-about img {
          animation: float 4s ease-in-out infinite;
          /* Transition rất mượt mà */
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center bottom;
          filter: brightness(1) drop-shadow(0 0 0px #fff);
        }

        .adam-character-about:hover img {
          animation: float 2s ease-in-out infinite;
          transform: scale(1.15);
          /* Hiệu ứng glow mềm mại */
          filter: brightness(1.3) drop-shadow(0 0 30px rgba(255, 255, 255, 0.7))
            drop-shadow(0 0 70px rgba(52, 153, 255, 0.5));
          box-shadow: 0 0 50px 12px rgba(255, 255, 255, 0.3),
            0 0 90px 18px rgba(52, 153, 255, 0.2);
        }

        /* Scroll Animation Classes mượt mà hơn */
        .animate-on-scroll {
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Letter animations when visible */
        .animate-letter.visible {
          animation: letter-bounce 0.8s ease-out forwards;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .adam-character img,
          .adam-character-about img {
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .adam-character:hover img,
          .adam-character-about:hover img {
            transform: scale(1.1);
            filter: brightness(1.2)
              drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))
              drop-shadow(0 0 35px rgba(52, 153, 255, 0.4));
          }
        }
      `}</style>
    </main>
  );
}
