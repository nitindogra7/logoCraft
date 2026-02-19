import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { easeInOut, motion } from "motion/react";

export default function HeroSection() {
  const text = "Generate stunning AI Logos"
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
      filter : "blur(0px)",
      transition: { duration: 0.2, easeInOut },
    },
  };

  const paragraphVariant = {
    hidden : {
      opacity : 0 , y : 40 ,filter : "blur(10px)"
    }, 
    show : {
      opacity : 1 , y : 0 ,filter : "blur(0px)" , 
      transition : {
        delay : text.split(" ").length * 0.1
      }
    }
  }
  return (
    <section className="flex justify-center bg-white overflow-hidden">
      <motion.div
      initial = "hidden"
      animate = "show"
      variants={parentVariants}
      className="py-25 md:py-36 md:px-20 px-5 max-w-3xl flex flex-col gap-3">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={parentVariants}
          className="text-7xl italic font-instrument-serif text-black text-center flex flex-wrap justify-center gap-x-3"
        >
          {text.split(" ").map((ele, idx) => (
            <motion.span
              variants={childVariants}
              key={idx}
              className="inline-block "
            >
              {ele}
            </motion.span>
          ))}
        </motion.h1>
        <motion.span variants={paragraphVariant} className="mt-4">
        <p className="font-inter text-xl text-center text-neutral-500">
          Turn your ideas into vivid logo and icons with just a few{" "}
          <br className="md:inline hidden" /> words.
        </p>

        <span className="flex justify-center mt-5">
          <Link to="/dashboard">
          <Button className="w-fit" size="lg">
            Generate Image
          </Button>
          </Link>
        </span>
        </motion.span>
      </motion.div>
    </section>
  );
}
