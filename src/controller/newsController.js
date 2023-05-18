
<<<<<<< HEAD
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
=======
import {createNews, findAll , countNews} from '../service/newsService.js';

class newsController {

  static create = async(req, res) =>{
    try{
      const {title,text,banner} = req.body;
      await createNews({
        title,
        text,
        banner,
        user: req.userId
      });
            
      res.status(201).send(201);
    }catch(erro){
      res.status(500).send({message: erro.message});
    }   
  };

  static getAll = async(req, res) => {
    try{
      let {limit, offset} = req.query;
      limit = Number(limit);
      offset = Number(offset);

      console.log(limit);
      console.log(offset);

      if(limit){
        limit = 5;
      }

      if(offset){
        offset = 0;
      }

      const news  = await findAll(offset, limit);
      const total = await countNews;
      const currentUtl = req.baseUrl;
      console.log(news);

      const next = offset + limit;
      const nextUrl = next < total ? `${currentUtl}?limit=${limit}&offset=${next}` : null;

      const previus = offset - limit < 0 ? null : offset - limit;
      const previusUrl = previus < total ? `${currentUtl}?limit=${limit}&offset=${previus}` : null;

      res.status(200).send({
        nextUrl,
        previusUrl,
        limit,
        offset,
        total,
  
        results: news.map(newsItem => ({
          id: newsItem._id,
          title: newsItem.title,
          text: newsItem.text,
          banner: newsItem.banner,
          likes: newsItem.likes,
          comments: newsItem.comments
          // userName: newsItem.user.name,
          // userAvatar: newsItem.user.avatar,
        })
        )}
      );
    }catch(erro){
      res.status(500).send({message: erro.message});
    }   
  };
}

export default newsController;
>>>>>>> 5ea173e (Feito em casa)
