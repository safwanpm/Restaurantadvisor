const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://safwanpm0:safwanpm0@cluster0.dk6pqys.mongodb.net/RestaurantDB?retryWrites=true&w=majority')

const Schema = mongoose.Schema
const restaurant_registertSchema = new Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    email:{type:String},
    district:{type:String}
    
})

const RestaurantRegisterModel = mongoose.model('restaurant_tb',restaurant_registertSchema)
module.exports=RestaurantRegisterModel