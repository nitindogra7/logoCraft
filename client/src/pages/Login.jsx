import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginApi } from "@/api/loginApi";
import { AuthContext } from "@/contextApis/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const { login, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
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
    <div className="min-h-dvh w-dvw flex items-center justify-center bg-[#080A0F] px-5 relative overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/10 rounded-full blur-[130px]" />
      </div>

      {/* Back to Home button */}
      <Link
        to="/"
        className="absolute top-5 left-5 z-20 flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white
          bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20
          px-3 py-2 rounded-full transition-all duration-200 font-inter"
      >
        <ArrowLeft size={13} />
        Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] w-full max-w-md rounded-2xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.5)]"
      >
        {/* Logo mark */}
        <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center mb-6">
          <span className="text-sky-400 text-lg">✦</span>
        </div>

        <h1 className="text-2xl font-semibold text-white font-inter mb-1">
          Welcome back
        </h1>
        <p className="text-sm text-neutral-500 font-inter mb-8">
          Login to generate your dream icons
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-500 font-inter uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              className="bg-white/[0.05] border border-white/[0.08] focus:border-sky-500/50 focus:bg-white/[0.07]
                text-white placeholder:text-neutral-700 p-3 rounded-xl outline-none transition-all duration-200 font-inter text-sm"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-500 font-inter uppercase tracking-widest">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              className="bg-white/[0.05] border border-white/[0.08] focus:border-sky-500/50 focus:bg-white/[0.07]
                text-white placeholder:text-neutral-700 p-3 rounded-xl outline-none transition-all duration-200 font-inter text-sm"
            />
          </div>

          <Button
            className="mt-2 w-full py-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white border-0
              shadow-[0_0_28px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]
              transition-all duration-300 font-inter text-sm font-semibold flex items-center justify-center gap-2"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>

        <p className="text-sm text-center text-neutral-600 font-inter mt-6">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-sky-400 hover:text-sky-300 font-medium cursor-pointer transition-colors">
              Sign up
            </span>
          </Link>
        </p>
      </motion.div>
    </div>
  );
}