import React from "react";
import image from "./picture/Verified12.png";
import Header1con from "./header1con";
import Section1 from "./section1";
import { Link } from "react-router-dom";

function Header(props) {
  const list = {
    color: "#393939",
    fontSize: "1rem",
    fontFamily: "Geomanist,sans-serif",
  };
  return (
    <div
      style={{ display: window.location.pathname == "/" ? "block" : "none" }}
    >
      <div className="position-relative overflow-x-hidden">
        <div
          className="position-absolute headerback"
          style={{
            marginTop: "-112px",
            transform: "skew(0deg,-3deg",
            background: props.homeindex,

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
                  background: props.login,
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
        <Header1con></Header1con>
      </div>
    </div>
  );
}

export default Header;
