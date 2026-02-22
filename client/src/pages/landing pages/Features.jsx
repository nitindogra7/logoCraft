import { motion } from "motion/react";
import {
  Sparkles,
  Download,
  Palette,
  ShieldCheck,
  Zap,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Logo Generation",
      desc: "Advanced AI generates unique, modern logos tailored to your brand identity in seconds.",
    },
    {
      icon: Palette,
      title: "Multiple Design Styles",
      desc: "Choose from minimal, 3D, gradient, neon, luxury, and startup-ready visual styles.",
    },
    {
      icon: Download,
      title: "High Resolution Export",
      desc: "Download crisp PNG and scalable SVG files ready for websites, apps, and print.",
    },
    {
      icon: ShieldCheck,
      title: "Commercial License",
      desc: "Use your logos freely for business, branding, and monetization — no hidden fees.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Rendering",
      desc: "Optimized backend ensures near-instant logo creation without waiting.",
    },
    {
      icon: Layers,
      title: "Unlimited Variations",
      desc: "Generate multiple variations and refine until your brand feels perfect.",
    },
  ];

  return (
    <>
      <Nav />

      <section className="relative bg-[#080A0F] text-white min-h-screen overflow-hidden pt-32">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-15">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-instrument-serif italic tracking-tight">
              Powerful Features for
              <span className="ml-3 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Modern Brands
              </span>
            </h1>

            <p className="text-neutral-500 mt-6 max-w-2xl mx-auto font-inter">
              Everything you need to create professional, scalable, and stunning
              logos — powered entirely by AI.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

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
                    {feature.title}
                  </h3>

                  <p className="text-neutral-500 text-sm leading-relaxed font-inter">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-28"
          >
            <h2 className="text-3xl md:text-4xl font-instrument-serif italic mb-6">
              Ready to Build Your Brand?
            </h2>

            <Link to="/dashboard">
              <Button
                size="lg"
                className="rounded-full px-10 bg-sky-500 hover:bg-sky-400
                shadow-[0_0_40px_rgba(56,189,248,0.35)]
                hover:shadow-[0_0_60px_rgba(56,189,248,0.5)]
                transition-all duration-300 font-inter"
              >
                Generate Your Logo
              </Button>
            </Link>

            <p className="text-xs text-neutral-600 mt-4 font-inter">
              No credit card required · Start free today
            </p>
          </motion.div>
        </div>
        <Footer />
      </section>
    </>
  );
}
