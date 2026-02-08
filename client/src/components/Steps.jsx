import HighlightButton from "./highlightButton";
import getStarted2 from "../assets/getStarted2.png";
import getStarted from "../assets/getStarted.png";
export default function Steps() {
  return (
    <div className="bg-gray md:px-20 px-5 py-25 text-white flex flex-col items-center font-inter">
      <HighlightButton text={"How it works"} />
      <span className="py-5">
        <h1 className="text-center text-5xl mt-5">
          AI-Powered <br /> Image Creation
        </h1>
      </span>

      <div className="md:flex pt-20">
        <div className="md:w-[30%]">
          <img src={getStarted} alt="" className="w-100" />
        </div>
        <div className="md:py-20 md:w-[70%] md:p-30 pt-10 flex flex-col ">
          <h1 className="text-5xl">
            Enter Your <span className="text-sky-500">Idea</span>
          </h1>
          <p className="max-w-3xl mt-5 text-neutral-500 text-lg">
            Simply type a brief description of the image you want to create. The
            more detailed your prompt, the more accurate the results!
          </p>
        </div>
      </div>
      <div className="md:flex pt-20">
        <div className="py-20 md:w-[70%] md:p-30 flex flex-col ">
          <h1 className="text-5xl">
            AI Generates Your <span className="text-sky-500">Image</span>
          </h1>
          <p className="md:max-w-3xl w-full mt-5 text-neutral-500 text-lg">
            Watch as our powerful AI quickly transforms your description into a
            one-of-a-kind image, crafted with precision and creativity.
          </p>
        </div>
        <div className="md:w-[30%]">
          <img src={getStarted2} alt="" className="w-100" />
        </div>
      </div>
      <div className="md:flex pt-20">
        <div className=",d:w-[30%]">
          <img src={getStarted} alt="" className="w-100" />
        </div>
        <div className="py-20 md:w-[70%] md:p-30 flex flex-col ">
          <h1 className="text-5xl">
            Downlaod and <span className="text-sky-500">Share</span>
          </h1>
          <p className="md:max-w-3xl mt-5 text-neutral-500 text-lg">
            Once you’re satisfied with your creation, download it in high
            resolution or share it directly from the app.
          </p>
        </div>
      </div>
    </div>
  );
}
