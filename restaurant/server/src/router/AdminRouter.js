const express = require('express');
const AddHotelModel = require('../model/AddHotelModel');
const DistrictModel = require('../model/DistrictModel');
const AdminRouter = express.Router()
AdminRouter.get('/view-hotels', async (req, res) => {

    try {
        const details = await AddHotelModel.find()
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

AdminRouter.post('/add-district', async (req, res) => {
    try {



        const { district } = req.body;
        const details = {
            district: district
        }
        const location = await DistrictModel.findOne({ district:district })


        if (location) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Already added"
            })
        }
        const user = await DistrictModel(details).save()
        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "Loacation added"
            })
        }

    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: "can't add"
        })
    }



})
AdminRouter.get('/view-hotel/:id', async (req, res) => {
    try {
        
        const item = req.params.id;
        console.log(req.body);
        console.log('dsfd',item);
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

AdminRouter.put('/update-hotel', async (req, res) => {
    try {
        console.log(req.body);
        const { hotelId, status, } = req.body;
        console.log(status,'sddsa');
        const newStatus = status === 0 ? 1 : 0;
        const details = await AddHotelModel.findOneAndUpdate({ hotelId: hotelId },
            {
                status: newStatus,
                hotelId: hotelId
               
            })
        if (details) {
            res.status(200).json({
                success: true,
                error: false,
                data: details,
                message: "Details accepted"
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
AdminRouter.post('/delete', async(req, res) => {
    try {
    
        const { hotelId, } = req.body;
        console.log(hotelId,'sadsd');
        const contactDetails = await AddHotelModel.deleteOne({hotelId:hotelId})
        if(contactDetails){
            
            return res.status(200).json({
                success: true,
                error: false,
                message: 'Hotel deleted'
            })
        }
        else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found"
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'catch error'
        })
    }
   
})
module.exports = AdminRouter

