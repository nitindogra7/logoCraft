import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const footerLinks = {
  Product: [
    { name: "Features", path: "/#features" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Dashboard", path: "/dashboard" },
  ],
  Company: [
    { name: "About", path: "/#about" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
  ],
  Legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
  ],
};

const socials = [
  { label: "𝕏", href: "#" },
  { label: "in", href: "#" },
  { label: "gh", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#080A0F] border-t border-white/[0.06] overflow-hidden font-inter">

      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[180px] bg-sky-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-20 pt-16 pb-8">

        {/* Top: brand + links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <img
                src={logo}
                width="32"
                height="32"
                alt="Logo"
                className="w-8 h-8"
              />
              <span className="text-white font-semibold text-sm tracking-tight">
                LogoAI
              </span>
            </Link>

            <p className="text-xs text-neutral-600 leading-relaxed max-w-[175px]">
              Generate stunning AI-powered logos in seconds. No design skills needed.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08]
                    flex items-center justify-center text-neutral-600 hover:text-white
                    hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 text-xs font-medium"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-[10px] font-semibold text-neutral-600 uppercase tracking-[0.12em]">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-700">
            © {new Date().getFullYear()} LogoAI. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-neutral-700">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}