
import {createNews, findAll} from '../service/newsService.js';

class newsController {

  static create = async(req, res) =>{
    try{
      const {title,text,banner} = req.body;
      await createNews({
        title,
        text,
        banner,
        user: req.userId // req.userID vem de authTokenSession router
      });
            
      res.status(201).send(201);
    }catch(erro){
      res.status(500).send({message: erro.message});
    }   
  };

  static getAll = async(req, res) => {
    try{
      let {limit = 5, page = 1} = req.query;

      limit = Number(limit);
      page = Number(page);

      const news  = await findAll(page, limit);

      res.status(200).send({news});
    }catch(erro){
      res.status(500).send({message: erro.message});
    }   
  };
}

export default newsController;
