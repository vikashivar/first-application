import React from "react";
import { Link } from "react-router-dom";

function Invest() {
  return (
    <div style={{ marginTop: "6rem" }}>
      <div
        className="d-flex flex-column justify-content-center align-items-center "
        style={{
          // width: "71rem",
          height: "20.625rem",
          background:
            " linear-gradient(to left, rgba(193, 241, 238, 1), rgba(241, 244, 255, 1))",
          margin: "0rem 6rem",
          borderRadius: "20px",
        }}
      >
        <div
          className="mt-5 investfont"
          style={{
            color: "black",
            textAlign: "center",
            fontFamily: "Geomanist,sans-serif",
            lineHeight: "3.75rem",
          }}
        >
          <span style={{ color: "#505BE8", fontWeight: "700" }}>Invest</span> in
          the Verified Network and earn{" "}
          <div className="d-lg-block d-inline">a revenue share</div>
        </div>
        <div
          style={{
            borderRadius: "33px",
            background: "#4e59e7",
            borderRadius: "20px",
            boxShadow: "0px 20px 50px 0px rgba(78, 89, 231, 0.30)",
          }}
          className="d-flex justify-content-center align-items-center my-5 investbutton"
        >
          <Link
            style={{
              color: "#FFF",
              fontFize: "1.5rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "1.875rem",
              textDecoration: "none",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Invest;
