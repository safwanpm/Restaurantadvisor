import React from 'react'
import Navbar from '../../components/User/navbar/Navbar'
import Footer from '../../components/Home/footer/Footer'
import Background from '../../components/Home/centre/Background'
import { Modal } from '@mui/material'
import Mainhome_bg from '../../components/Home/Mainhome_bg'
import MainHome_navbar from '../../components/Home/MainHome_navbar'

function Home() {
  return (<>
  <MainHome_navbar/>
  <Background/>
  {/* <Mainhome_bg/> */}
  <Footer/>

  </>
    
  )
}

export default Home