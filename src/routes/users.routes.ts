import express from "express";
import wrapAsync from "../utils/wrapAsync";
import { signup, signin } from "../controllers/user.controller";
import { authLimiter, validate } from "../middlewares/index";
import { signupSchema, signinSchema } from "../Schema";

const router = express.Router({ mergeParams: true });

router.post("/signup", authLimiter, validate(signupSchema), wrapAsync(signup));
router.post("/signin", authLimiter, validate(signinSchema), wrapAsync(signin));

export default router;
