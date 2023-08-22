const mongoose= require("mongoose")
mongoose.connect('mongodb+srv://safwanpm0:safwanpm0@cluster0.dk6pqys.mongodb.net/RestaurantDB?retryWrites=true&w=majority')

const Schema =mongoose.Schema
const DistrictSchema= new Schema({
    name: {type:String},

})
const HotelDistrictModel =mongoose.model('hotel_district_tbs',DistrictSchema)
module.exports=HotelDistrictModel