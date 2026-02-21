import { MdDiamond } from "react-icons/md";
import { AuthContext } from "@/contextApis/authContext";
import { Menu, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { memo, useContext } from "react";

function DashboardNav({ user }) {
  const { logout } = useContext(AuthContext);
  const data = [
    { name: "Home", to: "/" },
    { name: "History", to: "/history" },
    { name: "Favorites", to: "/favorites" },
    { name: "Dashboard", to: "/dashboard" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0d1117]/80 backdrop-blur-xl border-b border-white/[0.06] font-inter">
      <div className="flex items-center justify-between py-3.5 px-6 md:px-20">
        {/* Logo */}
        <img
          src={logo}
          width="40"
          height="40"
          loading="eager"
          decoding="async"
          alt="logo"
          className="w-8 h-8"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 ml-25">
          {data.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 relative
                after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-px
                after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Credits pill */}
          <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1.5">
            <MdDiamond className="text-sky-400 text-base" />
            <span className="font-semibold text-sm text-white">
              {user?.credits ?? 0}
            </span>
            <Link
              to="/buy-diamonds"
              className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-500 hover:bg-sky-400 text-white transition-colors"
            >
              <Plus size={12} />
            </Link>
          </div>

          {/* Desktop logout */}
          <button
            onClick={logout}
            className="hidden md:inline-block text-sm text-neutral-400 hover:text-white border border-white/[0.08] hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] px-4 py-1.5 rounded-full transition-all duration-200"
          >
            Logout
          </button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.08] hover:bg-white/10 transition-colors text-neutral-300"
                aria-label="Open menu"
              >
                <Menu size={16} />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[#0d1117] border-l border-white/[0.08]">
              <div className="flex flex-col items-center justify-center py-20 gap-1 mt-10 font-inter">
                {data.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="w-full text-center text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/[0.06] transition-colors text-neutral-400 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={logout}
                  className="mt-8 px-8 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default memo(DashboardNav);