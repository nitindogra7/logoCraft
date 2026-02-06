import { MdDiamond } from "react-icons/md";
import { motion } from "motion/react";
import { AuthContext } from "@/contextApis/authContext";
import { useContext } from "react";
import { Menu, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function DashboardNav({ response }) {
  const { logout } = useContext(AuthContext);

  const data = [
    { name: "Home", to: "/" },
    { name: "History", to: "/history" },
    { name: "Favorites", to: "/favorites" },
    { name: "Settings", to: "/settings" },
  ];

  return (
    <nav className="w-full fixed top-0 z-10 bg-white font-inter">
      <motion.div
        initial={{ y: -100, filter: "blur(10px)" }}
        animate={{ y: 0, filter: "blur(0px)", transition: { duration: 0.5 } }}
        className="flex items-center justify-between shadow-md py-3 px-6 md:px-20"
      >
        {/* Logo */}
        <img
          src="https://framerusercontent.com/images/RYJ3bCIn0muya9k3TyVsZn6vK8.png"
          className="w-10 h-10"
          alt="logo"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {data.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Diamond Pill */}
          <div className="flex items-center gap-2 border rounded-full px-3 py-1">
            <MdDiamond className="text-sky-500 text-xl" />
            <span className="font-semibold text-sm">
              {response?.userData?.credits ?? 0}
            </span>

            <Link
              to="/buy-diamonds"
              className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-500 text-white"
            >
              <Plus size={14} />
            </Link>
          </div>

          {/* Mobile Menu (same as before) */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu />
              </button>
            </SheetTrigger>

            <SheetContent>
              <div className="flex flex-col items-center justify-center py-20 gap-6 text-2xl mt-10 font-inter">
                {data.map((item, idx) => (
                  <Link key={idx} to={item.to}>
                    {item.name}
                  </Link>
                ))}

                <button
                  onClick={logout}
                  className="mt-6 px-4  bg-sky-500 text-white py-2 rounded"
                >
                  Logout
                </button>
              </div>
            </SheetContent>
          </Sheet>

          <button
            onClick={logout}
            className="hidden md:inline-block bg-sky-500 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
