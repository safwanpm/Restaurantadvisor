const express = require('express')
const RegisterModel = require('../model/RegisterModel')
const RestaurantRegisterModel = require('../model/RestaurantRegisterModel')
const AddHotelModel = require('../model/AddHotelModel')
const LoginModel = require('../model/LoginModel')
const RegisterRouter = express.Router()
var bcrypt = require('bcryptjs');
const multer = require('multer')
const path = require('path');
const DistrictModel = require('../model/DistrictModel')
const HotelDistrictModel = require('../model/HotelDistrictModel')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationPath = path.join('../client/public/uploads/');
        cb(null, destinationPath)
    },
    filename: function (req, file, cb) {

        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage })

// RegisterRouter.post('/upload', upload.single('file'), (req, res) => {
//     res.status(200).json({
//         message: "logo added"
//     })
// })

RegisterRouter.post('/save-user', async (req, res) => {
    try {
        const { name, password, email, phone } = req.body;
        console.log(req.body);
        const hashedPass = await bcrypt.hash(password, 12)
        const loginData = {
            name: name,
            password: hashedPass,
            role: "1",
            status: "0"
        }

        const logins = await LoginModel(loginData).save()
        console.log('log', loginData);
        const details = {
            loginId: logins._id,
            email: email,
            phone: phone,
        }

        const user = await RegisterModel(details).save()

        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {

        }

    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }






})




RegisterRouter.post('/save-restaurant', async (req, res) => {
    try {



        const { name, password, email, district } = req.body;
        console.log(req.body);
        const hashedPass = await bcrypt.hash(password, 12)
        const loginData = {
            name: name,
            password: hashedPass,
            role: "2",
            status: "0"
        }

        const logins = await LoginModel(loginData).save()
        console.log('log', loginData);
        const details = {
            loginId: logins._id,
            email: email,
            district: district
        }

        const user = await RestaurantRegisterModel(details).save()

        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {

        }

    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }



})
RegisterRouter.post('/save-login', async (req, res) => {
    try {
        const { name, password } = req.body
        const user = await LoginModel.findOne({ name })
        if (!user) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "user not found"
            })
        }

        const encrypt = await bcrypt.compare(password, user.password)
        console.log('user', user);
        if (encrypt == true) {
            if (user.role == 0) {
                const Users = await RegisterModel.findOne({ loginId: user._id })
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    user_id: Users._id,
                    message: " Admin Login successfully"
                })
            }
            if (user.role == 1) {
                const Users = await RegisterModel.findOne({ loginId: user._id })
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    user_id: Users._id,
                    message: " User Login successfully"
                })
            }
            if (user.role == 2) {
                const hotel = await RestaurantRegisterModel.findOne({ loginId: user._id })
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    hotel_id: hotel._id,
                    message: " Hotel Login successfully"
                })
            }

        }

        if (encrypt == false) {
            return res.status(400).json({
                success: true,
                error: false,
                message: "Check Password..!"
            })
        }


    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't login"
        })
    }
})


RegisterRouter.post('/save-hotel', async (req, res) => {
    try {
        const { name, email, district, place, pin, time, phone, special, meals, features, logo, hotelId } = req.body;

        console.log(req.body);


        // const hotelData = {



        // }

        // const hotels = await RestaurantRegisterModel(hotelData).save()
        // console.log('datas', hotelData);
        // const hotelName = {



        // }

        // const hotelsName = await LoginModel(hotelName).save()
        // console.log('datas', hotelName);



        const data = {
            district:district,
            name: name,
            email: email,
            place: place,
            pin: pin,
            time: time,
            phone: phone,
            special: special,
            meals: meals,
            features: features,
            logo: logo,
            hotelId: hotelId
            // image1:req.file.filename,
            // image2:req.file.filename,

        }
        console.log('data', data);
        const user = await AddHotelModel(data).save()
        const districts = await HotelDistrictModel(data).save()
        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        if (districts) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added to district table"
            })
        }

       

    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }
})



RegisterRouter.get('/view-hotel/:id', async (req, res) => {
    try {
        const item = req.params.id;
        const HotelDetails = await AddHotelModel.findOne({ hotelId: item })
        // console.log(contactDetails);
        if (HotelDetails) {
            return res.status(200).json({
                success: true,
                error: false,
                data: HotelDetails
            })
        }
    }
    catch (error) {
    }
})


RegisterRouter.get('/save-district/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const HotelDetails = await AddHotelModel.findOne({ hotelId: item })
        // console.log(contactDetails);
        if (HotelDetails) {
            return res.status(200).json({
                success: true,
                error: false,
                data: HotelDetails
            })
        }
    }
    catch (error) {
    }
})



RegisterRouter.get('/view-district', async (req, res) => {
    try {
        const HotelDetails = await DistrictModel.find()
        // console.log(contactDetails);
        if (HotelDetails) {
            return res.status(200).json({
                success: true,
                error: false,
                data: HotelDetails
            })
        }
    }
    catch (error) {
    }
})


RegisterRouter.get('/review/:id', async (req, res) => {
    try {
        const item = req.params.id;
        const reviewDetails = await AddHotelModel.find()
        console.log(reviewDetails);
        if (reviewDetails) {
            return res.status(200).json({
                success: true,
                error: false,
                data: reviewDetails
            })
        }
    }
    catch (error) {
    }
})


// RegisterRouter.post('/delete/:id', async(req, res) => {
//     try {
//         const id = req.params.id
//         const contactDetails =await RegisterModel.deleteOne({_id:id})
//         console.log(contactDetails);
//         if(contactDetails){
//             return res.status(200).json({
//                 success: true,
//                 error: false,
//                 message: 'deleted'
//             })
//         }
//     } catch (error) {
//     }

// })



RegisterRouter.post('/add-district', async (req, res) => {
    try {



        const { district } = req.body;
        const details = {
            district: district
        }
        const user = await DistrictModel(details).save()

        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {

        }

    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }



})

module.exports = RegisterRouter