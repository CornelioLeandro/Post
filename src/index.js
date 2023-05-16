import express from "express"
import user from "./routes/userRoute.js"
import auth from "./routes/auth.route.js"

const app = express()
app.use(express.json())

app.use("/user", user)
app.use("/auth", auth)

export default app