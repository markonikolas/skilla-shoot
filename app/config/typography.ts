import { Jost, Barlow } from "@next/font/google";

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});
