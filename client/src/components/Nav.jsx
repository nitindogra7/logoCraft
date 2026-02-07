import { Button } from "./ui/button.jsx";
import { motion } from "motion/react";
import logo from "../assets/logo.png";
import { Moon, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Nav() {
  return (
    <nav className="w-full flex justify-center md:py-5 py-2 font-inter ">
      <motion.div
        initial={{ y: -100, filter: "blur(10px)" }}
        animate={{ y: 0, filter: "blur(0px)", transition: { duration: 0.5 } }}
        className="flex gap-30 shadow-xl py-3 px-7 md:w-auto w-[100vw] md:px-20 justify-between md:rounded-full font-inter items-center "
      >
        <img src={logo} className="w-10 h-10" alt="logo" />
        <span className="md:flex items-center gap-5 hidden">
          {["Home", "About", "Pricing", "Features"].map((item, idx) => {
            return (
              <a
                key={idx}
                href="#"
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            );
          })}
        </span>
        <span className="flex items-center gap-2">
          <Button className="md:inline hidden">Get Strarted</Button>

          {/*mobile view */}
          <Sheet classNa="md:hidden">
            <SheetTrigger asChild>
              <span className="text-black md:hidden">
                <Menu />
              </span>
            </SheetTrigger>
            <SheetContent>
              <div className="px-10 items-center font-inter capitalize text-2xl py-15 flex flex-col gap-5 h-full">
                {["Home", "About", "Pricing", "Features"].map((item, idx) => {
                  return <a href="">{item}</a>;
                })}
              </div>
            </SheetContent>
          </Sheet>
        </span>
      </motion.div>
    </nav>
  );
}
