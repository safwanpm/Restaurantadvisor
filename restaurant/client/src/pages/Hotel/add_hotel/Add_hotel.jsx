import React, { useEffect } from "react";
import "./Add_hotel.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/User/navbar/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add_hotel() {
  const id = localStorage.getItem("hotel_id");
  console.log("id=", id);
  const [files, setFiles] = useState([]);
  const [logo, setlogo] = useState();
  const [hDetails, sethDetails] = useState([]);

  console.log(files);
  console.log(logo);

  const [district, setdistrict] = useState([]);
  useEffect(() => {
    console.log("hjbad", id);
    axios
      .get(`http://localhost:4000/save/view-hoteldetails?id=${id}`)
      .then((res) => {
        console.log(res);
        sethDetails(res.data.data);
      })
      .catch((err) => {
        console.log("Error in GET request:", err);
      });
  }, [id]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/save/view-district")
      .then((res) => {
        console.log(res);
        setdistrict(res.data.data);
        
      })
      .catch((err) => {
        console.log("Error in POST request:", err);
      });
  }, []);

  console.log(district);

  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: hDetails.name||"",
    hotelId: id,
    district:  hDetails.district|| "",
    email: hDetails.email||"",
    place:  hDetails.place|| "",
    pin:  hDetails.pin||"",
    time:  hDetails.time||"",
    phone:  hDetails.phone||"",
    special:  hDetails.special||"",
    meals:  hDetails.meals|| "",
    features:  hDetails.features||"",
    logo:  hDetails.logo||"",
    images: hDetails.images|| [],
  });
  console.log(data);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata({ ...data, [name]: value });
  };
  const validate = (values) => {
    var error = {};
    if (!values.name) {
      error.name = "Enter name";
    }
    if (!values.hotelId) {
      error.hotelId = "";
    }

    if (!values.district) {
      error.district = "select district";
    }
    if (!values.email) {
      error.email = "Enter email";
    }
    if (!values.place) {
      error.place = "Enter place";
    }
    if (!values.pin) {
      error.pin = "Enter pin";
    }
    if (!values.time) {
      error.time = "Enter time";
    }
    if (!values.phone) {
      error.phone = "Enter phone";
    }
    if (!values.special) {
      error.special = "Enter special diets";
    }
    if (!values.meals) {
      error.meals = "Enter meals";
    }
    if (!values.features) {
      error.features = "Enter features";
    }
    if (!values.logo) {
      error.logo = "Enter logo";
    }
    if (!values.images) {
      error.images = "Upload image";
    }

    return error;
  };

  const Updatevalidation = (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .put("http://localhost:4000/save/update-hotel", data)
        .then((res) => {
          console.log(res);
          navigate("hotel/hotel_details");
          toast.success(res.data.message);
        })
        .catch((err) => {
          console.log("error ", err);
        });
    }
  };

  const validation = (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (files.length > 0) {
        const data = new FormData();

        files.forEach((files) => {
          data.append("files", files);
        });

        axios
          .post("http://localhost:4000/save/upload-images", data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("Error in POST request:", err);
          });
      }
      if (logo) {
        const single = new FormData();

        single.append("logo", logo);

        axios
          .post("http://localhost:4000/save/upload-logo", single)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("Error in POST request:", err);
          });
      }

      axios
        .post("http://localhost:4000/save/save-hotel", data)
        .then((res) => {
          console.log("Response from POST request:", res);
          navigate("/hotel/hotel_details");
          toast(res.data.message);
        })
        .catch((err) => {
          console.log("Error in POST request:", err);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row" id="log-div0">
          <div className="col-lg-12" id="log-div1">
            <form onSubmit={validation}>
              <h2>Add Restaurant Details</h2> <br />
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Restaurant Name
                </label>
                <input
                  name="name"
                  onChange={setRegister}
                  onClick={() => {
                    setFormErrors({ ...formErrors, name: "" });
                  }}
                  type="text"
                  value={data.name || hDetails.name || ""}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.name ? "red" : "" }}>
                  {" "}
                  {formErrors.name}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Select District
                </label>
                <select
                value={data.district || hDetails.district || " "}
                  onChange={setRegister}
                  onClick={() => {
                    setFormErrors({ ...formErrors, district: "" });
                  }}
                  type="text"
                  name="district"
                  className="form-control"
                  id="exampleInputPassword1"
                >
                  <option value="">select</option>
                  {district.map((district, key) => (
                    <option value={district.district}>
                      {district.district}
                    </option>
                  ))}
                </select>

                <span style={{ color: formErrors.district ? "red" : "" }}>
                  {" "}
                  {formErrors.district}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                 value={data.email || hDetails.email || ""}
                  name="email"
                  onChange={setRegister}
                  onClick={() => {
                    setFormErrors({ ...formErrors, email: "" });
                  }}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.email ? "red" : "" }}>
                  {" "}
                  {formErrors.email}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Place
                </label>
                <input
                  value={data.place || hDetails.place || " "}
                  type="text"
                  onChange={setRegister}
                  onClick={() => {
                    setFormErrors({ ...formErrors, place: "" });
                  }}
                  name="place"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.place ? "red" : "" }}>
                  {" "}
                  {formErrors.place}{" "}
                </span>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Pin no
                </label>
                <input
                 value={data.pin || hDetails.pin || ""}
                  type="text"
                  onChange={setRegister}
                  onClick={() => {
                    setFormErrors({ ...formErrors, pin: "" });
                  }}
                  name="pin"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.pin ? "red" : "" }}>
                  {" "}
                  {formErrors.pin}{" "}
                </span>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Working time
                </label>
                <input
                  value={data.time || hDetails.time || ""}
                  type="text"
                  onChange={setRegister}
                  onClick={() => {
                    setFormErrors({ ...formErrors, time: "" });
                  }}
                  name="time"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.time ? "red" : "" }}>
                  {" "}
                  {formErrors.time}{" "}
                </span>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Phone no
                </label>
                <input
                  type="text"
                  value={data.phone || hDetails.phone || ""}
                  onChange={setRegister}
                  onClick={() => {
                    setFormErrors({ ...formErrors, phone: "" });
                  }}
                  name="phone"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.phone ? "red" : "" }}>
                  {" "}
                  {formErrors.phone}{" "}
                </span>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Special diets
                </label>
                <input
                  type="text"
                  value={data.special || hDetails.special || ""}
                  onChange={setRegister}
                  onClick={() => {
                    setFormErrors({ ...formErrors, special: "" });
                  }}
                  name="special"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.special ? "red" : "" }}>
                  {" "}
                  {formErrors.special}{" "}
                </span>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Meals
                </label>
                <input
                  value={data.meals || hDetails.meals || ""}
                  placeholder={hDetails.meals}
                  type="text"
                  onChange={setRegister}
                  onClick={() => {
                    setFormErrors({ ...formErrors, meals: "" });
                  }}
                  name="meals"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.meals ? "red" : "" }}>
                  {" "}
                  {formErrors.meals}{" "}
                </span>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Features
                </label>
                <input
                 value={data.features || hDetails.features || ""}
                  type="text"
                  onChange={setRegister}
                  onClick={() => {
                    setFormErrors({ ...formErrors, features: "" });
                  }}
                  name="features"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.features ? "red" : "" }}>
                  {" "}
                  {formErrors.features}{" "}
                </span>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Restaurant Logo
                </label>
                <input
                  className="form-control"
                  name="logo"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setlogo(e.target.files[0]);
                    setdata({ ...data, logo: e.target.files[0].name });
                  }}
                  onClick={() => {
                    setFormErrors({ ...formErrors, logo: "" });
                  }}
                  type="file"
                  id="formFile"
                />

                <span style={{ color: formErrors.logo ? "red" : "" }}>
                  {" "}
                  {formErrors.logo}{" "}
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Images
                </label>
                <input
                  className="form-control"
                  name="images"
                  multiple
                  onChange={(e) => {
                    console.log(e.target.files);
                    setFiles([...e.target.files]);
                    setdata({
                      ...data,
                      images: [...e.target.files].map((file) => file.name),
                    });
                  }}
                  onClick={() => {
                    setFormErrors({ ...formErrors, images: "" });
                  }}
                  type="file"
                  id="formFile"
                />
                <span style={{ color: formErrors.images ? "red" : "" }}>
                  {" "}
                  {formErrors.images}{" "}
                </span>
              </div>
              {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
                            </label>
                        </div> */}
              {hDetails.name != null ? (
                <button
                  type="submit"
                  onClick={Updatevalidation}
                  className="btn btn-primary"
                >
                  Update
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={validation}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add_hotel;

