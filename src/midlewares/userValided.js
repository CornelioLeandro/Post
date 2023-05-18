import mongoose from 'mongoose';
import UserService from '../service/userService.js';

const validId = async (req, res, next) => {
  const id =req.params.id;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).send({message: 'Invalid Id'});
  }

  next();
};

const validUser = async (req, res, next) => {
  const id =req.params.id;

  const user = await UserService.findById(id);

  if(!user){
    return res.status(400).send({message: 'User not found'});
  }
  next();
};

export {validId,validUser };