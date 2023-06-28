import React from "react";
import { Link } from "react-router-dom";
import sp22 from "./picture/sp22.png";
import sp20 from "./picture/sp20.png";

export default function Section12(props) {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-around card3"
        style={{
          borderRadius: "20px",
          border: "3px solid #fff",
          background: "rgb(255,255,255)",
          boxShadow: "0px 2px 14px 0px rgba(0,0,0,0.1)",
          padding: "0rem 1.75rem",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "6.79rem",
            height: "2.25rem",
            borderRadius: "30px",
            background: "#dce2ff",
          }}
        >
          <div>{props.date}</div>
        </div>
        <div
          style={{
            color: "#000",
            fontSize: "1.5rem",
            lineHeight: "1.875rem",
            textTransform: "lowercase",
            fontFamily: "Geomanist,sans-serif",
          }}
        >
          {props.title}
        </div>

        <div
          style={{
            color: " #4B4B4B",
            fontSize: "1.125rem",
            fontFamily: "Geomanist,sans-serif",
            lineHeight: "1.875rem",
          }}
        >
          {props.dek}
        </div>

        <div>
          <Link
            style={{
              color: "#4E59E7",
              fontSize: "1.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "1.625rem",
            }}
          >
            {" "}
            Rede More
          </Link>
          <img
            src={sp22}
            alt=""
            style={{ width: "0.93rem", height: "0.72rem", marginLeft: "14px" }}
          />
        </div>
      </div>
    </>
  );
}
