import { MdDiamond } from "react-icons/md";
import { motion } from "motion/react";
import DashboardNav from "../dashboard/components/DashboardNav";
import { useContext } from "react";
import { DashBoardContext } from "@/contextApis/dashBoardContext";
import RazorpayButton from "@/components/RazorpayButton";
import Footer from "@/components/Footer";
import { useToast } from "@/contextApis/toastContext";

export default function BuyDiamonds() {
  const { response, user } = useContext(DashBoardContext);
  const { addToast } = useToast();

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
    <div className="min-h-dvh bg-[#080A0F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/6 rounded-full blur-[80px]" />
      </div>

      <DashboardNav response={response} user={user} />

      <div className="relative z-10 pt-[88px] pb-20 px-6 md:px-20 font-inter">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Credits
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-white mt-3">
            Buy <span className="italic text-sky-400">Diamonds</span>
          </h1>
          <p className="text-neutral-500 mt-3 text-sm max-w-md mx-auto">
            Create stunning logos with plans that suit your needs.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.diamonds}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-2xl flex flex-col items-center p-8 border ${
                plan.popular
                  ? "bg-white/[0.05] border-sky-500/40"
                  : "bg-white/[0.03] border-white/[0.08]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 px-4 py-1 bg-sky-500 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              )}

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-white/[0.05] border border-white/[0.08]">
                <MdDiamond className="text-2xl text-sky-400" />
              </div>

              <h2 className="text-4xl font-bold text-white">
                {plan.diamonds}
              </h2>
              <p className="text-xs text-neutral-600 mt-1 uppercase">
                Diamonds
              </p>

              <span className="text-xs text-sky-400/80 mb-6 bg-sky-500/10 px-3 py-1 rounded-full">
                {plan.perLogo}
              </span>

              <p className="text-3xl font-semibold text-white mb-6">
                {plan.price}
              </p>

              <div className="w-full">
                <RazorpayButton
                  amount={plan.amount}
                  diamonds={plan.diamonds}
                  onSuccess={() =>
                    addToast(
                      `${plan.diamonds} diamonds added successfully!`,
                      "success"
                    )
                  }
                  onFailure={() =>
                    addToast("Payment failed. Please try again.", "error")
                  }
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-neutral-700 mt-10">
          Secured by Razorpay · Instant credit top-up · No subscription
        </p>
      </div>

      <Footer />
    </div>
  );
}