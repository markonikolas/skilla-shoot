"use client";

import { useRef, useEffect } from "react";

import { AnimationElementProps } from "./types";

const Intro = (props: AnimationElementProps) => {
  const el = useRef(null);
  const { timeline } = props;

  useEffect(() => {
    const { current } = el;

    timeline?.to(current, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
  }, [timeline]);

  return (
    <section
      ref={el}
      className="group z-10 font-barlow text-white max-w-7xl mx-auto w-full p-8 md:p-20 translate-y-[10px] opacity-0 h-screen"
    >
      <h1
        className="name font-black text-[10vmin]"
        data-scroll
        data-scroll-speed="1"
      >
        Miloš Lakićević
      </h1>
      <h2
        className="uppercase tracking-[3px] font-light text-sm"
        data-scroll-speed="1"
      >
        Photo / Videographer
      </h2>
      <blockquote
        className="text-2xl max-w-xl font-light tracking-widest italic mt-12"
        data-scroll-speed="9"
      >
        “ The single most important component of a camera is the twelve inches
        behind it. “
      </blockquote>
    </section>
  );
};

export default Intro;
