
import {createNews, findAll} from "../service/newsService.js"


class newsController {

    static create = async(req, res, next) =>{
        try{
            const {authorization} = req.headers
            if(!authorization){
                return res.send(401)
            }
            
            console.log(authorization)


            const {title,text,banner} = req.body
            await createNews({title,
                text,
                banner,
                user: {_id: "6462c4b03a8a1c2a421ea9d9"}})
            
            res.status(201).send(201)
        }catch(erro){
            res.status(500).send({message: erro.message})
        }   
    }

    static getAll = async(req, res , next) => {
        try{
            const news  = await findAll()
            res.status(200).send(news)
        }catch(erro){
            res.status(500).send({message: erro.message})
        }   
    }
}







export default newsController
