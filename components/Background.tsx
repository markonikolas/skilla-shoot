"use client";

import Image, { StaticImageData } from "next/image";
import { useRef, useEffect, useState } from "react";

import { BackgroundProps } from "./types";

const Background = (props: BackgroundProps) => {
  const el = useRef(null);

  const { timeline } = props;

  useEffect(() => {
    const { current } = el;

    timeline?.to(current, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 1,
      delay: 1,
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
