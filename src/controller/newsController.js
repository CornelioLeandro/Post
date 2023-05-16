
import {createNews, findAll} from "../service/newsService.js"

class newsController {

    static create = async(req, res, next) =>{
        try{
            const news = req.body
            await createNews(news)
            res.status(200).send({news})
        }catch(erro){

        }   
    }

    static getAll = async(req, res , next) => {
        try{
            res.status(200).send("Chegou")
        }catch(erro){

        }   
    }
}

export default newsController