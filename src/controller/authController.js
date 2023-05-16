import bcrypt from "bcrypt"
import {findByEmail, generateToken} from "../service/loginService.js"

const login = async (req, res) => {
    try {
        const {email, password} = req.body

        const user = await findByEmail(email)
        
        const passwordIsValid = await bcrypt.compare(password , user.password)

        const token = generateToken(user.id)

        console.log(passwordIsValid)

        res.status(200).send({token})
    } catch (erro) {
        res.status(500).send({message: erro.message})
    }

}

export {login}