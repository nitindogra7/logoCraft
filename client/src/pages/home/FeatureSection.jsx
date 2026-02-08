import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import HighlightButton from "@/components/highlightButton";
import { motion } from "motion/react";

export default function FeatureSection() {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <motion.div
      className="md:px-20 py-25 px-5 bg-gray flex flex-col items-center gap-10 rounded-t-4xl"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 , delay : 0.1}}
    >
      <HighlightButton text="Features" />

      <h1 className="text-white text-5xl text-center font-medium capitalize mb-4">
        Logo Quality our <br />
        <span className="font-instrument-serif italic">
          product offers
        </span>
      </h1>

      <div className="md:flex grid grid-cols-2 justify-center grid-rows-2 md:justify-around flex-wrap w-full gap-6">
        {images.map((ele, idx) => (
          <img
            key={idx}
            src={ele}
            alt={`feature-${idx}`}
            className="rounded-lg md:w-45 w-full"
          />
        ))}
      </div>
    </motion.div>
  );
}
