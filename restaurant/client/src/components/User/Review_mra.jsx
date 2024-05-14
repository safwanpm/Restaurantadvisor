import React, { useEffect, useState } from "react";
import "./Review_mra.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Review_mra() {

  const role= localStorage.getItem('role')
  const { id } = useParams();
  const userId = localStorage.getItem("User_id");
  const username = localStorage.getItem("username");
  const [RDetails, setRDetails] = useState();
  const [value, setValue] = useState(null);
  const [description, setDescription] = useState("");
  const [atmvalue, setatmvalue] = useState(null);
  const [servalue, setservalue] = useState(null);
  const [qltvalue, setqltvalue] = useState(null);
  const [clnvalue, setclnvalue] = useState(null);
  const [data, setdata] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/save/view-review/${id}`)
      .then((res) => {
        console.log(res.data); // Log the entire response object
        const reviewData = res.data.data; // Check the structure and adjust accordingly
        if (reviewData && reviewData.review) {
          setRDetails(reviewData.review);
          setatmvalue(RDetails.atmvalue); 
          console.log(reviewData.review); 
          console.log(RDetails.atmvalue); 
        } else {
          // Handle if the expected data is not available
          console.error("Unexpected response format:", reviewData);
        }
      })
      .catch((err) => {
        console.log("Error in GET request:", err);
      });
  }, [id]);

  var sumatmrating = 0,
    sumserrating = 0,
    sumqltrating = 0,
    sumclnrating = 0,
    sumrating = 0,
    totalReview = 0;

  if (RDetails) {
    RDetails.forEach((data) => {
      sumatmrating += data.atmrating;
      sumserrating += data.serrating;
      sumqltrating += data.qltrating;
      sumclnrating += data.clnrating;
      sumrating += data.rating;
      totalReview = RDetails.length;
    });

    var averageatmRating = Math.round(sumatmrating / totalReview);
    var averageclnRating = Math.round(sumclnrating / totalReview);
    var averageserRating = Math.round(sumserrating / totalReview);
    var averageqltRating = Math.round(sumqltrating / totalReview);
    var averagerating = Math.round(sumrating / totalReview);
  }

  console.log(totalReview);
  console.log(sumatmrating);
  console.log(averageclnRating);
  console.log(averageclnRating);

  const addReview = (e) => {
    e.preventDefault();
    const data = {
      userId: userId,
      username: username,
      hotelId: id,
      rating: value,
      atmrating: atmvalue,
      serrating: servalue,
      qltrating: qltvalue,
      clnrating: clnvalue,
      description: description,
    };

    axios
      .post(`http://localhost:4000/save/add-review/${id}`, data)
      .then((res) => {
        window.location.reload();
        console.log(res);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log("error ", err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-8 col-sm-10 col-xs-12 bg-light maindiv00"
            id="bg-mra-div21"
          >
            <h4 className="text-left">Reviews & Ratings</h4>
            <br />
            <Rating name="read-only"value={`${averagerating}`} readOnly /><p>({`${totalReview}`})</p>
          
            
            <hr className="text-dark" />
            <div className="col p-5 rbox">
              {RDetails &&
                RDetails.map((data, index) => (
                  <div className="col p-5 " key={index}>
                    <div>
                      <h5>{data.username}</h5>
                      <label>{data.description}</label>
                      <p className="date">{data.date}</p>
                    </div>
                    <div></div>
                  </div>
                ))}
            </div>
            <div className="rat">
              <label className="form-check-label mt-5" htmlFor="exampleRadios1">
                Atmosphere
              </label>
              <Rating name="read-only"className="raing mt-5"  value={`${averageatmRating}`} readOnly />
            </div>
            <div className="rat">
              <label className="form-check-label mt-5" htmlFor="exampleRadios1">
                Cleanliness
              </label>
              <Rating name="read-only"className="raing mt-5"  value={`${averageclnRating}`} readOnly />
            </div>
            <div className="rat">
              <label className="form-check-label mt-5" htmlFor="exampleRadios1">
                Service
              </label>
              <Rating name="read-only" className="raing mt-5" value={`${averageserRating}`} readOnly />
            </div>
            <div className="rat">
              <label className="form-check-label mt-5" htmlFor="exampleRadios1">
                Food Quality
              </label>
              <Rating name="read-only"className="raing mt-5"  value={`${averageqltRating}`} readOnly />
            </div>
            <p></p>
          </div>
          {role==1 ?<div
            className="col-lg-6 col-md-8 col-sm-10 col-xs-12 bg-light"
            id="bg-mra-div21"
          >
            <h4 className="text-left">Write A Review</h4>
            <br />
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="form-control textreview"
              name="description"
            ></textarea>
            <div className="rat">
              <label className="form-check-label mt-5" htmlFor="exampleRadios1">
                Atmosphere
              </label>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend"></Typography>
                <Rating
                  name="atmrating"
                  value={atmvalue}
                  onChange={(event, newValue) => {
                    setatmvalue(newValue);
                  }}
                />
              </Box>
            </div>
            <div className="rat">
              <label className="form-check-label mt-5" htmlFor="exampleRadios1">
                Cleanliness
              </label>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend"></Typography>
                <Rating
                  name="clnrating"
                  value={clnvalue}
                  onChange={(event, newValue) => {
                    setclnvalue(newValue);
                  }}
                />
              </Box>
            </div>
            <div className="rat">
              <label className="form-check-label mt-5" htmlFor="exampleRadios1">
                Service
              </label>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend"></Typography>
                <Rating
                  name="serrating"
                  value={servalue}
                  onChange={(event, newValue) => {
                    setservalue(newValue);
                  }}
                />
              </Box>
            </div>
            <div className="rat">
              <label className="form-check-label mt-5" htmlFor="exampleRadios1">
                Food Quality
              </label>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend"></Typography>
                <Rating
                  name="qltrating"
                  value={qltvalue}
                  onChange={(event, newValue) => {
                    setqltvalue(newValue);
                  }}
                />
              </Box>
            </div>
            <div className="rat">
              <label className="form-check-label mt-5" htmlFor="exampleRadios1">
                Overall Review
              </label>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend"></Typography>
                <Rating
                  name="rating"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </div>
            <button
              id="rev-mra-btn"
              className="btn btn-sm btn-primary mt-2"
              onClick={addReview}
            >
              Submit
            </button>
            <br />
            <p></p>
          </div>:null}
        </div>
      </div>
    </>
  );
}

export default Review_mra;
