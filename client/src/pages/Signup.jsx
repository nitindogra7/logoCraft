import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { signupApi } from "@/api/signupApi";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/contextApis/authContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  async function submitSignup(e) {
    e.preventDefault();
    await signupApi(input);
    login();
    navigate("/dashboard");
  }
  return (
    <div className="min-h-dvh w-dvw flex items-center justify-center bg-zinc-100 px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-md rounded-2xl p-8 shadow-lg"
      >
        <h1 className="text-2xl font-bold font-inter mb-2 flex gap-3 items-center">
          Create Account <MdAccountCircle />
        </h1>
        <p className="text-sm text-zinc-500 mb-6">
          Start creating stunning app icons
        </p>

        <div className="flex flex-col gap-4">
          <form
            action=""
            onSubmit={submitSignup}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => {
                setInput((prev) => ({ ...prev, fullName: e.target.value }));
              }}
              className="bg-zinc-100 p-3 rounded-lg outline-none focus:ring-2 ring-black"
            />

            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setInput((prev) => ({ ...prev, email: e.target.value }));
              }}
              className="bg-zinc-100 p-3 rounded-lg outline-none focus:ring-2 ring-black"
            />

            <input
              type="password"
              onChange={(e) => {
                setInput((prev) => ({ ...prev, password: e.target.value }));
              }}
              placeholder="Password"
              className="bg-zinc-100 p-3 rounded-lg outline-none focus:ring-2 ring-black"
            />

            <Button className="mt-2" type="submit">
              Create Account
            </Button>
          </form>

          <p className="text-sm text-center text-zinc-500">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-black font-semibold cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
