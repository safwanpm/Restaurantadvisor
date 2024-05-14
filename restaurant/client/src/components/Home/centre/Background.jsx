import React from "react";
import "./Background.css";
import Register from "../register/Register";
import Register_user from "../register/Register_user";
import { Link } from "react-router-dom";
function Background() {
  return (
    <>
      {/* <div id='bgdivs' className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6' id='bgdiv1'>
        
            <h1 id='bgheading'>
            Register <span id='bgheadingspan' >Now</span>
            <br/>
            <Register/> <Register_user/></h1>
          </div>
          
          <div className='col-lg-6' id='bgdiv2'>

            <img id='bgimg1' src='/cory-bjork--V0YGn1pjzE-unsplash.jpg'></img>
          </div>
        </div>
      </div> */}
      <div id="bgdivs" class="container-fluid">
        <div class="row ">
          <div class="col-lg-6 col-md-6 col-sm-12 " id="bgdiv1">
            <h1 id="bgheading">
              Register <span id="bgheadingspan">Now</span>
              <br />
              <Register />
              <Register_user />
            </h1>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12" id="bgdiv2">
            <img id="bgimg1" src="/cory-bjork--V0YGn1pjzE-unsplash.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
