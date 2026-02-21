import HighlightButton from "./highlightButton";
import getStarted2 from "../assets/getStarted2.png";
import getStarted from "../assets/getStarted.png";

const steps = [
  {
    number: "01",
    title: "Enter Your",
    highlight: "Idea",
    description:
      "Simply type a brief description of the image you want to create. The more detailed your prompt, the more accurate the results!",
    image: getStarted,
    reverse: false,
  },
  {
    number: "02",
    title: "AI Generates Your",
    highlight: "Image",
    description:
      "Watch as our powerful AI quickly transforms your description into a one-of-a-kind image, crafted with precision and creativity.",
    image: getStarted2,
    reverse: true,
  },
  {
    number: "03",
    title: "Download and",
    highlight: "Share",
    description:
      "Once you're satisfied with your creation, download it in high resolution or share it directly from the app.",
    image: getStarted,
    reverse: false,
  },
];

export default function Steps() {
  return (
    <div className="relative bg-[#080A0F] md:px-20 px-5 py-28 text-white flex flex-col items-center font-inter overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <HighlightButton text="How it works" />
      <div className="mt-5 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mt-3">
          Three steps to your{" "}
          <span className="font-instrument-serif italic text-sky-400">
            perfect logo
          </span>
        </h2>
        <p className="text-neutral-500 mt-4 max-w-sm mx-auto text-sm leading-relaxed">
          From idea to stunning logo in seconds — no design skills required.
        </p>
      </div>

      {/* Steps */}
      <div className="relative mt-24 flex flex-col gap-0 w-full max-w-5xl">
        {/* Vertical connector line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent hidden md:block" />

        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col ${
              step.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10 md:gap-20 py-5 md:py-20`}
          >
            {/* Step number node on line */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0d1117] border border-sky-500/40 flex items-center justify-center hidden md:flex z-10">
              <span className="text-sky-400 text-xs font-bold">{idx + 1}</span>
            </div>

            {/* Image */}
            <div className="md:w-[45%] flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-6 bg-sky-500/8 rounded-3xl blur-3xl group-hover:bg-sky-500/14 transition-all duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] p-4">
                  <img
                    src={step.image}
                    alt={`Step ${step.number}`}
                    className="w-56 md:w-64 drop-shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="md:w-[45%] flex flex-col gap-4">
              <span className="text-[80px] font-bold font-instrument-serif italic leading-none select-none text-white/[0.04]">
                {step.number}
              </span>
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight -mt-6">
                {step.title}{" "}
                <span className="font-instrument-serif italic text-sky-400">
                  {step.highlight}
                </span>
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}