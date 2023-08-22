const express = require('express')
const HotelRouter = express.Router()
const AddHotelModel = require('../model/AddHotelModel')
const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })
  
//   const upload = multer({ storage: storage })



HotelRouter.post('/save-hotel', async (req, res) => {
    try {  
       
        const data={
            name:req.body.name,
            district:req.body.district,
            email:req.body.email,
            place:req.body.place,
            pin:req.body.pin,
            time:req.body.time,
            phone:req.body.phone,
            special:req.body.special,
            meals:req.body.meals,
            features:req.body.features,
            logo:req.file.filename,
            // image1:req.file.filename,
            // image2:req.file.filename,
          
        }
        console.log('dsjks',data);
        const user = await AddHotelModel(data).save()
        
        if (user) {
           return res.status(200).json({
                success: true,
                error: false,
                message: "added",data    
            })
        }  
        else{
           
           
        }  
        
    }
    catch (error) {
        return res.status(200).json({
            success: true,
            error: false,
            message: "can not add"
        })
    }
})


module.exports = HotelRouter