"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const JWT_SECRET = process.env.JWT_SECRET;
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
};
const signup = async (data) => {
    const { username, email, password, fullname, phone, isSeller, role } = data;
    const allowedRoles = ["user", "seller"];
    if (role && !allowedRoles.includes(role))
        throw new Error("Invalid role assignment");
    const existingUser = await user_1.default.findOne({ email });
    if (existingUser)
        throw new Error("User already exists");
    const user = new user_1.default({
        username,
        email,
        password,
        fullname,
        phone,
        isSeller,
        role: role || "user",
    });
    await user.save();
    const token = generateToken(user);
    return { success: true, user, token };
};
exports.signup = signup;
const signin = async (email, password) => {
    if (!email || !password)
        throw new Error("Email and password are required");
    const user = await user_1.default.findOne({ email });
    if (!user)
        throw new Error("User not found");
    const isMatch = await bcrypt_1.default.compare(password, user.password);
    if (!isMatch)
        throw new Error("Invalid credentials");
    const token = generateToken(user);
    return {
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            isSeller: user.isSeller,
        },
        token,
    };
};
exports.signin = signin;
