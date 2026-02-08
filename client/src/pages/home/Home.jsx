import Nav from "../../components/Nav.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import FeatureSection from "./FeatureSection.jsx";
import GetStarted from "./getStarted.jsx";
import Steps from "@/components/Steps.jsx";

export default function Home() {
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
