import { useRef, useLayoutEffect } from "react";

import Logo from "./Logo";
import Navbar from "./Nav/Navbar";
import { AnimationElementProps } from "./types";

const Header = (props: AnimationElementProps) => {
  const el = useRef(null);

  const { timeline } = props;

  useLayoutEffect(() => {
    const { current } = el;

    timeline?.to(current, { opacity: 1, y: 0, x: 0, duration: 1 });
  }, [timeline]);

  return (
    <header
      ref={el}
      className="translate-y-[10px] opacity-0 flex justify-between items-center gap-8 p-8 md:p-20 pt-12 w-full text-white max-w-7xl mx-auto"
    >
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
