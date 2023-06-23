import React from "react";
import p1 from "./picture/640px-Google_Play_Store_badge_EN 1.png";
import p2 from "./picture/App store 1.png";
import p3 from "./picture/homepage_Banner_664825f9b6.png";

function Header1con() {
  return (
    <div
      className="position-relative d-flex d-flex justify-content-between"
      style={{ margin: "0rem 2rem 0rem 6rem", marginTop: "5rem" }}
    >
      <div>
        <div>
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
          style={{
            width: "31.875rem",
            color: "#8F8F98",
            fontSize: "1.125rem",
            fontFamily: "Geomanist,sans-serif",
            lineHeight: "1.875rem",
            marginTop: "1.5rem",
            paddingRight: "2rem",
          }}
        >
          Built on a blockchain, the Verified Network offers users easy, secure,
          regulation compliant, low cost access to payments, financing and
          investments.
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
        <div style={{ marginTop: "2rem" }}>
          <img
            src={p1}
            style={{
              width: "10.625rem",
              height: "3.33988rem",
              borderRadius: "50px",
            }}
            alt=""
            s
          />
          <img
            src={p2}
            style={{
              width: "10.625rem",
              height: "3.33988rem",
              borderRadius: "50px",
            }}
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          src={p3}
          style={{ width: "35.45381rem", height: "38rem" }}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header1con;
