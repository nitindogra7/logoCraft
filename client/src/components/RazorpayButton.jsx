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

  return <Button className="bg-sky-500 hover:bg-sky-300" onClick={handlePayment}>Buy {diamonds} Diamonds</Button>;
}
