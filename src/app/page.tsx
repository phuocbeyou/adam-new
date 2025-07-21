import AdamSection from "@/components/AdamSection";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ScrollingText } from "@/components/Line";
import MainSection from "@/components/MainSection";
import RoadmapComponent from "@/components/RoadMap";

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen relative overflow-hidden scroll-section">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
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
      <div className="min-h-screen min-w-screen relative overflow-hidden scroll-section">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-auto object-cover"
        >
          <source src="/bg/bg-2-test.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          <div id="adamnomic">
            <AdamSection />
          </div>
        </div>
      </div>
      <div className="min-h-screen min-w-screen relative overflow-hidden scroll-section">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-auto object-cover"
        >
          <source src="/bg/BG-3.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          <div id="roadmap">
            <RoadmapComponent />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
