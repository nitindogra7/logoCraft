import { createOrderApi, verifyPaymentApi } from "../api/paymentApi.jsx";
import { Button } from "./ui/button.jsx";

export default function RazorpayButton({ amount, diamonds }) {
  const handlePayment = async () => {
    try {
      const { data } = await createOrderApi(amount);
      const order = data.order;
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "logoCraft",
        description: "Buy Diamonds",
        order_id: order.id,
        image: "https://logo-craft-q4ia.vercel.app/assets/logo-BfkDwFNN.png",
        handler: async function (response) {
          await verifyPaymentApi({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            diamonds,
          });
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      className="w-full rounded-xl bg-sky-500 hover:bg-sky-400 text-white border-0
        shadow-[0_0_24px_rgba(56,189,248,0.25)] hover:shadow-[0_0_36px_rgba(56,189,248,0.45)]
        transition-all duration-300 font-inter text-sm font-semibold py-5"
    >
      Buy {diamonds} Diamonds
    </Button>
  );
}