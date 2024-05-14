import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Bg_mra.css";
function Bg_mra() {
  const [item, setItem] = useState({});

  console.log(item);
  const itemId = localStorage.getItem("hotel_id");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/save/view-hotel/${itemId}`)
      .then((res) => {
        console.log("response view hotel", res);
        setItem(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {item.status === 1 ? (
        <>
          <div className="container" id="mra-container-1">
            <div className="row">
              <div className="col" id="bg-mra-div1">
                <img src={`/uploads/${item.logo}`} id="logo" alt="Logo" />
                <h1 id="bg-mra-head1">{item.name}</h1>
                <br></br>
              </div>

              <div className="" id="bg-mra-div2">
                <p>
                  Indian ,Asian ,VegetarianFriendly
                  <br /> |<i class="bi bi-geo-alt-fill"></i> {item.place}{" "}
                  {item.district}|<i class="bi bi-telephone"></i> India+91
                  {item.phone}| <i class="bi bi-laptop"></i>Website |{" "}
                  <i class="bi bi-clock"></i> +{item.time}
                </p>
              </div>
            </div>
          </div>
          <div className="container" id="mra-container-1">
            <div className="row" id="bg-mra-img-div">
              <div className="col-lg-12 ">
                <div className="container text-center">
                  <div className="row">
                    <div className="row">
                      {item.images &&
                        item.images.map((image, index) => (
                          <div className="col p-5" key={index}>
                            {/* <img
                          className="img-fluid"
                          alt={`Image ${index }`}
                          src={`/uploads/${image}`}
                        /> */}
                            <img
                              src={`/uploads/${item.images[index]}`}
                              className="img-fluid "
                              id="uploadimages"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" id="mra-container-2">
            <div className="row" id="bg-mra-div2">  
            <div className="col-lg-6 bg-light" id="bg-mra-div21">
                <h4 className="text-center">Details</h4> <br />
                <p>CUISINES</p>
                <p>Indian, Asian</p> <br />
                <p>SPECIAL DIETS</p>
                <p>{item.special}</p> <br />
                <p>MEALS</p>
                <p>{item.meals}</p> <br />
                <p>FEATURES</p>
                <p>{item.features}</p>
              </div>

              <div className="col-lg-6 bg-light" id="bg-mra-div21">
                <h4 className="text-center">Location Details</h4>
                <br />

                <p>
                  <i class="bi bi-geo-alt-fill"></i> {item.place}, {item.distrt}{" "}
                  {item.pin}{" "}
                </p>
                <br />
                <p>
                  {" "}
                  <i class="bi bi-telephone"></i> India+91 {item.phone}
                </p>
                <br />
                <p>
                  <i class="bi bi-laptop"></i>Website{" "}
                </p>
              </div>
            </div>
          </div>
        </>
      ):item.status === 0 ?(
        <>
        <div className="container">
          <div className="row p-5 m-5">
              <h1 className="text-center">Admin will accept Soon</h1>
          </div>
          </div></>
      ):(
        <>
        <div className="container">
          <div className="row p-5 m-5">
              <h1 className="text-center">Add Details</h1>
          </div>
          </div></>
      )}
      
    </>
  );
}

export default Bg_mra;
