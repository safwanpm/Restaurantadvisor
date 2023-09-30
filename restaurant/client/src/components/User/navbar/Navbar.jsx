import React, { useEffect } from 'react'
import './Navbar.css'
import Login from '../../Home/login/Login'
import { useNavigate } from 'react-router-dom'
function Navbar() {


  const navigate = useNavigate()
  const role = localStorage.getItem('role')
  console.log(role);

  const logout = () => {
    localStorage.clear()
    navigate('/')
  }
  useEffect(() => {
    if (!role) {
      navigate('/')
    }
  })



  return (
    <>



      {role == 0 ?

          < nav className="navbar navbar-expand-lg navbar-light bg-light px-0 py-3" id='nav-nav'>
            <div className="container-xl">
              {/* Logo */}
              <h1 className="navbar-brand text-primary" href="#" >
                RESTAURANT<br /><span className='text-warning'>ADVISOR</span>
              </h1>
              {/* <img
                src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
                className="h-8"
                alt="..."
              /> */}

              {/* Navbar toggle */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Collapse */}
              <div className="collapse navbar-collapse" id="navbarCollapse">
                {/* Nav */}
                <div className="navbar-nav mx-lg-auto">
                  <a className="nav-item nav-link active" href="/admin" aria-current="page">
                    Home Page
                  </a>
                  <a className="nav-item nav-link" href="/admin/location">
                    Add Location
                  </a>
                  <a className="nav-item nav-link" href="#">
                    View Hotels
                  </a>
                
                </div>
                {/* Right navigation */}
                {/* <div className="navbar-nav ms-lg-4">
                <a className="nav-item nav-link"  >
                  Sign in
                </a>
              </div> */}
                {/* Action */}
                <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                  <a><button onClick={logout} className="btn btn-sm btn-primary w-full w-lg-auto">Logout

                  </button></a>


                  {/* Button trigger modal */}

                  {/* Modal */}

                  {/* <div
                    className="modal fade"
                    id="staticBackdrop"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered" style={{zIndex:10}}>
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Modal title
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                */}

                </div>
              </div>
            </div>
          </nav >

          :
    
            role == 1 ?
              < nav className="navbar navbar-expand-lg navbar-light bg-light px-0 py-3" id='nav-nav'>
                <div className="container-xl">
                  {/* Logo */}
                  <h1 className="navbar-brand text-primary" href="#" >
                    RESTAURANT<br /><span className='text-warning'>ADVISOR</span>
                  </h1>
                  {/* <img
                  src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
                  className="h-8"
                  alt="..."
                /> */}

                  {/* Navbar toggle */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  {/* Collapse */}
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                    {/* Nav */}
                    <div className="navbar-nav mx-lg-auto">
                      <a className="nav-item nav-link active" href="/user" aria-current="page">
                        Home Page
                      </a>
                      <a className="nav-item nav-link" href="#">
                        About Us
                      </a>
                      <a className="nav-item nav-link" href="#">
                        Contact Us
                      </a>
                      <a className="nav-item nav-link" href="#">
                        Pricing
                      </a>
                    </div>
                    {/* Right navigation */}
                    {/* <div className="navbar-nav ms-lg-4">
                  <a className="nav-item nav-link"  >
                    Sign in
                  </a>
                </div> */}
                    {/* Action */}
                    <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                      <a><button onClick={logout} className="btn btn-sm btn-primary w-full w-lg-auto">Logout

                      </button></a>


                      {/* Button trigger modal */}

                      {/* Modal */}

                      {/* <div
                      className="modal fade"
                      id="staticBackdrop"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered" style={{zIndex:10}}>
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                              Modal title
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">...</div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  */}

                    </div>
                  </div>
                </div>
              </nav >

              :
              role == 2 ?

                < nav className="navbar navbar-expand-lg navbar-light bg-light px-0 py-3" id='nav-nav'>
                  <div className="container-xl">
                    {/* Logo */}
                    <h1 className="navbar-brand text-primary" href="#" >
                      RESTAURANT<br /><span className='text-warning'>ADVISOR</span>
                    </h1>
                    {/* <img
                src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
                className="h-8"
                alt="..."
              /> */}

                    {/* Navbar toggle */}
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarCollapse"
                      aria-controls="navbarCollapse"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                      {/* Nav */}
                      <div className="navbar-nav mx-lg-auto">
                        <a className="nav-item nav-link active" href="/hotel" aria-current="page">
                          Home
                        </a>
                        <a className="nav-item nav-link" href="/hotel/add_hotel">
                          Add Hotel
                        </a>
                        <a className="nav-item nav-link" href="/hotel/hotel_details">
                          View Hotel
                        </a>
                      </div>
                      {/* Right navigation */}
                      {/* <div className="navbar-nav ms-lg-4">
                <a className="nav-item nav-link"  >
                  Sign in
                </a>
              </div> */}
                      {/* Action */}
                      <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                        <a ><button onClick={logout} className="btn btn-sm btn-primary w-full w-lg-auto">Logout

                        </button></a>


                        {/* Button trigger modal */}

                        {/* Modal */}

                        {/* <div
                    className="modal fade"
                    id="staticBackdrop"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered" style={{zIndex:10}}>
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Modal title
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                */}

                      </div>
                    </div>
                  </div>
                </nav >

                :
                // role == 0 ?
                //   < nav className="navbar navbar-expand-lg navbar-light bg-light px-0 py-3" id='nav-nav'>
                //     <div className="container-xl">
                //       {/* Logo */}
                //       {/* <a className="navbar-brand" href="#">
                //   <img
                //     src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
                //     className="h-8"
                //     alt="..."
                //   />
                // </a> */}
                //       {/* Navbar toggle */}
                //       <button
                //         className="navbar-toggler"
                //         type="button"
                //         data-bs-toggle="collapse"
                //         data-bs-target="#navbarCollapse"
                //         aria-controls="navbarCollapse"
                //         aria-expanded="false"
                //         aria-label="Toggle navigation"
                //       >
                //         <span className="navbar-toggler-icon" />
                //       </button>
                //       {/* Collapse */}
                //       <div className="collapse navbar-collapse" id="navbarCollapse">
                //         {/* Nav */}
                //         <div className="navbar-nav mx-lg-auto">
                //           <a className="nav-item nav-link active" href="/" aria-current="page">
                //             Home
                //           </a>
                //           <a className="nav-item nav-link" href="#">
                //             View Users
                //           </a>
                //           <a className="nav-item nav-link" href="#">
                //             View Holtel
                //           </a>
                //           <a className="nav-item nav-link" href="#">
                //             Rating
                //           </a>
                //         </div>
                //         {/* Right navigation */}
                //         {/* <div className="navbar-nav ms-lg-4">
                //     <a className="nav-item nav-link"  >
                //       Sign in
                //     </a>
                //   </div> */}
                //         {/* Action */}
                //         <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                //           <a ><button onClick = {logout}  className="btn btn-sm btn-primary w-full w-lg-auto">Logout

                //           </button></a>


                //           {/* Button trigger modal */}

                //           {/* Modal */}

                //           {/* <div
                //         className="modal fade"
                //         id="staticBackdrop"
                //         tabIndex={-1}
                //         aria-labelledby="exampleModalLabel"
                //         aria-hidden="true"
                //       >
                //         <div className="modal-dialog modal-dialog-centered" style={{zIndex:10}}>
                //           <div className="modal-content">
                //             <div className="modal-header">
                //               <h1 className="modal-title fs-5" id="exampleModalLabel">
                //                 Modal title
                //               </h1>
                //               <button
                //                 type="button"
                //                 className="btn-close"
                //                 data-bs-dismiss="modal"
                //                 aria-label="Close"
                //               />
                //             </div>
                //             <div className="modal-body">...</div>
                //             <div className="modal-footer">
                //               <button
                //                 type="button"
                //                 className="btn btn-secondary"
                //                 data-bs-dismiss="modal"
                //               >
                //                 Close
                //               </button>
                //               <button type="button" className="btn btn-primary">
                //                 Save changes
                //               </button>
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     */}

                //         </div>
                //       </div>
                //     </div>
                //   </nav >
                //   :
                ''
            //   < nav className="navbar navbar-expand-lg navbar-light bg-light px-0 py-3" id='nav-nav'>
            //     <div className="container-xl">
            //       {/* Logo */}
            //       {/* <a className="navbar-brand" href="#">
            //   <img
            //     src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
            //     className="h-8"
            //     alt="..."
            //   />
            // </a> */}
            //       {/* Navbar toggle */}
            //       <button
            //         className="navbar-toggler"
            //         type="button"
            //         data-bs-toggle="collapse"
            //         data-bs-target="#navbarCollapse"
            //         aria-controls="navbarCollapse"
            //         aria-expanded="false"
            //         aria-label="Toggle navigation"
            //       >
            //         <span className="navbar-toggler-icon" />
            //       </button>
            //       {/* Collapse */}
            //       <div className="collapse navbar-collapse" id="navbarCollapse">
            //         {/* Nav */}
            //         <div className="navbar-nav mx-lg-auto">
            //           <a className="nav-item nav-link active" href="/" aria-current="page">
            //             Home
            //           </a>
            //           <a className="nav-item nav-link" href="#">
            //             About Us
            //           </a>
            //           <a className="nav-item nav-link" href="#">
            //             Contact Us
            //           </a>
            //           <a className="nav-item nav-link" href="#">
            //             Pricing
            //           </a>
            //         </div>
            //         {/* Right navigation */}
            //         {/* <div className="navbar-nav ms-lg-4">
            //     <a className="nav-item nav-link"  >
            //       Sign in
            //     </a>
            //   </div> */}
            //         {/* Action */}
            //         <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
            //           <a href='/login'><button className="btn btn-sm btn-primary w-full w-lg-auto">Sign Up

            //           </button></a>


            //           {/* Button trigger modal */}

            //           {/* Modal */}

            //           {/* <div
            //         className="modal fade"
            //         id="staticBackdrop"
            //         tabIndex={-1}
            //         aria-labelledby="exampleModalLabel"
            //         aria-hidden="true"
            //       >
            //         <div className="modal-dialog modal-dialog-centered" style={{zIndex:10}}>
            //           <div className="modal-content">
            //             <div className="modal-header">
            //               <h1 className="modal-title fs-5" id="exampleModalLabel">
            //                 Modal title
            //               </h1>
            //               <button
            //                 type="button"
            //                 className="btn-close"
            //                 data-bs-dismiss="modal"
            //                 aria-label="Close"
            //               />
            //             </div>
            //             <div className="modal-body">...</div>
            //             <div className="modal-footer">
            //               <button
            //                 type="button"
            //                 className="btn btn-secondary"
            //                 data-bs-dismiss="modal"
            //               >
            //                 Close
            //               </button>
            //               <button type="button" className="btn btn-primary">
            //                 Save changes
            //               </button>
            //             </div>
            //           </div>
            //         </div>
            //       </div>
            //     */}

            //         </div>
            //       </div>
            //     </div>
            //   </nav >
      }
    </>
  )
}

export default Navbar