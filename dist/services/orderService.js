"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRazorpayOrder = exports.createRazorpayOrder = exports.createOrder = void 0;
const order_1 = __importDefault(require("../models/order"));
const razorpay_1 = __importDefault(require("razorpay"));
const crypto_1 = __importDefault(require("crypto"));
const createOrder = async (orderData) => {
    if (!orderData.userId || !orderData.bookId)
        throw new Error("Missing required order fields");
    const newOrder = new order_1.default({
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
exports.createOrder = createOrder;
const createRazorpayOrder = async ({ amount, currency = "INR", receipt, }) => {
    if (!amount)
        throw new Error("Amount is required");
    const rzp = new razorpay_1.default({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const order = await rzp.orders.create({
        amount: amount * 100,
        currency,
        receipt,
    });
    return order;
};
exports.createRazorpayOrder = createRazorpayOrder;
const verifyRazorpayOrder = async ({ razorpay_order_id, razorpay_payment_id, razorpay_signature, }) => {
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature)
        throw new Error("Missing Razorpay fields");
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto_1.default
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(sign)
        .digest("hex");
    return razorpay_signature === expectedSign;
};
exports.verifyRazorpayOrder = verifyRazorpayOrder;
