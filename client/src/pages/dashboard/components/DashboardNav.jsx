import { MdDiamond } from "react-icons/md";
import { AuthContext } from "@/contextApis/authContext";
import { Menu, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { memo, useContext } from "react";

function DashboardNav({ user  }) {
  const { logout } = useContext(AuthContext);
  const data = [
    { name: "Home", to: "/" },
    { name: "History", to: "/history" },
    { name: "Favorites", to: "/favorites" },
    { name: "Dashboard", to: "/dashboard" },
  ];

  return (
    <nav className="w-full fixed top-0 z-10 bg-white font-inter shadow-md">
      <div className="flex items-center justify-between py-3 px-6 md:px-20">
        <img
          src={logo}
          width="40"
          height="40"
          loading="eager"
          decoding="async"
          alt="logo"
          className="w-10 h-10"
        />
        <div className="hidden md:flex items-center gap-10">
          {data.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border rounded-full px-3 py-1">
            <MdDiamond className="text-sky-500 text-xl" />
            <span className="font-semibold text-sm">
              {user?.credits ?? 0 }
            </span>

            <Link
              to="/buy-diamonds"
              className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-500 text-white"
            >
              <Plus size={14} />
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden" aria-label="Open menu">
                <Menu />
              </button>
            </SheetTrigger>

            <SheetContent>
              <div className="flex flex-col items-center justify-center py-20 gap-6 text-2xl mt-10 font-inter">
                {data.map((item) => (
                  <Link key={item.name} to={item.to}>
                    {item.name}
                  </Link>
                ))}

                <button
                  onClick={logout}
                  className="mt-6 px-4 bg-sky-500 text-white py-2 rounded"
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
      </div>
    </nav>
  );
}

export default memo(DashboardNav);
