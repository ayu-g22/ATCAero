import "./globals.css";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["600"], // YOU REQUESTED 600
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Additional fonts (Hero section only)
import { Monda, Arimo } from "next/font/google";

const monda = Monda({
  subsets: ["latin"],
  variable: "--font-monda",
  weight: ["400", "700"],
});

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "ATC Aero",
  description: "Aviation Academy Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={`${inter.variable} ${montserrat.variable} ${monda.variable} ${arimo.variable}`}
    >
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable} ${cormorant.variable} font-cormorant`}>
  <body>{children}</body>
</html>

    </html>
  );
}
