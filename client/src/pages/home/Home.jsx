import Nav from "../../components/Nav.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import FeatureSection from "./FeatureSection.jsx";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <HeroSection />
        <FeatureSection />
      </main>
    </>
  );
}
