import DashboardNav from "../dashboard/components/DashboardNav";
import { dashboardApi } from "@/api/dashboardApi";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function History() {
  const [response, setResponse] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await dashboardApi();
      setResponse(data);
      setImages(data?.userData?.images || []);
    }
    fetchData();
  }, []);

  if (!response) {
    return (
      <div className="h-dvh w-full flex items-center justify-center text-5xl font-instrument-serif">
        loading...
      </div>
    );
  }

  const downloadImage = (src, index) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = `logo-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav response={response} />

      <div className="max-w-6xl mx-auto px-4 py-8 pt-25">
        <h2 className="text-2xl font-bold mb-6 font-instrument-serif">
          🖼️ Your Generated Logos
        </h2>

        {images.length === 0 ? (
          <div className="text-gray-500 h-dvh flex justify-center items-center text-5xl">No images found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3 mb-5"
              >
                <img
                  src={img.image}
                  alt={`logo-${index}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="flex">
                  <Button
                    className="w-1/2 mt-3"
                    onClick={() => downloadImage(img.image, index)}
                  >
                    Download
                  </Button>
                  <Button className="w-1/2 mt-3 ml-2 bg-sky-500 hover:bg-sky-700">
                    add to Favorites
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
