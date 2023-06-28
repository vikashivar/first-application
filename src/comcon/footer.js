import React from "react";
import image from "../setCom/picture/Verified12.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="overflow-hidden">
      <div className="footerbackground" style={{}}>
        <div className="d-flex  " style={{ margin: "5rem" }}>
          <div className="">
            <img
              src={image}
              alt=""
              style={{ width: "10.5625rem", height: "2.5rem" }}
            />
            <div
              style={{
                color: "#4B4B4B",
                fontSize: "0.875rem",
                fontFamily: " Geomanist,sans-serif",
                lineHeight: "1.875rem",
                letterSpacing: "0.02625rem",
              }}
            >
              Vertifed Network
            </div>
          </div>
          <div className="d-flex  justify-content-between flex-wrap">
            <div className="ms-5 me-5 mb-5">
              <div>Induviduals</div>
              <div
                style={{ listStyle: "none" }}
                className="footerList mt-4 me-4 mb-4"
              >
                <div>
                  <Link>Account</Link>
                </div>
                <div>
                  <Link>Assets</Link>
                </div>
                <div>
                  <Link>Deposits</Link>
                </div>
                <div>
                  <Link>Payment</Link>
                </div>
                <div>
                  <Link>Investment</Link>
                </div>
              </div>
            </div>
            <div className="ms-5 me-5 mb-5">
              <div>Businesses</div>

              <div
                style={{ listStyle: "none" }}
                className="footerList mt-4 me-4 mb-4"
              >
                <div className="mt-4">
                  <Link>Account</Link>
                </div>
                <div>
                  <Link>Assets</Link>
                </div>
                <div>
                  <Link>Depisits</Link>
                </div>
                <div>
                  <Link>Payment</Link>
                </div>
                <div>
                  <Link>Finance</Link>
                </div>
              </div>
            </div>
            <div className="ms-5 me-5 mb-5">
              <div>Servise Providers</div>
              <div
                style={{ listStyle: "none" }}
                className="footerList mt-4 me-4 mb-4 "
              >
                <div className="mt-4">
                  <Link>Asset Origination</Link>
                </div>
                <div>
                  <Link>Asset Management</Link>
                </div>
                <div>
                  <Link>Asset Servicing</Link>
                </div>
                <div>
                  <Link>Payement</Link>
                </div>
                <div>
                  <Link>Network Operators</Link>
                </div>
              </div>
            </div>
            <div className="ms-5 me-5 mb-5">
              <div>Company</div>
              <div
                style={{ listStyle: "none" }}
                className="footerList mt-4 me-4 mb-4"
              >
                <div>
                  <Link>About Us</Link>
                </div>
                <div>
                  <Link>Assets</Link>
                </div>
                <div>
                  <Link>Careers</Link>
                </div>
                <div>
                  <Link>Contact Us</Link>
                </div>
                <div>
                  <Link>Blog</Link>
                </div>
              </div>
            </div>
            <div className="ms-5 me-5 mb-5">
              <div>Partners</div>
              <div
                style={{ listStyle: "none" }}
                className="footerList mt-4 me-4 mb-4"
              >
                <div>
                  <Link>Operators</Link>
                </div>
                <div>
                  <Link>Developers</Link>
                </div>
                <div>
                  <Link>Investors</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
