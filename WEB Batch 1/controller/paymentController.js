import Stripe from "stripe";
const stripe = Stripe(
  "sk_test_51QV43BAR9PQxM56UdmBYMofGRz97na9puEQezY72gFd28KKaCD32xj4CZFNabc3yqdIhg1NjdL0HlXAsPyeJWj4f00uMnEDWiS"
);
export const payment = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.products.map((product) => {
        return {
          price_data: {
            currency: "USD",
            product_data: {
              name: product.name,
              //   description: product.description,
            },
            unit_amount: product.unit_amount * 100,
          },
          quantity: product.quantity,
        };
      }),
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });
    res.json({
      success: true,
      session,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
