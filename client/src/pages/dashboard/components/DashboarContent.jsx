import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";
import { generateLogoApi } from "@/api/logoApi";

export default function DashboardContent({ userData }) {
  const styles = ["Minimal", "3D", "Gradient", "Flat", "Neon", "Glass"];

  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Minimal");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }

    try {
      setLoading(true);
      const data = await generateLogoApi({ prompt, style: selectedStyle });
      setImage(data.image);
    } catch (err) {
      alert("Failed to generate image");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-dvw h-dvh md:flex">
      {/* LEFT PANEL */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 w-full md:p-20 p-6 flex flex-col gap-8"
      >
        {/* USER INFO */}
        <div className="flex gap-6 font-medium">
          <span>name: {userData?.fullName}</span>
          <span>email: {userData?.email}</span>
        </div>

        {/* PROMPT */}
        <h1 className="text-2xl font-bold">
          Enter Prompt To Get Your Dream Icon
        </h1>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. modern gym app logo with dumbbell"
          className="bg-zinc-200 w-full h-40 rounded-lg p-5 resize-none"
        />

        {/* STYLE SELECT */}
        <div>
          <h2 className="text-xl font-bold mb-3">Select category</h2>
          <div className="flex flex-wrap gap-3">
            {styles.map((item) => (
              <Button
                key={item}
                onClick={() => setSelectedStyle(item)}
                className={`bg-zinc-200 text-black hover:bg-zinc-300 ${
                  selectedStyle === item ? "ring-2 ring-black" : ""
                }`}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        {/* GENERATE BUTTON */}
        <Button onClick={handleGenerate} disabled={loading} className="w-fit px-6 py-4">
          {loading ? "Generating..." : "Generate Icon"}
        </Button>
      </motion.div>

      {/* RIGHT PANEL */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 w-full p-8"
      >
        <div className="w-full h-full bg-zinc-200 rounded-xl flex flex-col items-center justify-center gap-6">
          <img
            src={image || "https://via.placeholder.com/220.png?text=Your+Icon"}
            alt="Generated Logo"
            className="w-[220px] h-[220px] rounded-xl object-cover"
          />
          {image && (
            <Button onClick={handleGenerate}>
              Regenerate
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
