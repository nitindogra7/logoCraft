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
    <nav className="w-full flex justify-center md:py-5 py-3 font-inter fixed top-0 z-50">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex md:gap-16 gap-5 py-3 px-6 md:w-auto w-[calc(100%-2rem)] md:px-10 justify-between md:rounded-full items-center
          bg-[#0d1117]/80 backdrop-blur-xl border border-white/[0.08]
          shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_40px_rgba(0,0,0,0.6)]"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src={logo}
            width="40"
            height="40"
            loading="eager"
            decoding="async"
            alt="Logo"
            className="w-8 h-8"
          />
        </Link>

        {/* Desktop Links */}
        <div className="md:flex items-center gap-6 hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 relative
                after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-px
                after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="md:inline hidden">
            <Button
              size="sm"
              className="rounded-full px-5 text-sm bg-sky-500 hover:bg-sky-400 text-white border-0
                shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(56,189,248,0.4)]"
            >
              Get Started
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-neutral-300"
                aria-label="Open menu"
              >
                <Menu size={16} />
              </button>
            </SheetTrigger>
            <SheetContent className="w-72 bg-[#0d1117] border-l border-white/[0.08]">
              <div className="px-6 font-inter py-16 flex flex-col gap-1 h-full">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-lg font-medium py-3 px-3 rounded-xl hover:bg-white/[0.06] transition-colors text-neutral-400 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-auto pt-6">
                  <Link to="/dashboard">
                    <Button className="w-full rounded-full bg-sky-500 hover:bg-sky-400 text-white border-0">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </nav>
  );
}

export default memo(Nav);