import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import Loginpg from '../../../pages/login/Loginpg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {


  









  // const [data, setdata] = useState({})
  // console.log(data);
  // const setRegister = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setdata({ ...data, [name]: value })
  // }

  // const submit = (event) => {
  //   event.preventDefault()
  //   axios.post('http://localhost:4000/save/save-login', data).then((res) => {
  //     console.log("res", res);
  //     window.location.reload();
  //   })


  // }

  const navigate = useNavigate();
  const [contacts, setContacts] = useState({
    username: "",
    password: ""

  })

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContacts({ ...contacts, [name]: value })
  }

  const validate = (values) => {

    var error = {}
    if (!values.name) {
      error.name = "Enter username"
    }
    if (!values.password) {
      error.password = "Enter password"
    }
    return error
  }

  const validation = (e) => {
    e.preventDefault();
    setFormErrors(validate(contacts))
    setIsSubmit(true)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:4000/save/save-login', contacts)
        .then((res) => {
          console.log('response', res);
          if (res.data.role == 0) {
            localStorage.setItem('role', res.data.role);
            localStorage.setItem('User_id', res.data.user_id);
            localStorage.setItem('username', res.data.username);
            navigate('/admin')
            toast.success(res.data.message)
          }
          if (res.data.role == 1) {
            localStorage.setItem('role', res.data.role);
            localStorage.setItem('User_id', res.data.user_id);
            localStorage.setItem('username', res.data.username);
            navigate('/user')
            toast.success(res.data.message)
          }
          if (res.data.role == 2) {
            localStorage.setItem('role', res.data.role);
            localStorage.setItem('hotel_id', res.data.hotel_id);
            navigate('/hotel')
            toast.success(res.data.message)
          }
        })
        .catch(err => {
          console.log('error', err);
          toast.error(err.response.data.message)
        })
    }

  }
  return (
    <>
      <div className='container'>
        <div className='row' id='log-div0'>
          <div className='col-lg-4'></div>
          <div className='col-lg-4' id='log-div1'>
            <form onSubmit={validation}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  onChange={handleInputChange}
                  onClick={() => { setFormErrors({ ...formErrors, username: "" }) }}

                  type="text"
                  name='name'
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.name ? "red" : "" }}> {formErrors.name} </span>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  onChange={handleInputChange}
                  onClick={() => { setFormErrors({ ...formErrors, password: "" }) }}
                  type="password"

                  name='password'
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <span style={{ color: formErrors.password ? "red" : "" }}> {formErrors.password} </span>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary" id='log-btn'>
                Submit
              </button>
            </form>
          </div>
          <div className='col-lg-4'></div>
        </div>
      </div>
    </>
  )
}

export default Login