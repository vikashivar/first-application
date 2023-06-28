import React from "react";
import p1 from "../setCom/picture/640px-Google_Play_Store_badge_EN 1.png";
import p2 from "../setCom/picture/App store 1.png";
import sp23 from "./sp23.png";

function Downolad(props) {
  return (
    <div
      style={{ background: props.background ? "rgba(216, 198, 255, 0.3)" : "" }}
    >
      <div
        style={{ margin: "0rem 6rem" }}
        className="d-flex flex-md-row  flex-column justify-content-md-between justify-content-center align-items-center "
      >
        <div
          style={{}}
          className=" d-md-block d-flex flex-column justify-content-center align-items-center align-self-center mt-md-5"
        >
          <div
            style={{
              color: "#000",
              fontSize: "2.5rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "3.75rem",
            }}
          >
            Download the <br></br>
            <span style={{ color: "rgb(78,89,231", fontWeight: "700" }}>
              Verified Wallet
            </span>
          </div>
          <div
            style={{
              color: "#4B4B4B",
              fontSize: "1.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineFeight: " 1.875rem",
              marginTop: "2.5rem",
            }}
          >
            Access the Verified Network with Android and iOS applications
          </div>
          <div className="d-flex" style={{ marginTop: "1rem" }}>
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
        <div className="divusd align-self-end">
          <img className="usd1" src={sp23} style={{}} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Downolad;
