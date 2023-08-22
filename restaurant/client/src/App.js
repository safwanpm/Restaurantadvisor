
import './App.css';

import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Home/login/Login';
import Loginpg from './pages/login/Loginpg';
import Add_hotel from './pages/Hotel/add_hotel/Add_hotel';
import Adminpage from './pages/Admin/Adminpage';
import UserHome from './pages/User/UserHome';
import Bg_mra from './components/Hotel/bg-mra/Bg_mra';
import Hotelhomepg from './pages/Hotel/add_hotel/Hotelhomepg';
import Kannur from './pages/User/location/Kannur';

import Mra from './pages/Hotel/add_hotel/mra/Mra';
import UserRating from './pages/User/rating/UserRating';
import AdminDistrict from './components/Admin/AdminDistrict';
import AdminDistrictpg from './pages/Admin/AdminDistrictpg';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/login' element={<Loginpg />} />
          <Route path='/admin' element={<Adminpage />} />
          <Route path='/admin/location' element={<AdminDistrictpg />} />
          <Route path='/user' element={<UserHome />} />
          <Route path='/user/:district/review' element={<UserRating/>} />
          <Route path='/user/:district' element={<Kannur></Kannur>} ></Route>  
          <Route path='/hotel' element={<Hotelhomepg />} /> 
          <Route path='/hotel/add_hotel' element={<Add_hotel />} ></Route>
          <Route path='/hotel/hotel_details' element={<Mra />} />
        
        
          
          
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
