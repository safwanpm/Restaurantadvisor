const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://safwanpm0:safwanpm0@cluster0.dk6pqys.mongodb.net/RestaurantDB?retryWrites=true&w=majority')

const Schema = mongoose.Schema
const loginSchema = new Schema({
    name:{type:String},
    password:{type:String},
    role:{type:String},
    status:{type:String},
})

const LoginModel = mongoose.model('login_tb',loginSchema)
module.exports=LoginModel