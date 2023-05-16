import { Router } from "express";
const route = Router()

import newsController from "../controller/newsController.js";

route.post('/', newsController.create)
route.get('/', newsController.getAll)

export default route