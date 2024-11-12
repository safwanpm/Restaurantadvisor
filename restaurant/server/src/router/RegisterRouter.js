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
const { error, log } = require('console')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         const destinationPath = path.join('../client/public/uploads/');
//         cb(null, destinationPath)
//     },
//     filename:function (req, file, cb) {

//         cb(null, req.body.name)
//     }
// })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationPath = path.join('../client/public/uploads/');
        cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
        const uniqueFileName = `${file.originalname}`;
        cb(null, uniqueFileName);
    }
});


const upload = multer({ storage: storage })

RegisterRouter.post('/upload-logo', upload.single('logo'), (req, res) => {
    res.status(200).json({
        message: "logo added"
    })
})


RegisterRouter.post('/upload-images', upload.array('files', 6), (req, res) => {
    res.status(200).json({
        message: "images add    ed"
    })
})

RegisterRouter.get('/view-hoteldetails', async (req, res) => {

    try {
        const id = req.query.id
        const details = await AddHotelModel.findOne({ hotelId: id })
        console.log("details", details);
        if (details) {
            return res.status(200).json({
                success: true,
                error: false,
                data: details,
                message: "success"
            })
        }
        else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found"
            })
        }
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: "catch error"
        })
    }
})

RegisterRouter.post('/save-user', async (req, res) => {
    try {
        const { name, password, email, phone } = req.body;
        // console.log(req.body);
        const hashedPass = await bcrypt.hash(password, 12)
        const loginData = {
            name: name,
            password: hashedPass,
            role: "1",
            status: "0"
        }

        const logins = await LoginModel(loginData).save()
        // console.log('log', loginData);
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
        // console.log(req.body);
        const hashedPass = await bcrypt.hash(password, 12)
        const loginData = {
            name: name,
            password: hashedPass,
            role: "2",
            status: "0"
        }

        const logins = await LoginModel(loginData).save()
        // console.log('log', loginData);
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
        console.log('user', user.name);
        const username= user.name;
        if (encrypt == true) {
            if (user.role == 0) {
                // const usename = await LoginModel.findOne({ _id: loginId })
                const Users = await RegisterModel.findOne({ loginId: user._id })
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    user_id: Users._id,
                    username: username,

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
                    message: " User Login successfully",
                    username: username,
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
                    message: " Hotel Login successfully",
                    username: username,
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
        const { name, email, district, place, pin, time, phone, special, meals,
            features, logo, hotelId, images, } = req.body;


        const data = {
            status: 0,
            district: district,
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
            hotelId: hotelId,
            images: images,


        }

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

//update 

RegisterRouter.put('/update-hotel', async (req, res) => {
    try {

        const { name, email, district, place, pin, time, phone, special, meals,
            features, logo, hotelId, images, } = req.body;
        console.log(hotelId, 'sad');
        const details = await AddHotelModel.findOneAndUpdate({ hotelId: hotelId },
            {
                district: district,
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
                hotelId: hotelId,
                images: images,
            })
        if (details) {
            res.status(200).json({
                success: true,
                error: false,
                data: details,
                message: "Data Upadated"
            })
        }
        else {
            res.status(404).json({
                success: false,
                error: true,
                message: "Hotel not found"
            });
        }

    }
    catch (err) {
        res.status(400).json({
            success: false,
            error: true,
            message: "Can't Update catch error"
        })
    }
})



RegisterRouter.get('/view-hotel/:id', async (req, res) => {
    try {

        const item = req.params.id;
        console.log(item);
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



RegisterRouter.get('/view-district/:district', async (req, res) => {
    try {
        const district = req.params.district;
        const HotelDetails = await AddHotelModel.find({ district: district })
        // console.log(contactDetails);
        if (HotelDetails) {
            return res.status(200).json({
                success: true,
                error: false,
                data: HotelDetails
            })
        }
        else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No Reestaurants found"
            })
        }
    }
    catch (error) {
    }
})

RegisterRouter.post('/add-review/:id', async (req, res) => {
    try {
        const hotelId = req.params.id;
        const { rating, userId, description, username, clnrating, atmrating, serrating, qltrating } = req.body;

        const currentDate = new Date().toLocaleDateString();
        const hotel = await AddHotelModel.findOne({ hotelId: hotelId });

        if (!hotel) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Hotel not found"
            });
        }

        const existingReviewIndex = hotel.review.findIndex(review => review.userId === userId);

        if (existingReviewIndex !== -1) {
            // Update the existing review
            hotel.review[existingReviewIndex] = {
                ...hotel.review[existingReviewIndex],
                username: username,
                userId: userId,
                rating: rating,
                clnrating: clnrating,
                atmrating: atmrating,
                serrating: serrating,
                qltrating: qltrating,
                description: description,
                date: currentDate
            };

            await hotel.save();

            return res.status(200).json({
                success: true,
                error: false,
                data: hotel,
                message: "Review updated"
            });
        } else {
            // Add a new review if the user hasn't reviewed yet
            hotel.review.push({
                username: username,
                userId: userId,
                rating: rating,
                clnrating: clnrating,
                atmrating: atmrating,
                serrating: serrating,
                qltrating: qltrating,
                description: description,
                date: currentDate
            });

            await hotel.save();

            return res.status(200).json({
                success: true,
                error: false,
                data: hotel,
                message: "Review added"
            });
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            error: true,
            message: "Can't add or update review, catch error"
        });
    }
});




// RegisterRouter.post('/add-review/:id', async (req, res) => {
//     try {
//         const hotelId = req.params.id;
//         const { rating, userId, description, username, clnrating, atmrating, serrating, qltrating } = req.body;

//         const currentDate = new Date().toLocaleDateString();
//         const hotel = await AddHotelModel.findOne({ hotelId: hotelId });

//         if (!hotel) {
//             return res.status(404).json({
//                 success: false,
//                 error: true,
//                 message: "Hotel not found"
//             });
//         }

//         const existingReview = hotel.review.find(review => review.userId === userId);
//         if (existingReview) {
//             return res.status(400).json({
//                 success: false,
//                 error: true,
//                 message: "User already added a review for this hotel"
//             });
//         }

//         const details = await AddHotelModel.findOneAndUpdate(
//             { hotelId: hotelId },
//             {
//                 $addToSet: {
//                     review: {
//                         username: username, userId: userId, rating: rating,
//                         clnrating: clnrating, atmrating: atmrating, serrating: serrating, qltrating: qltrating,
//                         description: description, date: currentDate
//                     }
//                 }
//             },
//             { new: true }
//         );

//         res.status(200).json({
//             success: true,
//             error: false,
//             data: details,
//             message: "Review added"
//         });
//     } catch (err) {
//         res.status(400).json({
//             success: false,
//             error: true,
//             message: "Can't add review, catch error"
//         });
//     }
// });

RegisterRouter.get('/view-review/:id', async (req, res) => {
    try {
        const hotelId = req.params.id;  
        console.log(hotelId,'hotel');
        const reviewDetails = await AddHotelModel.findOne({ hotelId: hotelId })
        console.log(reviewDetails);
        if (reviewDetails) {
            return res.status(200).json({
                success: true,
                error: false,
                data: reviewDetails
            })
        }
    }
    catch (err) {
        res.status(400).json({
            success: false,
            error: true,
            message: "Can't view review, catch error"
        });
    }
})






RegisterRouter.get('/view-district', async (req, res) => {
    try {
        const reviewDetails = await DistrictModel.find()
        // console.log(reviewDetails);
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

module.exports = RegisterRouter