import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Nav from "../../components/Nav.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import FeatureSection from "./FeatureSection.jsx";
import GetStarted from "./getStarted.jsx";
import Steps from "@/components/Steps.jsx";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <HeroSection />
        <FeatureSection />
        <GetStarted />
        <Steps />
      </main>
    </>
  );
}
