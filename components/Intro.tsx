import { useRef } from "react";
import { AnimationElementProps } from "./types";

const Intro = (props: AnimationElementProps) => {
  const el = useRef(null);

  const { timeline } = props;

  return (
    <section className="relative z-10 font-barlow text-white max-w-7xl mx-auto w-full p-8 md:p-20">
      <h1 className="font-black text-[10vmin] italic tracking-widest">
        Miloš Lakićević
      </h1>
      <h2 className="uppercase tracking-[3px] font-light text-sm">
        Photographer / Videographer
      </h2>
      <blockquote className="font-light tracking-widest italic mx-auto mt-12">
        “ The single most important component of a camera is the twelve inches
        behind it. “
      </blockquote>
    </section>
  );
};

export default Intro;
