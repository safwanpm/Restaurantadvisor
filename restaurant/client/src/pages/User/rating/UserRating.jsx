import React from 'react'
import Navbar from '../../../components/User/navbar/Navbar'
import Bg_mra from '../../../components/Hotel/bg-mra/Bg_mra'
import Review_mra from '../../../components/User/Review_mra'
import Footer from '../../../components/Home/footer/Footer'

function UserRating() {
  return (
    <div>
        <Navbar/>
        <Bg_mra/>
        <Review_mra/>
        <Footer/>
    </div>
  )
}

export default UserRating