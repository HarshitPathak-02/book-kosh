"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRazorpayOrder = exports.createRazorpayOrder = exports.createOrder = void 0;
const orderService = __importStar(require("../services/orderService"));
const createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(201).json({ success: true, data: order });
    }
    catch (err) {
        console.error("Order creation failed:", err);
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.createOrder = createOrder;
const createRazorpayOrder = async (req, res) => {
    try {
        const order = await orderService.createRazorpayOrder(req.body);
        res.status(200).json({ success: true, order });
    }
    catch (err) {
        console.error("Razorpay order creation failed:", err);
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.createRazorpayOrder = createRazorpayOrder;
const verifyRazorpayOrder = async (req, res) => {
    try {
        const isValid = await orderService.verifyRazorpayOrder(req.body);
        if (isValid)
            res.json({ success: true, message: "Payment verified successfully" });
        else
            res.status(400).json({ success: false, message: "Invalid signature" });
    }
    catch (err) {
        console.error("Verification failed:", err);
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.verifyRazorpayOrder = verifyRazorpayOrder;
