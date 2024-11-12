import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Admin_bg() {
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/view-hotels")
      .then((res) => {
        console.log("response view hotel", res);
        setDetails(res.data.data);
      })
      .catch((err) => {
        console.log("catch error", err);
      });
  }, []);

  const deleteProduct = (hotelId) => {
    axios
      .post("http://localhost:4000/admin/delete", { hotelId })
      .then((res) => {
        console.log(res);
        window.location.reload();
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  };

  const UpdateHotels = (hotelId, status) => {
    axios
      .put("http://localhost:4000/admin/update-hotel", { hotelId, status })
      .then((res) => {
        console.log(res);
        window.location.reload();
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {Details.map((data, key) => (
              <div className="col-lg-3" key={key}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={`/uploads/${data.logo}`}
                    className="card-img-top images2"
                    alt="..."
                    id="bg-knr-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {data.name}{" "}
                      <Link to={`/viewHotel/${data.hotelId}`}>See More</Link>
                    </h5>

                    <p className="d-flex justify-content-between">
                      {data.status === 0 ? (
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            UpdateHotels(data.hotelId, data.status)
                          }
                        >
                          Accept
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={() =>
                            UpdateHotels(data.hotelId, data.status)
                          }
                        >
                          Accepted
                        </button>
                      )}

                      <button
                        className="btn btn-danger "
                        onClick={() => deleteProduct(data.hotelId)}
                      >
                        Delete
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin_bg;
