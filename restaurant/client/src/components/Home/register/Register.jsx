import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {







  const navigate = useNavigate();


  const [data, setdata] = useState({
    name: "",
    password: "",
    email: "",
    district: ""
  })
  console.log(data);


  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata({ ...data, [name]: value })
  }
  const validate = (values) => {

    var error = {}
    if (!values.name) {
      error.name = "Enter name"
    }

    if (!values.email) {
      error.email = "Enter email"
    }
    if (!values.password) {
      error.password = "Enter password"
    }
    if (!values.district) {
      error.district = "Select district"
    }
    return error
  }



  const validation = (e) => {
    e.preventDefault();
    setFormErrors(validate(data))
    setIsSubmit(true)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:4000/save/save-restaurant', data)
        .then((res) => {
          navigate('/login');
          console.log("res", res);
          toast.success(res.data.message)
          window.location.reload();
        })
        .catch(err => {
          console.log(err);
          toast.error(err.response.data.message)
        })
    }
  }







  return (
    <>
      {/* Button trigger modal */}
      <button id='reg-btn-u'
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Hotel
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Hotel
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-start"><form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Restaurant name
                </label>
                <input
                  onChange={setRegister}
                  onClick={() => { setFormErrors({ ...formErrors, name: "" }) }}
                  type="text"
                  name='name'
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span className='validSpan' style={{ color: formErrors.name ? "red" : "" }}> {formErrors.name} </span>
                <div id="emailHelp" className="form-text">
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  onChange={setRegister}
                  onClick={() => { setFormErrors({ ...formErrors, email: "" }) }}
                  type="email"
                  name='email'
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span className='validSpan'style={{ color: formErrors.email ? "red" : "" }}> {formErrors.email} </span>
              </div>



              <div className="mb-3">
                
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Select District
                </label>
                <select
                  onChange={setRegister}
                  onClick={() => { setFormErrors({ ...formErrors, district: "" }) }}
                  type="text"
                  name='district'
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                >
                <option value=''>select</option>
                <option value='Alappuzha'>Alappuzha</option>
                <option value='Ernakulam'>Ernakulam</option>
                <option value='Kozhikode'>Kozhikode</option>
                <option value='Palakkad'>Palakkad</option>
                <option value='Kollam'>Kollam</option>
                <option value='Kannur'>Kannur</option>
                <option value='Kasaragod'>Kasaragod</option>
                <option value='Idukki'>Idukki</option>
                <option value='Kottayam'>Kottayam</option>
                <option value='Thrissur'>Thrissur</option>
                <option value='Pathanamthitta'>Pathanamthitta</option>
                <option value='Malappuram'>Malappuram</option>
                <option value='Wayanad'>Wayanad</option>
                <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
                </select>
                
                <span className='validSpan' style={{ color: formErrors.district ? "red" : "" }}> {formErrors.district} </span>
              </div>



              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  onChange={setRegister}
                  onClick={() => { setFormErrors({ ...formErrors, password: "" }) }}
                  type="password"
                  name='password'
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <span className='validSpan'style={{ color: formErrors.password ? "red" : "" }}> {formErrors.password} </span>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  District
                </label>
                <input
                  onChange={setRegister}
                  onClick={() => { setFormErrors({ ...formErrors, district: "" }) }}
                  type="text"
                  name='district'
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <span style={{ color: formErrors.district ? "red" : "" }}> {formErrors.district} </span>
              </div> */}

              {/* <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Select District
                </label>

                <select className="dropdown-item">

                  Select District
                  <option
                    name='kannur'
                  >
                    Kannur
                  </option>
                  <option name='calicut'
                  >
                    Calicut
                  </option>
                </select>
              </div> */}



              {/* <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  District
                </label>
                <input
                  onChange={setRegister}
                  onClick={() => { setFormErrors({ ...formErrors, district: "" }) }}
                  type="radio"
                  name='district'
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <span style={{ color: formErrors.dis ? "red" : "" }}> {formErrors.district} </span>
              </div> */}
            </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" onClick={validation} className="btn btn-primary">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Register