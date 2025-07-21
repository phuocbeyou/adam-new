/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";

const AdamSection = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const features = [
    {
      icon: "./icon/shield-security.svg",
      title: "Stake",
      description:
        "Stake to earn yield, gain voting rights, and unlock DAO creation.",
      details:
        "A portion of staking rewards is automatically redirected into the Karma Pool — turning belief into real-world impact.",
    },
    {
      icon: "./icon/mint-hammer.svg",
      title: "Vote",
      description: "Shape collective decisions and fund meaningful missions.",
      details:
        "Each vote includes a micro-fee that contributes directly to the Karma Pool — every click becomes a small act of giving.",
    },
    {
      icon: "./icon/decentralize.svg",
      title: "Everyone Can DAO",
      description:
        "Launch your own donation-based micro-DAO using $ADAM, stablecoins, or $SOL.",
      details:
        "DAO activity helps determine monthly reward distribution from the Karma Pool — transparency with purpose.",
    },
    {
      icon: "./icon/money-bag.svg",
      title: "HODL",
      description:
        "Hold with intention to access future tools, perks, and airdrops.",
      details:
        "1–2% of transaction fees are routed into the Karma Pool — doing good simply by holding",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const animateId = target.dataset.animateId;
            if (animateId) {
              setVisibleElements((prev) => new Set([...prev, animateId]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -100px 0px",
      }
    );

    const elementsToObserve =
      sectionRef.current.querySelectorAll<HTMLElement>("[data-animate-id]");
    elementsToObserve.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getAnimationClass = (id: string, baseClass: string = "") => {
    const isVisible = visibleElements.has(id);
    return `${baseClass} transition-all duration-700 ease-out ${
      isVisible
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-8 scale-95"
    }`;
  };

  return (
    <div className="relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22 fill%3D%22%23ffffff%22 fill-opacity%3D%220.03%22/%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 lg:py-16 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-16 gap-6 lg:gap-12">
          {/* Left Column - Animated */}
          <div
            className={getAnimationClass(
              "header-left",
              "lg:w-1/3 space-y-6 lg:space-y-20"
            )}
            data-animate-id="header-left"
          >
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl p-2 text-white transition-all duration-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#3499FF] hover:bg-clip-text hover:scale-105 transform cursor-default"
              onMouseEnter={() => setHoveredElement("why-adam")}
              onMouseLeave={() => setHoveredElement(null)}
            >
              Why $ADAM?
            </h1>

            <div className="space-y-4 lg:space-y-20 text-lg">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl text-white transition-all duration-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#3499FF] hover:bg-clip-text hover:scale-105 transform cursor-default"
                onMouseEnter={() => setHoveredElement("mission")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                Mission
              </h2>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl text-white transition-all duration-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#3499FF] hover:bg-clip-text hover:scale-105 transform cursor-default"
                onMouseEnter={() => setHoveredElement("vision")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                Vision
              </h2>
            </div>
          </div>

          {/* Right Column - Animated */}
          <div
            className={getAnimationClass("header-right", "lg:w-2/3")}
            data-animate-id="header-right"
            style={{ transitionDelay: "200ms" }}
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

              {/* Content container với border xanh */}
              <div className="relative bg-[#102644] backdrop-blur-md border-2 border-[#3DBDF1] rounded-4xl p-4 sm:p-6 lg:p-[60px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 hover:border-[#5DCDFF]">
                <div
                  className={`mb-10 text-base sm:text-lg lg:text-[20px] transition-all duration-500 ${
                    hoveredElement === "why-adam"
                      ? "text-[#3DBDF1] scale-105 font-semibold drop-shadow-lg shadow-blue-400/50"
                      : "text-white"
                  }`}
                >
                  $ADAM - a meme that gives back - where every action of $ADAM
                  (stake, vote, or hodl) helps fund real-world impact
                </div>
                <div className="space-y-3 sm:space-y-4 text-gray-300 mb-10">
                  <div
                    className={`flex items-start gap-2 sm:gap-3 text-base sm:text-lg transition-all duration-500 ${
                      hoveredElement === "mission"
                        ? "text-[#3DBDF1] scale-105 font-semibold drop-shadow-lg shadow-blue-400/50"
                        : "text-white"
                    }`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-1 sm:mt-2 flex-shrink-0 transition-all duration-300 hover:bg-[#3DBDF1] hover:scale-125"></div>
                    <p>
                      A memecoin that commits to people - not just pump and dump
                    </p>
                  </div>
                  <div
                    className={`flex items-start gap-2 sm:gap-3 text-base sm:text-lg transition-all duration-500 ${
                      hoveredElement === "mission"
                        ? "text-[#3DBDF1] scale-105 font-semibold drop-shadow-lg shadow-blue-400/50"
                        : "text-white"
                    }`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-1 sm:mt-2 flex-shrink-0 transition-all duration-300 hover:bg-[#3DBDF1] hover:scale-125"></div>
                    <p>A memecoin where giving is embedded in the code</p>
                  </div>
                  <div
                    className={`flex items-start gap-2 sm:gap-3 text-base sm:text-lg transition-all duration-500 ${
                      hoveredElement === "mission"
                        ? "text-[#3DBDF1] scale-105 font-semibold drop-shadow-lg shadow-blue-400/50"
                        : "text-white"
                    }`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-1 sm:mt-2 flex-shrink-0 transition-all duration-300 hover:bg-[#3DBDF1] hover:scale-125"></div>
                    <p>
                      A memecoin with meaning into the missions for spreading
                      out the love for better world, and transactions into
                      transformation
                    </p>
                  </div>
                </div>
                <div
                  className={`mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg transition-all duration-500 ${
                    hoveredElement === "vision"
                      ? "text-[#3DBDF1] scale-105 font-semibold drop-shadow-lg shadow-blue-400/50"
                      : "text-white"
                  }`}
                >
                  <p className="">
                    Whether you&apos;re a developer, a dreamer, or a doer -
                    $ADAM gives everyone a way to do good, transparently and
                    collectively, without needing a foundation, fame, or
                    fortune.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You Can Do Section */}
        <div className="my-40 lg:mb-16">
          <h2
            className={getAnimationClass(
              "features-title",
              "text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-6 lg:mb-16 font-bold transition-all duration-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#3499FF] hover:bg-clip-text hover:scale-110 transform cursor-default"
            )}
            data-animate-id="features-title"
          >
            WHAT YOU CAN DO WITH $ADAM?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={getAnimationClass(
                  `feature-${index}`,
                  "group flex flex-col items-center text-center"
                )}
                data-animate-id={`feature-${index}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="transition-all duration-500 hover:scale-110 hover:rotate-3">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-4 object-cover transition-all duration-500 group-hover:filter group-hover:brightness-125"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white my-8 transition-all duration-500 group-hover:text-[#3DBDF1] group-hover:scale-105">
                  {feature.title}
                </h3>
                <div className="bg-slate-800/50 backdrop-blur-md border-1 border-[#3DBDF1] rounded-xl p-2 sm:p-4 h-30 sm:h-50 transition-all duration-500 hover:border-[#5DCDFF] hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:bg-slate-700/60 group-hover:-translate-y-2">
                  <div className="flex flex-col items-center space-y-2">
                    <p className="text-[14px] text-gray-300 leading-relaxed transition-all duration-300 group-hover:text-gray-100">
                      {feature.description}
                    </p>
                    <p className="text-[14px] text-gray-400 leading-relaxed transition-all duration-300 group-hover:text-gray-200">
                      {feature.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Karma Pool Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div
            className={getAnimationClass("karma-pool", "")}
            data-animate-id="karma-pool"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 lg:mb-8 font-bold transition-all duration-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#3499FF] hover:bg-clip-text hover:scale-105 transform cursor-default">
              KARMA POOL?
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300">
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
            <button className="mt-6 sm:mt-8 bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-500 hover:bg-gray-100 hover:scale-110 hover:shadow-xl hover:shadow-white/30 active:scale-95 transform">
              Give On-Chain. Change Off-Chain.
            </button>
          </div>
        </div>
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
