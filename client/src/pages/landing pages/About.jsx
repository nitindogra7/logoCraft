import { motion } from "motion/react";
import { Sparkles, Rocket, ShieldCheck } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function About() {
  const points = [
    {
      icon: Sparkles,
      title: "Built for Creators",
      desc: "LogoCraft is designed for founders, startups, and creators who want professional branding without hiring expensive designers.",
    },
    {
      icon: Rocket,
      title: "Powered by Advanced AI",
      desc: "Our AI understands design balance, typography, and brand aesthetics to generate logos that actually feel premium.",
    },
    {
      icon: ShieldCheck,
      title: "Simple, Fast, Reliable",
      desc: "No complex tools. No design skills needed. Just enter your brand name and generate instantly.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#080A0F] text-white py-32 overflow-hidden"
    >
      <Nav />
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-instrument-serif italic tracking-tight">
            About
            <span className="ml-3 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              LogoCraft
            </span>
          </h2>

          <p className="text-neutral-500 mt-6 max-w-2xl mx-auto font-inter">
            We believe branding should be fast, accessible, and powerful.
            LogoCraft helps you turn ideas into stunning logos in seconds —
            without design complexity.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 rounded-2xl
                           hover:border-sky-500/40 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl 
                                bg-sky-500/10 text-sky-400 mb-6
                                group-hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
                                transition-all duration-300"
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold font-inter mb-3">
                  {point.title}
                </h3>

                <p className="text-neutral-500 text-sm leading-relaxed font-inter">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
}
