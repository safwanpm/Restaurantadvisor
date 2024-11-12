import React, { useEffect, useState } from "react";
import "./Bg_kannur.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Bg_kannur() {
  const [Hotels, setHotels] = useState([]);
  const { district } = useParams([]);
  console.log(Hotels);
  const itemId = localStorage.getItem("hotel_id");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/save/view-district/${district}`)
      .then((response) => {
        setHotels(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [district]);

  return (
    <>
      <div className="container" id="bg-kan-div">
        <div className="row ">
         
            <h1 className="text-center text-dark mt-10">Top Restaurants in {district}</h1>
            
           
          <br />
          <br />

          {Hotels.filter(hotel => hotel.status === 1).map((data, key) => (
            <div className="col-lg-3 mt-10 ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`/uploads/${data.logo}`}
                  className="card-img-top images2"
                  alt="..."
                  id="bg-knr-img"
                />
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">
                    <Link to={`/user/viewHotel/${data.hotelId}`} >
                      Show More
                    </Link>
                  </p>
                  {/* <a href="" className="btn btn-warning">
Delete
</a> */}
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col-lg-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/randhal.jpg" className="card-img-top images2" alt="..." id='bg-knr-img' />
                            <div className="card-body">
                                <h5 className="card-title" >RANDHAL Restaurant</h5>
                                <p className="card-text"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                                    <a href="/user/review" value='' >
                                        Show More
                                    </a></p>
                                <a href="" className="btn btn-warning">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/thakkaram.jpg" className="card-img-top images2" alt="..." id='bg-knr-img' />
                            <div className="card-body">
                                <h5 className="card-title" >Thakkaram Restaurant</h5>
                                <p className="card-text"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                                    <a href="/user/review" value='' >
                                        Show More
                                    </a></p>
                                <a href="" className="btn btn-warning">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/sufi.jpg" className="card-img-top images2" alt="..." id='bg-knr-img' />
                            <div className="card-body">
                                <h5 className="card-title" >Sufi-Makhan Restaurant</h5>
                                <p className="card-text"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                                    <a href="/user/review" value='' >
                                        Show More
                                    </a></p>
                                <a href="" className="btn btn-warning">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div> */}
          <br />
        </div>
      </div>
    </>
  );
}

export default Bg_kannur;
