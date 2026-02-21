import { Button } from "@/components/ui/button";
import { useState } from "react";
import { generateLogoApi } from "@/api/logoApi";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardContent({ setResponse }) {
  const styles = ["Minimal", "3D", "Gradient", "Flat", "Neon", "Glass"];

  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Minimal");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setImage(null);

      const finalPrompt = `App logo generator. Style: ${selectedStyle} Description: ${prompt} clean, professional, logo ready.`;

      const data = await generateLogoApi({ prompt: finalPrompt });

      setResponse((prev) => ({
        ...prev,
        userData: {
          ...prev.userData,
          credits: data.credits,
        },
      }));

      setImage(data.image);
    } catch (err) {
      alert("Failed to generate logo");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = image;
      link.download = "image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#080A0F] flex justify-center relative overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-5 px-4 py-10 pt-28 md:pt-28 md:py-16 items-start">

        {/* ── Left: Input panel ── */}
        <div className="bg-white/[0.03] rounded-2xl border border-white/[0.08] p-6 md:p-8 flex flex-col gap-6">
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-semibold text-white font-inter">
              Create your logo
            </h1>
            <p className="text-sm text-neutral-500 font-inter">
              Describe your app and generate an AI logo instantly.
            </p>
          </div>

          {/* Prompt textarea */}
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Minimal blue logo for fintech app with lightning icon..."
            className="bg-white/[0.04] w-full h-28 md:h-32 rounded-xl px-4 py-3 resize-none outline-none
              border border-white/[0.08] focus:border-sky-500/50 focus:bg-white/[0.06]
              transition-all duration-200 text-sm text-white placeholder:text-neutral-600 font-inter"
          />

          {/* Style selector */}
          <div className="space-y-3">
            <h2 className="text-xs font-medium text-neutral-500 font-inter uppercase tracking-widest">
              Choose style
            </h2>
            <div className="flex flex-wrap gap-2">
              {styles.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedStyle(item)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-200 font-inter
                    ${
                      selectedStyle === item
                        ? "bg-sky-500 text-white border-sky-500 shadow-[0_0_16px_rgba(56,189,248,0.3)]"
                        : "bg-white/[0.04] text-neutral-400 border-white/[0.08] hover:bg-white/[0.08] hover:text-white hover:border-white/20"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Generate button */}
          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-5 text-sm font-semibold rounded-xl bg-sky-500 hover:bg-sky-400 text-white border-0
              shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:shadow-[0_0_40px_rgba(56,189,248,0.45)]
              transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-inter"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Generating...
              </span>
            ) : (
              "Generate Logo"
            )}
          </Button>

          <p className="flex justify-center text-xs text-neutral-600 sm:hidden font-inter">
            your logo will appear below 👇
          </p>
        </div>

        {/* ── Right: Preview panel ── */}
        <div className="bg-white/[0.03] rounded-2xl border border-white/[0.08] p-6 md:p-8 flex items-center justify-center min-h-[340px]">
          <div className="flex flex-col items-center gap-5 text-center">

            {/* Empty state */}
            {!loading && !image && (
              <>
                <div
                  className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-2xl
                    border border-dashed border-white/[0.12] flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                    <span className="text-neutral-600 text-lg">✦</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-inter">Logo preview</p>
                </div>
                <p className="text-xs text-neutral-600 font-inter">
                  Your generated logo will appear here.
                </p>
              </>
            )}

            {/* Loading skeleton */}
            {loading && (
              <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-2xl bg-white/[0.05] border border-white/[0.08] animate-pulse flex flex-col items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-sky-500/30 border-t-sky-500 animate-spin" />
                <p className="text-xs text-neutral-600 font-inter">Creating your logo...</p>
              </div>
            )}

            {/* Generated image */}
            {!loading && image && (
              <>
                <div className="relative group">
                  <div className="absolute -inset-3 bg-sky-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={image}
                    alt="Generated Logo"
                    width="260"
                    height="260"
                    className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-2xl object-cover border border-white/[0.10] shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleGenerate}
                    className="px-5 py-2.5 rounded-lg bg-white/[0.06] text-neutral-300 hover:bg-white/[0.10] hover:text-white border border-white/[0.08] transition-all duration-200 text-sm font-inter"
                  >
                    Regenerate
                  </Button>
                  <Button
                    onClick={handleDownload}
                    className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white border-0
                      shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]
                      transition-all duration-200 text-sm font-inter"
                  >
                    Download
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}