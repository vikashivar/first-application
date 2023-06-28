import React from "react";
import img1 from "./img1.png";
import img2 from "./img2.png";
import { Link } from "react-router-dom";
import image from "../setCom/picture/Verified12.png";
function Individuals() {
  return (
    <>
      <div style={{}}>
        <div className="position-relative ">
          <div
            className="position-absolute headerback"
            style={{
              marginTop: "-112px",
              transform: "skew(0deg,-3deg",
              background:
                "linear-gradient(282.31deg, #DCD7FF -0.39%, #F5F1FF 91.93%, rgba(217, 199, 255, 0) 106.75%)",
              width: "110%",
            }}
          ></div>
          <div
            className="d-flex  flex-md-row flex-column justify-content-between position-relative align-items-center  "
            style={{
              marginTop: "2 rem",
              margin: "1.5rem 6rem",
            }}
          >
            <div>
              <img
                src={image}
                alt=""
                style={{ width: "10.5625rem", height: "2.5rem" }}
              />
            </div>
            <ul
              className="d-flex mb-0 align-items-center flex-sm-nowrap flex-wrap"
              style={{ listStyle: "none" }}
            >
              <li className="me-sm-4 ms-sm-0 ms-4 mt-sm-0  mt-2" style={{}}>
                <Link to="/Individuals">Individuals</Link>
              </li>
              <li className="me-sm-4 ms-sm-0 ms-4 mt-sm-0  mt-2" style={{}}>
                <Link to="/Businesses">Businesses </Link>
              </li>
              <li className="me-sm-4 ms-sm-0 ms-4 mt-sm-0  mt-2" style={{}}>
                <Link to="/Supperproviders"> Supper Providers</Link>
              </li>
              <Link>
                <li
                  className="d-flex justify-content-around align-items-center  mt-sm-0  mt-2 ms-md-0  ms-4 "
                  style={{
                    color: " #FFF",

                    fontSize: "1.125rem",
                    fontFamily: "Geomanist,sans-serif",
                    borderRadius: "23px",
                    background: "rgba(57, 57, 57, 1)",
                    boxShadow: "0px 20px 50px 0px rgba(78, 89, 231, 0.30)",
                    width: "8.75rem",
                    height: "2.875rem",
                  }}
                >
                  Login
                </li>
              </Link>
            </ul>
          </div>
          <div
            className="position-relative d-flex flex-column justify-content-between align-items-center"
            style={{ height: "28rem" }}
          >
            <div className="anew mt-5">A New Era of Finance.</div>
            <div className="built">
              Built for the
              <span>New Age Investor.</span>
            </div>
            <div className="verified">
              Verified makes it easier than it's ever been to access assets with
              high performing returns.
            </div>
            <div className="create">Create your Verified account today</div>
            <div className="d-flex">
              <div className="imgplay me-3 d-flex justify-content-center align-items-center">
                {" "}
                <img src={img1} alt="" />
              </div>
              <div className="imgplay">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Individuals;
