import { Request, Response } from "express";
import * as orderService from "../services/orderService";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json({ success: true, data: order });
  } catch (err: any) {
    console.error("Order creation failed:", err);
    res.status(400).json({ success: false, message: err.message });
  }
};

export const createRazorpayOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.createRazorpayOrder(req.body);
    res.status(200).json({ success: true, order });
  } catch (err: any) {
    console.error("Razorpay order creation failed:", err);
    res.status(400).json({ success: false, message: err.message });
  }
};

export const verifyRazorpayOrder = async (req: Request, res: Response) => {
  try {
    const isValid = await orderService.verifyRazorpayOrder(req.body);
    if (isValid)
      res.json({ success: true, message: "Payment verified successfully" });
    else res.status(400).json({ success: false, message: "Invalid signature" });
  } catch (err: any) {
    console.error("Verification failed:", err);
    res.status(400).json({ success: false, message: err.message });
  }
};
