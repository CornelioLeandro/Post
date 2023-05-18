import { config } from 'dotenv';
import jwt  from 'jsonwebtoken';
import userService from '../service/userService.js';
config();

const authTokenSession = async (req, res, next) => {
  try{
    const {authorization} = req.headers;

    if(!authorization){
      return res.status(401).send({message: 'Authorization empty or null'});
    }      
    const parts = authorization.split(' ');
              
    if(parts.length !== 2 ){
      return res.status(401).send({message: 'fields Authorization invalid'});
    }
    
    const [schema, token] = parts;

    if(schema !== 'Bearer') {
      return res.status(401).send({message: 'field Bearer invalid'});
    }
    
    jwt.verify(token, process.env.HASH_POST, async (error, decoded) => {
      if(error){
        return res.status(401).send({message: 'Token invalid or expired'});
      }
      const user = await userService.findById(decoded.id);

      if(!user || !user.id ){
        return res.status(401).send({message: 'invalid user'});
      }

      req.userId = user.id;
      next();
    });       
  }catch(erro){
    res.status(500).send({message: erro.message});
  }
};

export default authTokenSession;