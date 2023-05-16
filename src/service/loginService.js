import User from "../model/user.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()  

const findByEmail = async (email) => await User.findOne({email: email}).select("+password")
const generateToken = (id) => jwt.sign({id: id}, process.env.HASH_POST, {expiresIn: 86400})

export {findByEmail, generateToken}