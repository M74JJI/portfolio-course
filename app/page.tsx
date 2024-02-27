"use client";

import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import FeaturedSection from "@/sections/featured";
import LandingSection from "@/sections/landing";
import dynamic from "next/dynamic";

// Dynamic import WaterWaveWrapper to ensure it's only used in the client-side environment
const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/water-wave-wrapper"),
  { ssr: false }
);

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
          <LandingSection />
          <FeaturedSection />
          <AboutSection />
          <ContactSection />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
