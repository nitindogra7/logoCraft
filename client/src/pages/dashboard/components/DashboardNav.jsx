import { MdDiamond } from "react-icons/md";
import { motion } from "motion/react";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Link } from "react-router-dom";
export default function DashboardNav() {
  const data = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "My Icons",
      to: "/myicons",
    },
    {
      name: "Favorites",
      to: "/favorites",
    },
    {
      name: "Settings",
      to: "/settings",
    },
  ];
  return (
    <nav className="w-full flex justify-center font-inter fixed z-10 top-0 bg-white">
      <motion.div
        initial={{ y: -100, filter: "blur(10px)" }}
        animate={{ y: 0, filter: "blur(0px)", transition: { duration: 0.5 } }}
        className="flex gap-30 shadow-xl py-3 px-7 w-full md:px-20 justify-between font-inter items-center "
      >
        <img
          src="https://framerusercontent.com/images/RYJ3bCIn0muya9k3TyVsZn6vK8.png"
          className="w-10 h-10"
          alt=""
        />
        <span className="md:flex items-center gap-10 hidden">
          {data.map((item, idx) => {
            return (
              <Link
                key={idx}
                to={item.to}
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                <span className="flex items-center justify-center gap-1 ">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </span>
        <span className="flex justify-center items-center gap-3">
          <span className="flex items-center justify-center gap-1 bg-white py-2">
            <MdDiamond className="text-sky-500 text-2xl" />
            <span className="flex items-center">
              <h1 className="font-bold text-xl">0</h1>
              <h1 className="font-bold">+</h1>
            </span>
          </span>
          <span className="flex items-center gap-1">
            <Sheet classNa="md:hidden">
              <SheetTrigger asChild>
                <span className="text-black md:hidden">
                  <Menu />
                </span>
              </SheetTrigger>
              <SheetContent>
                <div className="px-10 items-center font-inter capitalize text-2xl py-15 flex flex-col gap-5 h-full">
                  {data.map((item, idx) => {
                    return (
                      <>
                        <Link to={item.to} key={idx}>
                          {item.name}
                        </Link>
                      </>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </span>
        </span>
      </motion.div>
    </nav>
  );
}
