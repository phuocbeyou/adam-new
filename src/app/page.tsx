import AdamFeaturesSection from "@/components/AdamFeaturesSection"
import AdamIntroSection from "@/components/AdamIntroSection"
import AdamSection from "@/components/AdamSection"
import AnimHandSection from "@/components/AnimHandSection"
import EcosystemSection from "@/components/EcosystemSection"
import { Footer } from "@/components/Footer"
import Header from "@/components/Header"
import { ScrollingText } from "@/components/Line"
import MainSection from "@/components/MainSection"
import RoadmapComponent from "@/components/RoadMap"

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-hidden">
      <div className="min-h-screen min-w-screen relative overflow-hidden scroll-section snap-start">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-fill">
          <source src="/bg/BG-2.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10">
          <Header />
          <div id="home">
            <MainSection />
          </div>
          <ScrollingText />
        </div>
      </div>
      <div className="min-w-screen relative">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-auto object-fill"
        >
          <source src="/bg/section3.mp4" type="video/mp4" className=" h-auto " />
        </video>
        <img src="/bg/section.png" alt="" className="absolute inset-0 w-full h-full object-fill" />
        <div className="relative z-10">
          <div id="utility">
            <AdamIntroSection />
          </div>
        </div>


        <div className="relative z-10">
          <div >
            <AdamFeaturesSection />
          </div>
        </div>

        <div id="impact">
          <AnimHandSection />
        </div>

        <div className="relative z-10">
          <div>
            <AdamSection />
          </div>
        </div>

        <div className="relative z-10">
          <div >
            <EcosystemSection />
          </div>
        </div>


      </div>
      <div className="relative w-full min-h-screen overflow-hidden scroll-section snap-start">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/bg/BG-3.mp4" type="video/mp4" />
        </video>

        {/* Nội dung bên trên video */}
        <div className="relative z-10">
          <div id="roadmap">
            <RoadmapComponent />
          </div>
        </div>
      </div>


      <div className="min-w-screen overflow-hidden scroll-section snap-start">
        <Footer />
      </div>
    </div>
  )
}
