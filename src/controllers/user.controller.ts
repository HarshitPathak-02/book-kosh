import { Request, Response } from "express";
import * as userService from "../services/userService";

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password, fullname, phone, isSeller } = req.body;
    const { user, token } = await userService.signup({
      username,
      email,
      password,
      fullname,
      phone,
      isSeller,
    });
    res.status(201).json({ success: true, token, user });
  } catch (err: any) {
    console.error("Signup failed:", err);
    res.status(400).json({ success: false, message: err.message });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await userService.signin(email, password);
    res.json({ success: true, token, user });
  } catch (err: any) {
    console.error("Signin failed:", err);
    res.status(400).json({ success: false, message: err.message });
  }
};
