"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Background from "../components/Background";
import Header from "../components/Header";
import Intro from "../components/Intro";

import Person from "../assets/images/person.png";

const Home = () => {
  const [timeline, setTimeline] = useState<GSAPTimeline>();
  const appRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.registerPlugin(ScrollTrigger);
      setTimeline(tl);
    });

    return () => ctx.revert();
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={appRef}
    >
      <main
        className="w-full flex flex-col bg-[#090909]"
        ref={appRef}
        data-scroll-container
        data-scroll
      >
        <Header timeline={gsap} />

        <Intro timeline={gsap} />

        <section className="h-[600px] bg-[#090909] text-white flex flex-col gap-[150px]">
          <h2 data-scroll data-scroll-repeat data-scroll-speed="1">
            section-2
          </h2>

          <h2 data-scroll data-scroll-repeat data-scroll-speed="4">
            section-3
          </h2>
          <h2 data-scroll data-scroll-repeat data-scroll-speed="9">
            section-4
          </h2>
        </section>

        <Background
          image={Person}
          classNames="person absolute z-10 top-0 left-1/3 md:left-1/2 opacity-50 opacity-0 translate-x-[50px]"
          timeline={timeline}
        />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default Home;
