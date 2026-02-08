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
      className="md:flex py-20 md:px-20 px-5 "
    >
      <div className="flex flex-col gap-7 md:w-1/2 font-inter md:pt-15">
        <HighlightButton text={"Get Started"} />
        <h1 className="text-5xl text-left">AI-Powered logo creation</h1>
        <p className="text-left">
          Watch as our powerful AI quickly transforms your description into a
          one-of-a-kind image, crafted with precision and creativity.
        </p>
        <Link to="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </div>
      <div className="flex items-center justify-center md:w-1/2 md:pt-0 pt-20">
        <img src={getStarted} alt="" className="w-80" />
      </div>
    </motion.div>
  );
}
