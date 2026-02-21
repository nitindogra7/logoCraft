import DashboardNav from "../dashboard/components/DashboardNav";
import { useCallback, useContext } from "react";
import { Button } from "@/components/ui/button";
import { DashBoardContext } from "@/contextApis/dashBoardContext";

export default function History() {
  const { response, loading, user } = useContext(DashBoardContext);

  const images = response?.userData?.images || [];

  const downloadImage = useCallback((src, index) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = `logo-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  if (loading) {
    return (
      <div className="min-h-dvh bg-[#080A0F] flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 rounded-full border-2 border-sky-500/30 border-t-sky-500 animate-spin" />
          <p className="text-sm text-neutral-500 font-inter animate-pulse">
            Loading your logos...
          </p>
        </div>
      </div>
    );
  }

  if (!response) {
    return (
      <div className="min-h-dvh bg-[#080A0F] flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <p className="text-sm text-red-400 font-inter">Failed to load data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080A0F] relative overflow-hidden">

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
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/7 rounded-full blur-[120px]" />
      </div>

      <DashboardNav response={response} user={user} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 pt-28">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs text-neutral-600 font-inter uppercase tracking-widest mb-1">
              History
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white font-instrument-serif italic">
              Your Generated Logos
            </h2>
          </div>
          {images.length > 0 && (
            <span className="text-xs text-neutral-600 font-inter">
              {images.length} logo{images.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        {/* Empty state */}
        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96 gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
              <span className="text-2xl text-neutral-600">✦</span>
            </div>
            <p className="text-neutral-600 font-inter text-sm">No logos generated yet.</p>
            <a
              href="/dashboard"
              className="text-xs text-sky-400 hover:text-sky-300 font-inter border border-sky-500/20 bg-sky-500/10 px-4 py-2 rounded-full transition-colors"
            >
              Generate your first logo →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div
                key={img._id || index}
                className="group bg-white/[0.03] rounded-2xl border border-white/[0.08] hover:border-white/[0.14] p-3 flex flex-col gap-3 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={img.image}
                    alt={`logo-${index}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    className="w-1/2 text-xs rounded-lg bg-white/[0.06] hover:bg-white/[0.10] text-neutral-300 hover:text-white border border-white/[0.08] transition-all duration-200 font-inter"
                    onClick={() => downloadImage(img.image, index)}
                  >
                    Download
                  </Button>
                  <Button
                    className="w-1/2 text-xs rounded-lg bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-white border border-sky-500/20 hover:border-sky-500 transition-all duration-200 font-inter"
                  >
                    Favorite
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}