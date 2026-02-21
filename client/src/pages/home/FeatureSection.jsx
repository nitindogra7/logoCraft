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
      className="relative md:px-20 py-25 pt-15 px-5 bg-[#080A0F] flex flex-col items-center gap-10 overflow-hidden"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-500/6 rounded-full blur-[100px] pointer-events-none" />

      <HighlightButton text="Features" />

      <div className="text-center relative z-10">
        <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
          Logo quality our{" "}
          <br />
          <span className="font-instrument-serif italic text-sky-400">
            product offers
          </span>
        </h2>
        <p className="text-neutral-500 mt-4 max-w-sm mx-auto text-sm leading-relaxed">
          Every logo is crafted with precision — vivid, scalable, and uniquely yours.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-4xl relative z-10">
        {images.map((ele, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] cursor-pointer"
          >
            <img
              src={ele}
              alt={`feature-${idx}`}
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}