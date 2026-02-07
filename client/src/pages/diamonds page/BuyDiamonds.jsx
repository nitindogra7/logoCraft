import { MdDiamond } from "react-icons/md";
import { motion } from "motion/react";
import DashboardNav from "../dashboard/components/DashboardNav";
import { useContext } from "react";
import { DashBoardContext } from "@/contextApis/dashBoardContext";
import RazorpayButton from "@/components/RazorpayButton";

export default function BuyDiamonds() {
  const { response } = useContext(DashBoardContext);
  const plans = [
    {
      diamonds: 200,
      price: "₹99",
      amount: 99,
      popular: false,
    },
    {
      diamonds: 450,
      price: "₹159",
      amount: 159,
      popular: true,
    },
    {
      diamonds: 1000,
      price: "₹299",
      amount: 299,
      popular: false,
    },
  ];

  return (
    <>
      <DashboardNav response={response} />
      <div className="min-h-screen bg-sky-50 pt-28 px-6 md:px-20 font-inter">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold ">
            Buy <span className="text-sky-500"> Diamonds</span>
          </h1>
          <p className="text-gray-500 mt-2 capitalize text-center">
            create stunning images with our plans that suits according to your
            needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-2xl bg-white border p-8 shadow-md flex flex-col items-center ${
                plan.popular ? "border-sky-500 shadow-sky-200" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 px-4 py-1 bg-sky-500 text-white text-sm rounded-full">
                  Most Popular
                </span>
              )}

              <MdDiamond className="text-sky-500 text-5xl mb-4" />

              <h2 className="text-3xl font-bold text-gray-800">
                {plan.diamonds}
              </h2>
              <p className="text-gray-500 mb-6">Diamonds</p>

              <p className="text-2xl font-semibold text-gray-800 mb-6">
                {plan.price}
              </p>
              <RazorpayButton amount={plan.amount} diamonds={plan.diamonds} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
