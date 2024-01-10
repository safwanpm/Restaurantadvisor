import React from 'react'
import { Link } from 'react-router-dom'


function User_homebg() {
  return (<>
 
    <div id='bgdivs' className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6' id='bgdiv1'>
            <h1 id='bgheading'>
              Fuel Your Body<br /> Balance Your Mind.
            </h1><br />
            <form> 
              <span id='bgspn'>Choose Location :</span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select One
                </button>
                <ul className="dropdown-menu">
                 <Link to={'/user/Alappuzha'}> <li>
                    <a className="dropdown-item" >
                    Alappuzha
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Ernakulam'}> <li>
                    <a className="dropdown-item" >
                    Ernakulam
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Kozhikode'}> <li>
                    <a className="dropdown-item" >
                    Kozhikode
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Palakkad'}> <li>
                    <a className="dropdown-item" >
                    Palakkad
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Kollam'}> <li>
                    <a className="dropdown-item" >
                    Kollam
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Kannur'}> <li>
                    <a className="dropdown-item" >
                    Kannur
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Kasaragod'}> <li>
                    <a className="dropdown-item" >
                    Kasaragod
                    </a>
                  </li>
                  </Link>

                  <Link to={'/user/Idukki'}> <li>
                    <a className="dropdown-item" >
                    Idukki
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Kottayam'}> <li>
                    <a className="dropdown-item" >
                    Kottayam
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Thrissur'}> <li>
                    <a className="dropdown-item" >
                    Thrissur
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Pathanamthitta'}> <li>
                    <a className="dropdown-item" >
                    Pathanamthitta
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Malappuram'}> <li>
                    <a className="dropdown-item" >
                    Malappuram
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Wayanad'}> <li>
                    <a className="dropdown-item" >
                    Wayanad
                    </a>
                  </li>
                  </Link>
                  <Link to={'/user/Thiruvananthapuram'}> <li>
                    <a className="dropdown-item" >
                    Thiruvananthapuram
                    </a>
                  </li>
                  </Link>
                </ul>
              </div>
            </form>
          </div>
          
          <div className='col-lg-6' id='bgdiv2'>

            <img id='bgimg1' src='/cory-bjork--V0YGn1pjzE-unsplash.jpg'></img>
          </div>
        </div>
      </div>
      </>
  )
}

export default User_homebg