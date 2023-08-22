const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://safwanpm0:safwanpm0@cluster0.dk6pqys.mongodb.net/RestaurantDB?retryWrites=true&w=majority')

const Schema = mongoose.Schema
const user_registertSchema = new Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    email:{type:String},
    phone:{type:String},
})

const RegisterModel = mongoose.model('user_tb',user_registertSchema)
module.exports=RegisterModel