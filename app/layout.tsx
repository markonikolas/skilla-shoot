import "./globals.css";

import { jost, barlow } from "./config/typography";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${jost.variable} ${barlow.variable}`}>
    <body className="overflow-hidden">{children}</body>
  </html>
);

export default RootLayout;
