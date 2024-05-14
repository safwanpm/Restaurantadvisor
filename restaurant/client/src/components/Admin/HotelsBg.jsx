import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HotelsBg() {
  const [hotel, setHotel] = useState({});
  const { id } = useParams(); // Ensure the parameter matches the route

  useEffect(() => {
    // Fetch hotel details when component mounts
    axios.get(`http://localhost:4000/admin/view-hotel/${id}`)
      .then((res) => {
        console.log("Response view hotel", res);
        setHotel(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  

  return (
    <>
      <div className="container" id="mra-container-1">
        <div className="row">
          {/* <div className='col' id='bg-mra-div1'>
                        <img src={item.logo} id='logo'></img>
                        <h1 id='bg-mra-head1'>
                            {item.name}

                        </h1><br></br>
                    </div> */}
          <div className="col" id="bg-mra-div1">
            <img src={`/uploads/${hotel.logo}`} id="logo" alt="Logo" />
            <h1 id="bg-mra-head1">{hotel.name}</h1>
            <br></br>
          </div>

          <div className="" id="bg-mra-div2">
            <p>
              Indian ,Asian ,VegetarianFriendly
              <br /> |<i class="bi bi-geo-alt-fill"></i> {hotel.place}{" "}
              {hotel.district}|<i class="bi bi-telephone"></i> India+91
              {hotel.phone}| <i class="bi bi-laptop"></i>Website |{" "}
              <i class="bi bi-clock"></i> +{hotel.time}
            </p>
          </div>
        </div>
      </div>
      <div className="container" id="mra-container-1">
        <div className="row" id="bg-mra-img-div">
          <div className="col-lg-12 ">
            <div className="container text-center">
              <div className="row">
                {/* <div className="col">
                  <img className="img-fluid" alt="..." src={`/uploads/${item.images[]}`} />
                  <img src={`/uploads/${item.images}`} />
                </div>
                <div className="col">
                  <img className="img-fluid" alt="..." src={`/uploads/${item.images}`} />
                  <img src={`/uploads/${item.images}`}/>
                </div>
                <div className="col">
                  <img className="img-fluid" alt="..."src={`/uploads/${item.images}`} />
                  <img src={`/uploads/${item.images}`} />
                </div> */}

                <div className="row">
                  {hotel.images &&
                    hotel.images.map((image, index) => (
                      <div className="col p-5" key={index}>
                        {/* <img
                          className="img-fluid"
                          alt={`Image ${index }`}
                          src={`/uploads/${image}`}
                        /> */}
                        <img
                          src={`/uploads/${hotel.images[index]}`}
                          className="img-fluid"
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
          {/* <div className='col-lg-4 bg-light' id='bg-mra-div21'>
                        <h4 className='text-center'>
                            Ratings and reviews
                        </h4><br />
                        <h3><i>4   </i>     <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
                        </i> <i class="bi bi-circle-fill text-success" ></i> <i class="bi bi-circle text-success"></i> </h3>
                        <p>1234 Reviews</p><br />
                        <hr className='bg-dark'></hr>
                        <h5>Ratings</h5>
                        <br />
                        <div className='row'>
                            <div className='col'>
                                <p>Food</p>
                                <p>Service</p>
                                <p>Value</p>
                                <p>Atmosphere</p><br />
                            </div>
                            <div className='col'> */}

          {/* <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
                                </i> <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
                                </i> <i class="bi bi-circle-fill text-success"></i><br />
                                <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
                                </i> <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
                                </i> <i class="bi bi-circle text-success"></i> <br />
                                <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
                                </i> <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
                                </i> <i class="bi bi-circle text-success"></i> <br />
                                <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
                                </i> <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
                                </i> <i class="bi bi-circle text-success"></i> <br /> */}
          {/* </div>
                        </div>


                    </div> */}

          <div className="col-lg-6 bg-light" id="bg-mra-div21">
            <h4 className="text-center">Details</h4> <br />
            <p>CUISINES</p>
            <p>Indian, Asian</p> <br />
            <p>SPECIAL DIETS</p>
            <p>{hotel.special}</p> <br />
            <p>MEALS</p>
            <p>{hotel.meals}</p> <br />
            <p>FEATURES</p>
            <p>{hotel.features}</p>
          </div>

          <div className="col-lg-6 bg-light" id="bg-mra-div21">
            <h4 className="text-center">Location Details</h4>
            <br />

            <p>
              <i class="bi bi-geo-alt-fill"></i> {hotel.place}, {hotel.distrt}{" "}
              {hotel.pin}{" "}
            </p>
            <br />
            <p>
              {" "}
              <i class="bi bi-telephone"></i> India+91 {hotel.phone}
            </p>
            <br />
            <p>
              <i class="bi bi-laptop"></i>Website{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelsBg;
