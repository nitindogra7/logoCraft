import Nav from "../../components/Nav.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import { lazy } from "react";
const FeatureSection = lazy(() => import("./FeatureSection.jsx"));
const GetStarted = lazy(() => import("./getStarted.jsx"));
import { Suspense } from "react";
const Steps = lazy(()=> import("../../components/Steps.jsx"))
const Footer = lazy(() => import("../../components/Footer.jsx"))

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <HeroSection />
        <Suspense>
        <FeatureSection />
        <GetStarted />
        <Steps />
        <Footer/>
        </Suspense>
      </main>
    </>
  );
}
