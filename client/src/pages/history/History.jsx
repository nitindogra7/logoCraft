import DashboardNav from "../dashboard/components/DashboardNav";
import { useCallback, useContext } from "react";
import { Button } from "@/components/ui/button";
import { DashBoardContext } from "@/contextApis/dashBoardContext";

export default function History() {
  const { response, loading } = useContext(DashBoardContext);

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
      <div className="min-h-dvh flex justify-center items-center text-xl font-medium text-slate-400 animate-pulse">
        Loading your logos...
      </div>
    );
  }
  if (!response) {
    return (
      <div className="min-h-dvh flex justify-center items-center text-xl font-medium text-red-400">
        Failed to load data
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav response={response} />

      <div className="max-w-6xl mx-auto px-4 py-8 pt-28">
        <h2 className="text-2xl font-bold mb-6 font-instrument-serif">
          🖼️ Your Generated Logos
        </h2>

        {images.length === 0 ? (
          <div className="text-gray-400 flex justify-center items-center h-96 text-3xl">
            No images found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((img, index) => (
              <div
                key={img._id || index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3"
              >
                <img
                  src={img.image}
                  alt={`logo-${index}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover rounded-lg"
                />

                <div className="flex mt-3 gap-2">
                  <Button
                    className="w-1/2"
                    onClick={() => downloadImage(img.image, index)}
                  >
                    Download
                  </Button>

                  <Button className="w-1/2 bg-sky-500 hover:bg-sky-700">
                    Add to Favorites
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
