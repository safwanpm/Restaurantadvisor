import React from 'react'
import './Hotelhomebg.css'
function Hotelhomebg() {
    return (
        <>

            <div id='bgdivs' className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6' id='bgdiv1'>

                        {/* <form> 
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
               <Link to={'/hotels/alappuzha'}> <li>
                  <a className="dropdown-item" >
                  Alappuzha
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/ernakulam'}> <li>
                  <a className="dropdown-item" >
                  Ernakulam
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/kozhikode'}> <li>
                  <a className="dropdown-item" >
                  Kozhikode
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/palakkad'}> <li>
                  <a className="dropdown-item" >
                  Palakkad
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/kollam'}> <li>
                  <a className="dropdown-item" >
                  Kollam
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/kannur'}> <li>
                  <a className="dropdown-item" >
                  Kannur
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/kasaragod'}> <li>
                  <a className="dropdown-item" >
                  Kasaragod
                  </a>
                </li>
                </Link>

                <Link to={'/hotels/idukki'}> <li>
                  <a className="dropdown-item" >
                  Idukki
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/kottayam'}> <li>
                  <a className="dropdown-item" >
                  Kottayam
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/thrissur'}> <li>
                  <a className="dropdown-item" >
                  Thrissur
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/pathanamthitta'}> <li>
                  <a className="dropdown-item" >
                  Pathanamthitta
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/malappuram'}> <li>
                  <a className="dropdown-item" >
                  Malappuram
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/wayanad'}> <li>
                  <a className="dropdown-item" >
                  Wayanad
                  </a>
                </li>
                </Link>
                <Link to={'/hotels/thiruvananthapuram'}> <li>
                  <a className="dropdown-item" >
                  Thiruvananthapuram
                  </a>
                </li>
                </Link>
              </ul>
            </div>
          </form> */}<h1 id='bgheading'>
                            Welcome <br></br><span id='bgheadingspan' >
                              Add Your Details
                            </span>
                            <br />
                            <a href='/hotel/add_hotel'>
                                <button type="button" class="btn btn-warning">Add Details</button></a>
                        </h1>
                    </div>

                    <div className='col-lg-6' id='bgdiv2'>

                        <img id='bgimg1' src='/drew-coffman-jUOaONoXJQk-unsplash.jpg'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hotelhomebg