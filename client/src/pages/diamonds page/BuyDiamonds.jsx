import { MdDiamond } from "react-icons/md";
import { motion } from "motion/react";
import DashboardNav from "../dashboard/components/DashboardNav";
import { useContext } from "react";
import { DashBoardContext } from "@/contextApis/dashBoardContext";
import RazorpayButton from "@/components/RazorpayButton";

export default function BuyDiamonds() {
  const { response, credits, user } = useContext(DashBoardContext);

  const plans = [
    {
      diamonds: 200,
      price: "₹99",
      amount: 99,
      popular: false,
      perLogo: "~₹0.49 / logo",
    },
    {
      diamonds: 450,
      price: "₹159",
      amount: 159,
      popular: true,
      perLogo: "~₹0.35 / logo",
    },
    {
      diamonds: 1000,
      price: "₹299",
      amount: 299,
      popular: false,
      perLogo: "~₹0.30 / logo",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080A0F] relative overflow-hidden">

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
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] bg-blue-600/6 rounded-full blur-[100px]" />
      </div>

      <DashboardNav response={response} user={user} />

      <div className="relative z-10 pt-28 pb-20 px-6 md:px-20 font-inter">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Credits
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-white mt-3 leading-tight">
            Buy{" "}
            <span className="font-instrument-serif italic text-sky-400">
              Diamonds
            </span>
          </h1>
          <p className="text-neutral-500 mt-3 text-sm max-w-md mx-auto leading-relaxed">
            Create stunning logos with plans that suit your needs.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid gap-5 md:grid-cols-3 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-2xl flex flex-col items-center p-8 border transition-all duration-300
                ${
                  plan.popular
                    ? "bg-white/[0.05] border-sky-500/40 shadow-[0_0_40px_rgba(56,189,248,0.12)]"
                    : "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.14]"
                }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute -top-3.5 px-4 py-1 bg-sky-500 text-white text-xs font-semibold rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)] tracking-wide">
                  Most Popular
                </span>
              )}

              {/* Diamond icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5
                ${plan.popular ? "bg-sky-500/20 border border-sky-500/30" : "bg-white/[0.05] border border-white/[0.08]"}`}
              >
                <MdDiamond
                  className={`text-2xl ${plan.popular ? "text-sky-400" : "text-neutral-500"}`}
                />
              </div>

              {/* Diamond count */}
              <h2 className="text-4xl font-bold text-white font-inter">
                {plan.diamonds}
              </h2>
              <p className="text-xs text-neutral-600 mt-1 mb-1 tracking-widest uppercase">
                Diamonds
              </p>

              {/* Per-logo cost */}
              <span className="text-xs text-sky-500/70 font-inter mb-6 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/15">
                {plan.perLogo}
              </span>

              {/* Price */}
              <p className="text-3xl font-semibold text-white mb-6 font-inter">
                {plan.price}
              </p>

              {/* CTA */}
              <div className="w-full">
                <RazorpayButton amount={plan.amount} diamonds={plan.diamonds} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <p className="text-center text-xs text-neutral-700 mt-10 font-inter">
          Secured by Razorpay · Instant credit top-up · No subscription
        </p>
      </div>
    </div>
  );
}