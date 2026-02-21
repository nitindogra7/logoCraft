import HighlightButton from "@/components/highlightButton";
import getStarted from "../../assets/getStarted.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function GetStarted() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative bg-[#080A0F] overflow-hidden"
    >
      {/* Section inner card */}
      <div className="md:mx-20 mx-5 my-10 rounded-3xl border border-white/[0.07] bg-white/[0.02] md:flex items-center gap-12 md:gap-0 px-8 md:px-16 py-16">

        {/* Glow behind card */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-sky-600/8 rounded-full blur-[120px]" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 md:w-1/2 font-inter relative z-10">
          <HighlightButton text="Get Started" />
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            AI-Powered <br />
            <span className="font-instrument-serif italic text-sky-400">
              logo creation
            </span>
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
            Watch as our powerful AI quickly transforms your description into a
            one-of-a-kind image, crafted with precision and creativity.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/dashboard">
              <Button
                className="rounded-full px-7 bg-sky-500 hover:bg-sky-400 text-white border-0
                  shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]
                  transition-all duration-300"
              >
                Get Started
              </Button>
            </Link>
            <Link to="/#features">
              <Button
                variant="ghost"
                className="rounded-full text-neutral-500 hover:text-white hover:bg-white/[0.06] border border-white/10"
              >
                View examples →
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center md:w-1/2 md:pt-0 pt-12 relative z-10">
          <div className="relative">
            <div className="absolute -inset-8 bg-sky-500/10 rounded-full blur-3xl" />
            <img
              src={getStarted}
              alt="Get started illustration"
              className="relative w-64 md:w-80 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}