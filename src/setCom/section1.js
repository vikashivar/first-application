import React from "react";
import sp1 from "./picture/Group 161.png";
import sp2 from "./picture/info_1_a39178e895 (1).png";
import sp3 from "./picture/Group.svg";

function Section1() {
  return (
    <div
      className="d-flex justify-content-between "
      style={{ margin: "6rem 6rem 0rem 6rem" }}
    >
      <div>
        <div>
          <div
            style={{
              color: "#393939",
              fontSize: "3.125rem",
              fontFamily: "Geomanist,sans-serif",
              width: "34.125rem",
            }}
          >
            Access to choice in global finance is limited
          </div>
          <div
            style={{
              color: "#4E59E7",
              fontSize: "50px",
              fontFamily: "Geomanist,sans-serif",
              fontWeight: 700,
            }}
          >
            Not anymore.
          </div>
        </div>
        <div style={{ marginTop: "7rem" }}>
          <img
            src={sp2}
            style={{ width: "25.375rem", height: "30.75rem" }}
            alt=""
          />
        </div>
      </div>
      <div className="mt-5" style={{}}>
        <div
          style={{
            width: "4.5rem",
            height: "0.5rem",
            borderRadius: "8px",
            background: "#4e59e7",
            marginLeft: "7rem",
          }}
        ></div>
        <div
          className="mt-5"
          style={{
            color: "#8F8F98",
            fontSize: "1.125rem",
            fontFamily: "Geomanist,sans-serif",
            lineHeight: "1.875rem",
            paddingLeft: "7rem",
          }}
        >
          Banks lock you in a silo when they offer their accounts, payments,
          cards, insurance and loans products without access to choice of
          products by other financial service providers. Not any more.
        </div>
        <div style={{ marginTop: "10rem" }}>
          <img
            src={sp1}
            style={{ width: "4.812rem", height: "4.734rem" }}
          ></img>

          <div
            className="mt-5"
            style={{
              color: "rgba(142, 95, 245, 1)",
              fontSize: "2.5rem",
              fontFamily: "Geomanist,sans-serif",
              fontWeight: "600",
            }}
          >
            <span style={{ color: "#393939", fontWeight: "400" }}>For </span>
            Indivisuals
          </div>
          <div
            style={{
              color: "#393939",
              fontSize: "1.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "1.875rem",
            }}
          >
            Choose how you pay, invest and trade
          </div>
          <div
            className="mt-5 pe-5"
            style={{
              color: "#8F8F98",
              fontSize: "1.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "1.875rem",
            }}
          >
            Individuals can set up accounts on the Verified Network for keeping
            assets, make payments in multiple currencies, invest and trade
            digital assets.
          </div>
        </div>
        <div className="mt-5">
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#8E5FF5",
              fontSize: "1.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "1.625rem",
            }}
          >
            Learn More
            <img
              src={sp3}
              style={{
                width: "0.93rem",
                height: "0.72rem",
                marginLeft: "0.55rem",
              }}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section1;
