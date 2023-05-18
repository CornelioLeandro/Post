import userService from '../service/userService.js';

class userController {
  static create = async (req, res) => {
    try {
      const user = req.body;
      await userService.createUser(user);
      console.log(user);

      res.status(200).send({user});
    }catch(erro){
      res.status(500).send({message: erro.message});
    }
  };

  static findAllUser = async (req, res ) =>{
    try{
      const users = await userService.findAll();
      res.status(200).send(users);
    }catch(erro){
      res.status(500).send({message: erro.message});
    }
  };

  static findUserById = async (req, res ) => {
    try{
      const userId = req.params.id;
      const user = await userService.findById(userId);
      res.status(200).send(user);
    }catch(erro){
      res.status(500).send({message: erro.message});
    }
  };

  static updateUser = async( req, res) => {
    try{
      const userid = req.params.id;
      const updateuser = req.body;
      await userService.updateUser(userid,updateuser);
      res.status(200).send('user successfully updated');
    }catch(erro){
      res.status(500).send({message: erro.message});
    }
  };
}

export default userController;