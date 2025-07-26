/* eslint-disable @next/next/no-img-element */
"use client"
import { useRef } from "react"
import KarmaPoolSection from "./KarmaPoolSection"
import "../styles/button.css" // Ensure button styles are still available
// Removed: import "../styles/style.css" // This is no longer needed

const AdamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative overflow-hidden" ref={sectionRef}>
      {/* Karma Pool Section */}
      <div id="adamnomic" className="z-0 container mx-auto px-3 sm:px-4 lg:px-16 py-8 sm:py-12 lg:py-16 relative">
        <KarmaPoolSection />
      </div>
    </div>
  )
}

export default AdamSection
