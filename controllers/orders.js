const Order = require("../Models/order");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const rzp = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // public
  key_secret: process.env.RAZORPAY_KEY_SECRET, // secret (never send to app)
});

module.exports.createOrder = async (req, res) => {
  console.log("order hit hua");
  try {
    const newOrder = new Order({
      user: req.body.userId,
      book: req.body.bookId,
      address: req.body.address,
      paymentMethod: req.body.paymentMethod,
      isPaid: req.body.isPaid || false,
      paidAt: req.body.paidAt || null,
    });
    await newOrder.save();
    res.status(200).json({ success: true, order: newOrder });
  } catch (err) {
    console.error("Order creation failed:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports.createRazorpayOrder = async (req, res) => {
  try {
    const { amount, currency = "INR", receipt } = req.body;

  console.log("create payment called with: ", req.body);


    const options = {
      amount: amount * 100, // amount in paisa
      currency,
      receipt,
    };

    const order = await rzp.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Verify payment signature
module.exports.verifyRazorpayOrder = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  console.log("verify payment called with: ", req.body);

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", "q3rjWczSC2j37DY7oLvDTpuq")
    .update(sign)
    .digest("hex");

  if (razorpay_signature === expectedSign) {
    res.json({ success: true, message: "Payment verified successfully" });
  } else {
    res.status(400).json({ success: false, message: "Invalid signature" });
  }
};
