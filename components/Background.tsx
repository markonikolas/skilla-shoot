"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";

import { BackgroundProps } from "./types";

const Background = (props: BackgroundProps) => {
  const el = useRef(null);

  const { timeline } = props;

  useLayoutEffect(() => {
    const { current } = el;

    timeline?.to(current, {
      opacity: 0.5,
      y: 0,
      x: 0,
      duration: 1,
      delay: 0.15,
    });
  }, [timeline]);

  return (
    <Image
      src={props.image}
      height={1250}
      width={600}
      alt="person"
      className={props.classNames}
      ref={el}
    />
  );
};

export default Background;
