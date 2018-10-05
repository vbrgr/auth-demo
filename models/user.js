const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
 email:String,
 password:String,
 _id:String,
 islogin:Boolean,
 token:{type:String,default:null}
});

const User = mongoose.model('User',UserSchema);
module.exports = User;
