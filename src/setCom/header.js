import React from "react";
import image from "./picture/Verified12.png";
import Header1con from "./header1con";
import Section1 from "./section1";

function Header(props) {
  const list = {
    color: "#393939",
    fontSize: "1rem",
    fontFamily: "Geomanist,sans-serif",
  };
  return (
    <>
      <div className="position-relative">
        <div
          className="position-absolute overflow-hidden"
          style={{
            marginTop: "-112px",
            transform: "skew(0deg,-3deg",
            height: "720px",
            background: props.homeindex,
            minWidth: "47rem",
            width: "100%",
            maxWidth: "90rem",
          }}
        ></div>
        <div
          className="d-flex justify-content-between position-relative align-items-center"
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
            className="d-flex mb-0 align-items-center"
            style={{ listStyle: "none" }}
          >
            <li className="me-4" style={list}>
              Individuals
            </li>
            <li className="me-4" style={list}>
              Businesses
            </li>
            <li className="me-4" style={list}>
              Supper Providers
            </li>
            <li
              className="d-flex justify-content-around align-items-center"
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
          </ul>
        </div>
        <Header1con />
      </div>
      <Section1 />
    </>
  );
}

export default Header;
