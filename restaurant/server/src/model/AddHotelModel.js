const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://safwanpm0:safwanpm0@cluster0.dk6pqys.mongodb.net/RestaurantDB?retryWrites=true&w=majority')

const Schema = mongoose.Schema
const user_addhotelSchema = new Schema({
    name:{type:String},
    hotelId:{type:mongoose.Types.ObjectId,ref:"restaurant_tb"},
    district:{type:String},
    email:{type:String},
    place:{type:String},
    pin:{type:String},
    time:{type:String},
    phone:{type:String},
    special:{type:String},
    meals:{type:String}, 
    features:{type:String},
    logo:{type:String},
    images:{type:String}, 
    // image2:{type:String},
    // image3:{type:String},
    // image4:{type:String},
    // image5:{type:String},
    // image6:{type:String},

    
})

const AddHotelModel = mongoose.model('hotels_tb',user_addhotelSchema)
module.exports=AddHotelModel