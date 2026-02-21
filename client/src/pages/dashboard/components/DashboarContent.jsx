import { Button } from "@/components/ui/button";
import { useState } from "react";
import { generateLogoApi } from "@/api/logoApi";
import { useToast } from "@/contextApis/toastContext";

export default function DashboardContent({ setResponse }) {
  const styles = ["Minimal", "3D", "Gradient", "Flat", "Neon", "Glass"];

  const { addToast } = useToast();

  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Minimal");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const MIN_PROMPT_LENGTH = 20;

  const handleGenerate = async () => {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt) {
      addToast("Please enter a logo description.", "error");
      return;
    }

    if (trimmedPrompt.length < MIN_PROMPT_LENGTH) {
      addToast(
        `Description must be at least ${MIN_PROMPT_LENGTH} characters.`,
        "error"
      );
      return;
    }

    try {
      setLoading(true);
      setImage(null);

      const finalPrompt = `App logo generator. Style: ${selectedStyle}. Description: ${trimmedPrompt}. Clean, professional, logo ready.`;

      const data = await generateLogoApi({ prompt: finalPrompt });

      setResponse((prev) => ({
        ...prev,
        userData: {
          ...prev.userData,
          credits: data.credits,
        },
      }));

      setImage(data.image);

      addToast("Logo generated successfully!", "success");
    } catch (err) {
      addToast(
        err?.response?.data?.message || "Failed to generate logo.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!image) {
      addToast("No image to download.", "error");
      return;
    }

    try {
      const link = document.createElement("a");
      link.href = image;
      link.download = "logo.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      addToast("Download started!", "success");
    } catch (error) {
      addToast("Download failed.", "error");
    }
  };

  return (
    <div className="min-h-screen bg-[#080A0F] flex justify-center relative overflow-hidden">
      {/* Background */}
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
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-5 px-4 py-10 pt-28 md:py-16 items-start">
        
        {/* Left Panel */}
        <div className="bg-white/[0.03] rounded-2xl border border-white/[0.08] p-6 md:p-8 flex flex-col gap-6">
          
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-white">
              Create your logo
            </h1>
            <p className="text-sm text-neutral-500">
              Describe your app and generate an AI logo instantly.
            </p>
          </div>

          {/* Textarea */}
          <div className="flex flex-col gap-2">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Minimal blue fintech logo with lightning icon..."
              className="bg-white/[0.04] w-full h-32 rounded-xl px-4 py-3 resize-none outline-none
                border border-white/[0.08] focus:border-sky-500/50 focus:bg-white/[0.06]
                text-sm text-white placeholder:text-neutral-600"
            />
            <p className="text-xs text-neutral-600">
              {prompt.length}/{MIN_PROMPT_LENGTH} minimum characters
            </p>
          </div>

          {/* Style Selector */}
          <div>
            <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-3">
              Choose style
            </h2>
            <div className="flex flex-wrap gap-2">
              {styles.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedStyle(item)}
                  className={`px-4 py-2 rounded-lg text-xs border transition-all
                    ${
                      selectedStyle === item
                        ? "bg-sky-500 text-white border-sky-500"
                        : "bg-white/[0.04] text-neutral-400 border-white/[0.08] hover:bg-white/[0.08] hover:text-white"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-5 text-sm font-semibold rounded-xl bg-sky-500 hover:bg-sky-400 text-white"
          >
            {loading ? "Generating..." : "Generate Logo"}
          </Button>
        </div>

        {/* Right Panel */}
        <div className="bg-white/[0.03] rounded-2xl border border-white/[0.08] p-6 md:p-8 flex items-center justify-center min-h-[340px]">
          
          {!loading && !image && (
            <div className="text-neutral-600 text-sm">
              Logo preview will appear here.
            </div>
          )}

          {loading && (
            <div className="text-neutral-500 text-sm">
              Creating your logo...
            </div>
          )}

          {!loading && image && (
            <div className="flex flex-col items-center gap-4">
              <img
                src={image}
                alt="Generated Logo"
                className="w-[240px] h-[240px] rounded-2xl object-cover border border-white/[0.10]"
              />
              <div className="flex gap-2">
                <Button
                  onClick={handleGenerate}
                  className="bg-white/[0.06] text-neutral-300 border border-white/[0.08]"
                >
                  Regenerate
                </Button>
                <Button
                  onClick={handleDownload}
                  className="bg-sky-500 hover:bg-sky-400 text-white"
                >
                  Download
                </Button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}