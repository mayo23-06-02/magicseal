import { Poppins, Oswald } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

// Define Poppins (Google Font)
const poppins = Poppins({
  weight: ["700", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

// Define Oswald (Google Font)
const oswald = Oswald({
  weight: ["400", "700"],
  variable: "--font-oswald",
  subsets: ["latin"],
});

// Define Andreas (Local Font)
const Andreas = localFont({
  src: "./fonts/Andreas.ttf",
  variable: "--font-andreas",
});

export const metadata = {
  title: "Magic Seal",
  description: "Magic Seal - Your Trusted Tyre Sealant Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${oswald.variable} ${Andreas.variable} antialiased bg-[#252222]`}
      >
        {children}
      </body>
    </html>
  );
}