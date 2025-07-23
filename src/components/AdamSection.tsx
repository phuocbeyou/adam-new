/* eslint-disable @next/next/no-img-element */
"use client"
import { useRef } from "react"
import AdamIntroSection from "./AdamIntroSection"
import AdamFeaturesSection from "./AdamFeaturesSection"
import KarmaPoolSection from "./KarmaPoolSection"
import "../styles/button.css" // Ensure button styles are still available
// Removed: import "../styles/style.css" // This is no longer needed

const AdamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative overflow-hidden" ref={sectionRef}>
      {/* Adam Intro Section */}
      <AdamIntroSection />

      {/* What You Can Do Section */}
      <AdamFeaturesSection />

      {/* Karma Pool Section */}
      <div id="adamnomic" className="z-0 container mx-auto px-3 sm:px-4 lg:px-16 py-8 sm:py-12 lg:py-16 relative">
        <KarmaPoolSection />
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
  )
}

export default AdamSection
