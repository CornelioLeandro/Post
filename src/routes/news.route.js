import { Router } from "express";
import newsController from "../controller/newsController.js";
const route = Router()

route.post('/', newsController.create)
route.get('/', newsController.getAll)

export default route