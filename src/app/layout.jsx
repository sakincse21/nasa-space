import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars/index";
// import { Particles } from "@/components/ui/shadcn-io/particles/index";
import { StarsBackground } from "@/components/ui/stars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cupola Game",
  description: "By Team Poromanu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-svh  bg-black flex flex-col`}
      >
        <StarsBackground className="flex w-full min-h-screen justify-center items-center">
          <main className=" grow-1 flex flex-col justify-center items-center z-10 min-h-svh">
            {children}
          </main>
          <ShootingStars
            starColor="#e4b0eb"
            trailColor="#2EB9DF"
            minSpeed={10}
            maxSpeed={25}
            minDelay={700}
            maxDelay={3200}
          />
        </StarsBackground>
        {/* <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          staticity={50}
          color="#ffffff"
          size={0.8}
        /> */}
      </body>
    </html>
  );
}
