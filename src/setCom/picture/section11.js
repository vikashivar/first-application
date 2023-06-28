import React from "react";

function Section11(props) {
  return (
    <div>
      <div
        style={{
          width: "18.125rem",
          height: "21.68rem",
          borderRadius: "20px",
          background: props.back,
          padding: "2.18rem",
        }}
      >
        <div
          className="justify-content-center align-items-center d-flex"
          style={{
            borderRadius: "70px",
            background: props.cback,
            boxShadow: props.scolor,
            width: " 4.375rem",
            height: "4.375rem",
          }}
        >
          <img
            src={props.sp13}
            alt=""
            style={{ width: "2.25rem", height: "2.25rem" }}
          />
        </div>
        <div
          style={{
            color: props.tcolor,
            fontSize: "1.5rem",
            fontFamily: "Geomanist,sans-serif",
            marginTop: "2rem",
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            color: "#8F8F98",
            fontSize: "1rem",
            fontFamily: "Geomanist,sans-serif",
            lineHeight: "1.75rem",
            marginTop: "2rem",
          }}
        >
          {props.p}
        </div>
      </div>
    </div>
  );
}

export default Section11;
