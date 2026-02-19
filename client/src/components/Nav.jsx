import { Button } from "./ui/button.jsx";
import { motion } from "motion/react";
import logo from "../assets/logo.png"; 
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { memo } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Pricing", path: "/#pricing" },
  { name: "Features", path: "/#features" },
];

function Nav() {
  return (
    <nav className="w-full flex justify-center md:py-5 py-2 font-inter">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex md:gap-30 gap-5 shadow-xl py-3 px-7 md:w-auto w-full md:px-20 justify-between md:rounded-full items-center bg-white"
      >
        <Link to="/">
          <img
            src={logo}
            width="40"
            height="40"
            loading="eager"
            decoding="async"
            alt="Logo"
            className="w-10 h-10"
          />
        </Link>
        <div className="md:flex items-center gap-5 hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link to="/dashboard">
            <Button className="md:inline hidden">Get Started</Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </button>
            </SheetTrigger>

            <SheetContent>
              <div className="px-10 font-inter capitalize text-2xl py-15 flex flex-col gap-5 h-full">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </nav>
  );
}

export default memo(Nav);
