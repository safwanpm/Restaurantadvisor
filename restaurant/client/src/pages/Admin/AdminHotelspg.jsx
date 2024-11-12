import React from 'react'
import Navbar from '../../components/User/navbar/Navbar'
import HotelsBg from '../../components/Admin/HotelsBg'
import Review_mra from '../../components/User/Review_mra'
import BasicRating from '../../components/User/Sample'
import Footer from '../../components/Home/footer/Footer'

function AdminHotelspg() {
  return (
    <div>
        <Navbar/>
        <HotelsBg/>
        <Review_mra/>
        <div className='mt-10'>
        <Footer/>
        </div>
       
       
    </div>
  )
}

export default AdminHotelspg