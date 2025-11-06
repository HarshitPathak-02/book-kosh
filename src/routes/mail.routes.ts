import express from "express";
import { mailToTeam } from "../controllers/mail.controller";
import wrapAsync  from "../utils/wrapAsync";

const router = express.Router();

router.post("/leads", wrapAsync(mailToTeam));

export default router;
