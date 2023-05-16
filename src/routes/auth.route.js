import { Router } from "express";
const router = Router()
import {login} from "../controller/authController.js";

router.post("/", login)

export default router