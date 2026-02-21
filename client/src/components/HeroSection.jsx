import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { easeInOut, motion } from "motion/react";

export default function HeroSection() {
  const text = "Generate stunning AI Logos";
  const parentVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.2, easeInOut },
    },
  };

  const paragraphVariant = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: text.split(" ").length * 0.1,
      },
    },
  };

  return (
    <section className="relative flex justify-center bg-[#080A0F] overflow-hidden min-h-screen items-center">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={parentVariants}
        className="relative z-10 py-28 pb-25 md:py-30 md:px-20 px-5 max-w-4xl flex flex-col items-center gap-3"
      >
        {/* Badge */}
        <motion.div variants={paragraphVariant} className="mb-3">
          <span className="inline-flex items-center gap-2 text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 px-4 py-1.5 rounded-full font-inter tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            AI-Powered Logo Generator
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={parentVariants}
          className="text-5xl md:text-7xl italic font-instrument-serif text-white text-center flex flex-wrap justify-center gap-x-3 leading-[1.1] tracking-tight"
        >
          {text.split(" ").map((ele, idx) => (
            <motion.span
              variants={childVariants}
              key={idx}
              className="inline-block"
              style={
                idx === text.split(" ").length - 1
                  ? {
                      background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : {}
              }
            >
              {ele}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub + CTAs */}
        <motion.span
          variants={paragraphVariant}
          className="mt-6 flex flex-col items-center gap-7"
        >
          <p className="font-inter text-base md:text-lg text-center text-neutral-500 leading-relaxed max-w-md">
            Turn your ideas into vivid logos and icons with just a few words.{" "}
            <br className="md:inline hidden" />
            No design skills needed.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link to="/dashboard">
              <Button
                size="lg"
                className="rounded-full px-8 bg-sky-500 hover:bg-sky-400 text-white border-0
                  shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.5)]
                  transition-all duration-300 font-inter"
              >
                Generate Image
              </Button>
            </Link>
            <Link to="/#features">
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full px-6 text-neutral-400 hover:text-white hover:bg-white/[0.06] font-inter border border-white/10"
              >
                See examples →
              </Button>
            </Link>
          </div>

          <p className="text-xs text-neutral-600 font-inter tracking-wide">
            No credit card required · Free to start
          </p>
        </motion.span>
      </motion.div>
    </section>
  );
}