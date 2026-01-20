import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="min-h-dvh w-dvw flex items-center justify-center bg-zinc-100 px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-md rounded-2xl p-8 shadow-lg"
      >
        <h1 className="text-2xl font-bold font-inter mb-2">Welcome Back 👋</h1>
        <p className="text-sm text-zinc-500 mb-6">
          Login to generate your dream icons
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-zinc-100 p-3 rounded-lg outline-none focus:ring-2 ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-zinc-100 p-3 rounded-lg outline-none focus:ring-2 ring-black"
          />

          <Button className="mt-2">Login</Button>

          <p className="text-sm text-center text-zinc-500">
            Don’t have an account?{" "}
            <Link to ="/signup">
            <span className="text-black font-semibold cursor-pointer">
              Sign up
            </span>
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
