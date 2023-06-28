import React from "react";
import p1 from "./picture/640px-Google_Play_Store_badge_EN 1.png";
import p2 from "./picture/App store 1.png";
import p3 from "./picture/homepage_Banner_664825f9b6.png";
import Section1 from "./section1";

function Header1con() {
  return (
    <>
      <div
        className=" position-relative flex-md-row flex-column  d-flex justify-content-md-between justify-content-center align-items-center"
        style={{
          margin: "0rem 2rem 0rem 6rem",
          marginTop: "5rem",
        }}
      >
        <div className="header11">
          <div className="">
            <div
              className=""
              style={{
                color: "#4E59E7",
                fontSize: "3.75rem",
                fontFamily: "Geomanist,sans-serif",
                fontWeight: "700",
              }}
            >
              Not a bank,
            </div>
            <div
              style={{
                color: "#393939",
                fontSize: "3.75rem",
                fontFamily: "Geomanist",
                marginTop: "-1rem",
              }}
            >
              but only better
            </div>
          </div>
          <div
            className="headerbuilt"
            style={{
              // width: "31.875rem",
              color: "#8F8F98",
              fontSize: "1.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "1.875rem",
              marginTop: "1.5rem",
              paddingRight: "2rem",
            }}
          >
            Built on a blockchain, the Verified Network offers users easy,
            secure, regulation compliant, low cost access to payments, financing
            and investments.
          </div>
          <div
            style={{
              color: "#393939",
              fontSize: "1.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "1.875rem",
              marginTop: "2.5rem",
            }}
          >
            Create your Verified account today
          </div>
          <div style={{ marginTop: "2rem" }} className="d-flex">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "10.625rem",
                height: "3.33988rem",
                borderRadius: "50px",
                background: "black",
              }}
            >
              <img
                src={p1}
                style={{ width: "8.20rem", height: "2.38rem" }}
                alt=""
                s
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "10.625rem",
                height: "3.33988rem",
                borderRadius: "50px",
                background: "black",
                marginLeft: "1.5rem",
              }}
            >
              <img
                src={p2}
                style={{
                  width: "8.20rem",
                  height: "2.38rem",
                }}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="align-self-center">
          <img
            className="headerphone img-lg-fluid"
            src={p3}
            style={{}}
            alt=""
          />
        </div>
      </div>
      <Section1></Section1>
    </>
  );
}

export default Header1con;
