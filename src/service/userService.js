import User from '../model/user.js';

class UserService {
  static createUser = async (user) => User.create(user);
  static findAll = async () => User.find();
  static findById = async(userId) => User.findById(userId);
  static updateUser = async(userid, newuser) => User.findByIdAndUpdate(userid, newuser);
}



export default UserService;