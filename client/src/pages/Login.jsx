import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginApi } from "@/api/loginApi";
import { AuthContext } from "@/contextApis/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const { login, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    setLoading(true);
    try {
      e.preventDefault();
        if (input.email === "" || input.password === "") {
        console.log("empty feilds");
        return;
      }
      await login(input);
      navigate(`/dashboard`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-dvh w-dvw flex items-center justify-center bg-zinc-100 px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-md rounded-2xl p-8 shadow-lg"
      >
        <h1 className="text-2xl font-bold font-inter mb-2">Welcome Back </h1>
        <p className="text-sm text-zinc-500 mb-6">
          Login to generate your dream icons
        </p>

        <div className="flex flex-col gap-4">
          <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            className="bg-zinc-100 p-3 rounded-lg outline-none focus:ring-2 ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            className="bg-zinc-100 p-3 rounded-lg outline-none focus:ring-2 ring-black"
          />
          <Button
            className="mt-2 w-full flex items-center justify-center gap-2"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
          </form>

          <p className="text-sm text-center text-zinc-500">
            Don’t have an account?{" "}
            <Link to="/signup">
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
