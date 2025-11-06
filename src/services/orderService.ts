import Order from "../models/order";
import Razorpay from "razorpay";
import crypto from "crypto";

interface OrderData {
  userId: string;
  bookId: string;
  address: string;
  paymentMethod: string;
  isPaid?: boolean;
  paidAt?: Date | null;
}

export const createOrder = async (orderData: OrderData) => {
  if (!orderData.userId || !orderData.bookId)
    throw new Error("Missing required order fields");

  const newOrder = new Order({
    user: orderData.userId,
    book: orderData.bookId,
    address: orderData.address,
    paymentMethod: orderData.paymentMethod,
    isPaid: orderData.isPaid || false,
    paidAt: orderData.paidAt || null,
  });

  await newOrder.save();
  return newOrder;
};

export const createRazorpayOrder = async ({
  amount,
  currency = "INR",
  receipt,
}: {
  amount: number;
  currency?: string;
  receipt?: string;
}) => {
  if (!amount) throw new Error("Amount is required");

  const rzp = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const order = await rzp.orders.create({
    amount: amount * 100,
    currency,
    receipt,
  });

  return order;
};

export const verifyRazorpayOrder = async ({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
}: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}): Promise<boolean> => {
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature)
    throw new Error("Missing Razorpay fields");

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(sign)
    .digest("hex");

  return razorpay_signature === expectedSign;
};
