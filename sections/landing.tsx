import Header from "@/components/navigation/header/header";
import FancyButon from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import ScrollDown from "@/components/ui/scroll-down";
import MagnetciWrapper from "@/components/visualEffects/magnetic-wrapper";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function LandingSection() {
  return (
    <div className="relative h-screen overflow-hidden p-8">
      {/*Header*/}
      <Header />
      {/*Show magnetic fancy button on small screens and hide it on md screen*/}
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagnetciWrapper>
          <FancyButon text="Let's talk" icon={<FaArrowRight />} />
        </MagnetciWrapper>
      </div>
      {/*Live clock*/}
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone="Africa/Casablanca" />
      </div>
      {/*Slogan*/}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase">
          <div>
            <span>Code</span>
          </div>
          <div>
            <span>Crafting</span>
          </div>
          <div className="relative">
            <span>Brilliance</span>
            <div className="text-[1rem] leading-[1.4rem]  tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal">
              <span>Empowering innovation</span>
              <br />
              <span>through inspired design</span>
              <br />
              <span>where challenges spark creativity</span>
              <br />
              <span>and solutions redefine possibilities.</span>
            </div>
          </div>
        </div>
        {/*Magentic scroll down*/}
        <MagnetciWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10 ">
          <ScrollDown />
        </MagnetciWrapper>
      </div>
    </div>
  );
}
