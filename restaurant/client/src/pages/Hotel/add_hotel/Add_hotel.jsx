import React, { useEffect } from 'react'
import './Add_hotel.css'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../../components/User/navbar/Navbar'
function Add_hotel() {

    const id = localStorage.getItem('hotel_id')

    const [file, setfile] = useState('')
    console.log(file);



    const [district, setdistrict] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/save/view-district')
            .then((res) => {
                console.log(res);
                setdistrict(res.data.data)

            })
            .catch((err) => {
                console.log('Error in POST request:', err);
            });
    }, [])
    console.log(district);



    const navigate = useNavigate();
    const [data, setdata] = useState({
        name: "",
        hotelId: id,
        district: "",
        email: "",
        place: "",
        pin: "",
        time: "",
        phone: "",
        special: "",
        meals: "",
        features: "",
        logo: "",
        // image1: "",
        // image2: "",
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
        if (!values.hotelId) {
            error.hotelId = ""
        }


        if (!values.district) {
            error.district = "select district"
        }
        if (!values.email) {
            error.email = "Enter email"
        }
        if (!values.place) {
            error.place = "Enter place"
        }
        if (!values.pin) {
            error.pin = "Enter pin"
        }
        if (!values.time) {
            error.time = "Enter time"
        }
        if (!values.phone) {
            error.phone = "Enter phone"
        }
        if (!values.special) {
            error.special = "Enter special diets"
        }
        if (!values.meals) {
            error.meals = "Enter meals"
        }
        if (!values.features) {
            error.features = "Enter features"
        }
        if (!values.logo) {
            error.logo = "Enter logo"
        }
        // if (!values.features) {
        //     error.image1 = "Enter image"
        // }
        // if (!values.features) {
        //     error.image2 = "Enter image"
        // }
        return error
    }





    const validation = (e) => {
        e.preventDefault();
        setFormErrors(validate(data))
        setIsSubmit(true)



        if (Object.keys(formErrors).length === 0 && isSubmit) {

            // if (file) {
            //     const data = new FormData()
            //     const filename = file.name
            //     data.append('file', file)
            //     data.append('name', filename)

            //     axios.post('http://localhost:4000/save/upload', data)
            //         .then((res) => {
            //             console.log(res);

            //         })
            //         .catch((err) => {
            //             console.log('Error in POST request:', err);
            //         });
            // }

            axios.post('http://localhost:4000/save/save-hotel', data)
                .then((res) => {
                    console.log('Response from POST request:', res);
                    navigate('/hotel/hotel_details')
                })
                .catch((err) => {
                    console.log('Error in POST request:', err);
                });
        }



    }











    return (<>
        <Navbar />
        <div className='container'>
            <div className='row' id='log-div0'>

                <div className='col-lg-12' id='log-div1'>
                    <form onSubmit={validation}>
                        <h2>Add Restaurant Details</h2> <br />
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Restaurant Name
                            </label>
                            <input
                                name='name'
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, name: "" }) }}
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <span style={{ color: formErrors.name ? "red" : "" }}> {formErrors.name} </span>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Select District
                            </label>
                            <select
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, district: "" }); }}
                                type="text"
                                name='district'
                                className="form-control"
                                id="exampleInputPassword1"
                            >


                                <option  value=''>select</option>
                                {district.map((district, key) => (
                                    <option 
                                        value={district._id}>
                                            {district.district} 
                                    </option>
                                ))}
                            </select>

                            {/* <select>
                            <option value=''>select</option>
                            {district.map(())}
                            <option value='Alappuzha'>Alappuzha</option>
                           
                        </select> */}
                            <span style={{ color: formErrors.district ? "red" : "" }}> {formErrors.district} </span>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email
                            </label>
                            <input
                                name='email'
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, email: "" }) }}
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <span style={{ color: formErrors.email ? "red" : "" }}> {formErrors.email} </span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Place
                            </label>
                            <input
                                type="text"
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, place: "" }) }}
                                name='place'
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <span style={{ color: formErrors.place ? "red" : "" }}> {formErrors.place} </span>
                            <div id="emailHelp" className="form-text">
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Pin no
                            </label>
                            <input
                                type="text"
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, pin: "" }) }}
                                name='pin'
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <span style={{ color: formErrors.pin ? "red" : "" }}> {formErrors.pin} </span>
                            <div id="emailHelp" className="form-text">
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Working time
                            </label>
                            <input
                                type="text"
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, time: "" }) }}
                                name='time'
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <span style={{ color: formErrors.time ? "red" : "" }}> {formErrors.time} </span>
                            <div id="emailHelp" className="form-text">
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Phone no
                            </label>
                            <input
                                type="text"
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, phone: "" }) }}
                                name='phone'
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <span style={{ color: formErrors.phone ? "red" : "" }}> {formErrors.phone} </span>
                            <div id="emailHelp" className="form-text">
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Special diets
                            </label>
                            <input
                                type="text"
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, special: "" }) }}
                                name='special'
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <span style={{ color: formErrors.special ? "red" : "" }}> {formErrors.special} </span>
                            <div id="emailHelp" className="form-text">
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Meals
                            </label>
                            <input
                                type="text"
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, meals: "" }) }}
                                name='meals'
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <span style={{ color: formErrors.meals ? "red" : "" }}> {formErrors.meals} </span>
                            <div id="emailHelp" className="form-text">
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Features
                            </label>
                            <input
                                type="text"
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, features: "" }) }}
                                name='features'
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <span style={{ color: formErrors.features ? "red" : "" }}> {formErrors.features} </span>
                            <div id="emailHelp" className="form-text">
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Restaurant Logo
                            </label>
                            <input className="form-control"
                                name='logo'
                                // onChange={(e) => { console.log(e.target.files[0]); setfile(e.target.files[0]); setdata({ ...data, logo: e.target.files[0].name }) }}
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, logo: "" }) }}
                                type="file" id="formFile" />
                            <span style={{ color: formErrors.logo ? "red" : "" }}> {formErrors.logo} </span>
                        </div>

                        {/* <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Images
                            </label>
                            <input className="form-control"
                                name='image1'
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, image1: "" }) }}
                                type="file" id="formFile" />
                            <span style={{ color: formErrors.image1 ? "red" : "" }}> {formErrors.image1} </span>

                        </div>
                        <div className="mb-3">
                            <input className="form-control"
                                name='image2'
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, image2: "" }) }}
                                type="file" id="formFile" />
                            <span style={{ color: formErrors.image2 ? "red" : "" }}> {formErrors.image2} </span>


                        </div> */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
                            </label>
                        </div>
                        <button type="submit" onClick={validation} className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default Add_hotel