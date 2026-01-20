import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { MdFavorite } from "react-icons/md";
export default function DashboardContent() {
  const styles = ["Minimal", "3D", "Gradient", "Flat", "Neon", "Glass"];
  return (
    <div className="w-dvw h-dvh md:flex ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:p-20 md:pt-25 p-5 pt-25 md:w-1/2 flex flex-col  md:h-fit"
      >
        <span className="flex flex-col gap-12">
          <h1 className="text-2xl font-inter font-bold">
            Enter Prompt To Get Your Dream Icon
          </h1>
          <div className="relative w-full max-w-xl">
            <textarea
              placeholder="Enter your idea..."
              className="bg-zinc-200 w-full h-40 rounded-lg p-5 pr-24 resize-none"
            />
            <button className="absolute bottom-3 right-3 bg-black text-white text-sm px-3 py-1.5 rounded-md flex items-center gap-1 hover:bg-neutral-800">
              ✨ Enhance
            </button>
          </div>
        </span>
        <div className=" mt-5">
          <span className="flex flex-col gap-5">
            <h1 className="text-2xl font-inter font-bold">Select category</h1>
            <span className="flex flex-wrap gap-5">
              {styles.map((item, idx) => {
                return <Button className="w-fit bg-zinc-200 hover:bg-zinc-300 hover:scale-[1.02] text-black">{item}</Button>;
              })}
            </span>
          </span>
        </div>
        <Button className="md:p-5 p-6 md:text-smtext-lg mt-10">
          Generate Icon
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:max-w-[50%] w-full p-10 pt-25 px-5"
      >
        <div className="w-full h-full bg-zinc-200 rounded-xl flex flex-col gap-5 items-center py-10 md:pt-15">
          <div className="relative">
            <img
              className="w-[220px] h-[220px] object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGljb258ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow">
              <MdFavorite className="text-red-500 text-lg" />
            </button>
          </div>

          <Button>Regenerate</Button>
        </div>
      </motion.div>
    </div>
  );
}
