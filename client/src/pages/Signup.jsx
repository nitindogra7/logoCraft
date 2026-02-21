import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { MdAccountCircle } from "react-icons/md";
import { useState, useContext } from "react";
import { AuthContext } from "@/contextApis/authContext";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const { signup, loading, setLoading } = useContext(AuthContext);
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  async function submitSignup(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(input);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-sky-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-blue-600/6 rounded-full blur-[100px]" />
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
          <MdAccountCircle className="text-sky-400 text-xl" />
        </div>

        <h1 className="text-2xl font-semibold text-white font-inter mb-1">
          Create account
        </h1>
        <p className="text-sm text-neutral-500 font-inter mb-8">
          Start creating stunning app icons
        </p>

        <form onSubmit={submitSignup} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-500 font-inter uppercase tracking-widest">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, fullName: e.target.value }))
              }
              className="bg-white/[0.05] border border-white/[0.08] focus:border-sky-500/50 focus:bg-white/[0.07]
                text-white placeholder:text-neutral-700 p-3 rounded-xl outline-none transition-all duration-200 font-inter text-sm"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-500 font-inter uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, email: e.target.value }))
              }
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
              required
              placeholder="••••••••"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, password: e.target.value }))
              }
              className="bg-white/[0.05] border border-white/[0.08] focus:border-sky-500/50 focus:bg-white/[0.07]
                text-white placeholder:text-neutral-700 p-3 rounded-xl outline-none transition-all duration-200 font-inter text-sm"
            />
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="mt-2 w-full py-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white border-0
              shadow-[0_0_28px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]
              transition-all duration-300 font-inter text-sm font-semibold flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>

        <p className="text-sm text-center text-neutral-600 font-inter mt-6">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-sky-400 hover:text-sky-300 font-medium cursor-pointer transition-colors">
              Login
            </span>
          </Link>
        </p>
      </motion.div>
    </div>
  );
}