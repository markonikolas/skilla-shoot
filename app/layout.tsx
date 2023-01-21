import "./styles/globals.css";
import "./styles/locomotive.css";

import { jost, barlow } from "./config/typography";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${jost.variable} ${barlow.variable}`}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
