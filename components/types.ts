import { StaticImageData } from "next/image";

export interface AnimationElementProps {
    classNames?: string;
    timeline?: GSAPTimeline | GSAP
}

export interface BackgroundProps extends AnimationElementProps {
    image: StaticImageData;
}
