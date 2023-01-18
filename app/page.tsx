"use client";

import { useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

import Background from "../components/Background";
import Header from "../components/Header";
import Intro from "../components/Intro";

import Person from "../assets/images/person.png";

const Home = () => {
  const [timeline, setTimeline] = useState<GSAPTimeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTimeline(tl);
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="h-screen w-full flex flex-col bg-[#090909] overflow-hidden">
      <Header timeline={gsap} />

      <Intro />

      <Background
        image={Person}
        classNames="absolute bottom-0 left-1/3 md:left-1/2 opacity-50 opacity-0 translate-x-[150px]"
        timeline={timeline}
      />
    </main>
  );
};

export default Home;
