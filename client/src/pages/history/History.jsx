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
      setImages(data.userData?.images || []);
    }
    fetchData();
  }, []);

  if (!response) return <p className="text-center mt-10">Loading...</p>;

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

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">🖼️ Your Generated Logos</h2>

        {images.length === 0 ? (
          <p className="text-gray-500">No images found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3"
              >
                <img
                  src={img.image}  
                  alt={`logo-${index}`}
                  className="w-full h-48 object-cover rounded-lg"
                />

                <Button
                  className="w-full mt-3"
                  onClick={() => downloadImage(img.image, index)}
                >
                  Download
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
