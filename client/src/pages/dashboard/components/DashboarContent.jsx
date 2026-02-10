import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
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
        userData: { ...prev.userData, credits: data.credits },
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
    <div className="min-h-screen bg-zinc-50 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10 pt-30 md:pt-30 md:py-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 md:p-8 flex flex-col gap-6"
        >
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-semibold text-zinc-900">
              Create your logo
            </h1>
            <p className="text-sm text-zinc-500">
              Describe your app and generate an AI logo instantly.
            </p>
          </div>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Minimal blue logo for fintech app with lightning icon..."
            className="bg-zinc-100 w-full h-28 md:h-32 rounded-xl px-4 py-3 resize-none outline-none border border-zinc-200 focus:border-zinc-400 transition text-sm"
          />

          <div className="space-y-2">
            <h2 className="text-sm font-medium text-zinc-700">Choose style</h2>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {styles.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedStyle(item)}
                  className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium border transition
                    ${
                      selectedStyle === item
                        ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                        : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-100"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-4 md:py-5 text-sm md:text-base font-semibold rounded-sm bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            {loading ? "Generating..." : "Generate Logo"}
          </Button>
          <p className="flex justify-center text-sm text-neutral-500 sm:hidden">
            your logo will appear here 👇
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 md:p-8 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-5 text-center">
            {!loading && !image && (
              <>
                <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-2xl border border-dashed border-zinc-300 flex items-center justify-center text-zinc-400 text-sm">
                  Logo preview
                </div>
                <p className="text-xs text-zinc-500">
                  Your generated logo will appear here.
                </p>
              </>
            )}

            {loading && (
              <Skeleton className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-2xl bg-zinc-200 animate-pulse" />
            )}

            {!loading && image && (
              <>
                <img
                  src={image}
                  alt="Generated Logo"
                  className="w-[180px] rounded-lg h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] object-cover border border-zinc-200 shadow-md"
                />
                <div>
                  <Button
                    onClick={handleGenerate}
                    className="px-5 py-2.5 rounded-sm bg-zinc-700 text-white hover:bg-zinc-800 border border-zinc-200 transition text-sm"
                  >
                    Regenerate
                  </Button>
                  <Button
                    onClick={handleDownload}
                    className="px-5 ml-2 py-2.5 rounded-sm bg-zinc-700 text-white hover:bg-zinc-800 border border-zinc-200 transition text-sm"
                  >
                    Download
                  </Button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
