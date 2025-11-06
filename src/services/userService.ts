import User from "../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWT_SECRET = process.env.JWT_SECRET as string;

const generateToken = (user: any): string => {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
};

interface SignupData {
  username: string;
  email: string;
  password: string;
  fullname: string;
  phone?: string;
  isSeller?: boolean;
  role?: "user" | "seller" | "admin";
}

export const signup = async (data: SignupData) => {
  const { username, email, password, fullname, phone, isSeller, role } = data;
  const allowedRoles = ["user", "seller"];

  if (role && !allowedRoles.includes(role))
    throw new Error("Invalid role assignment");

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const user = new User({
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

export const signin = async (email: string, password: string) => {
  if (!email || !password) throw new Error("Email and password are required");

  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

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