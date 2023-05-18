import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The field NOME is required']
  },
  password: {
    type: String,
    required: [true, 'The field SENHA is required'],
    select:false
  },
  avatar: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'The field EMAIL is required'],
    unique: true
  },
  admin: {
    type: Boolean,
    default: false
  }

});

userSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model('users', userSchema);

export default User;