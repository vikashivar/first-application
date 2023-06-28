import React from "react";
import sp1 from "./picture/Group 161.png";
import sp2 from "./picture/info_1_a39178e895 (1).png";
import sp3 from "./picture/Group.svg";
import sp4 from "./picture/Frame_17145_7923a090c0.jpg";
import sp5 from "./picture/Group.png";
import sp6 from "./picture/Ellipse 21.png";
import sp7 from "./picture/service_Provider_3c32c97b29.png";
import sp8 from "./picture/Group 158.png";
import sp9 from "./picture/Vector 2 (1).png";
import sp10 from "./picture/Group 17353.png";
import sp11 from "./picture/image 28.png";
import sp12 from "./picture/sp12.png";
import sp13 from "./picture/sp13.png";
import sp14 from "./picture/sp14.png";
import sp15 from "./picture/sp15.png";
import sp16 from "./picture/sp16.png";
import sp17 from "./picture/sp17.png";
import Section11 from "./picture/section11";
import sp18 from "./picture/sp18.png";
import sp20 from "./picture/sp20.png";
import sp21 from "./picture/sp21.png";
import Section12 from "./section12";
import { Link } from "react-router-dom";
import Downolad from "../comcon/downolad";
import Invest from "../comcon/invest";
import Footer from "../comcon/footer";

function Section1() {
  return (
    <>
      <div
        className="accessm text-xl-start text text-center"
        style={{ margin: "0rem 6rem" }}
      >
        <div className=" d-flex flex-xl-row flex-column justify-content-xl-between align-items-center">
          <div>
            <div
              className="Access"
              style={{
                color: "#393939",
                fontSize: "3.125rem",
                fontFamily: "Geomanist,sans-serif",
              }}
            >
              Access to choice in global finance is limited
            </div>
            <div
              className="text-xl-start text-center"
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
          <div>
            <div>
              <div
                className="forleft mt-xl-0 mt-3"
                style={{
                  width: "4.5rem",
                  height: "0.5rem",
                  borderRadius: "8px",
                  background: "#4e59e7",
                }}
              ></div>
              <div
                className="mt-xl-5 mt-3 forleft"
                style={{
                  color: "#8F8F98",
                  fontSize: "1.125rem",
                  fontFamily: "Geomanist,sans-serif",
                  lineHeight: "1.875rem",
                }}
              >
                Banks lock you in a silo when they offer their accounts,
                payments, cards, insurance and loans products without access to
                choice of products by other financial service providers. Not any
                more.
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-5 d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center"
          style={{}}
        >
          <div style={{ marginTop: "7rem" }}>
            <img
              className="cardimage"
              src={sp2}
              style={{ maxWidth: "25.375rem", maxHeight: "30.75rem" }}
              alt=""
            />
          </div>

          <div
            style={{ marginTop: "8rem" }}
            className="forleft2 d-xl-block d-flex flex-column justity-content-center align-items-center"
          >
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
            <div>
              <div
                className="mt-5 pe-5 text-md-start text-center"
                style={{
                  color: "#8F8F98",
                  fontSize: "1.125rem",
                  fontFamily: "Geomanist,sans-serif",
                  lineHeight: "1.875rem",
                }}
              >
                Individuals can set up accounts on the Verified Network for
                keeping assets, make payments in multiple currencies, invest and
                trade digital assets.
              </div>
              <div className="mt-5">
                <Link
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      <div
        className="d-flex justify-content-between flex-md-row flex-column"
        style={{ margin: "10em 6rem 0rem 6rem" }}
      >
        <div style={{}}>
          <div className="position-relative">
            <img
              src={sp6}
              style={{ width: "3.60rem", height: "3.60rem ," }}
              alt=""
            />
            <img
              src={sp5}
              style={{
                width: "4.038rem",
                height: "3.949rem ,",
                position: "absolute",
                left: "1em",
                top: "15px",
              }}
            ></img>
          </div>

          <div
            className="mt-5"
            style={{
              color: "#08C0B5",
              fontSize: "2.5rem",
              fontFamily: "Geomanist,sans-serif",
              fontWeight: "600",
            }}
          >
            <span style={{ color: "#393939", fontWeight: "400" }}>For </span>
            Businesses
          </div>
          <div
            style={{
              color: "#393939",
              fontSize: "1.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "1.875rem",
            }}
          >
            Choose how you finance your business.
          </div>
          <div
            className="mt-5 pe-5"
            style={{
              color: "#08C0B5",
              fontSize: "1.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "1.875rem",
            }}
          >
            Businesses can set up accounts on the Verified Network, make
            payments and raise financing by issuing regulation compliant
            tokenized securities.
          </div>
        </div>
        <div style={{ marginTop: "7rem" }}>
          <img className="cardstart" src={sp4} style={{}} alt="" />
        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      <div
        className="d-flex justify-content-between flex-md-row flex-column"
        style={{ marginTop: "7rem", margin: "10em 8rem 0rem 8rem" }}
      >
        <img className="cardstart1" src={sp7} style={{}} alt="" />

        <div style={{}}>
          <img
            src={sp8}
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
            Service Providers
          </div>
          <div
            style={{
              color: "#393939",
              fontSize: "1.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "1.875rem",
            }}
          >
            Get access to customers and markets.
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
            Financial Services Providers on the Verified Network get access to
            individual and business customers to whom they can offer services.
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div style={{ margin: "0rem 6rem" }}>
        {" "}
        <div
          className="d-flex flex-column align-items-center "
          style={{
            // width: "71rem",
            // height: "31.875rem",
            background:
              "linear-gradient(to left, rgba(193, 241, 238, 1), rgba(241, 244, 255, 1)",
            borderRadius: "1.25rem",
            marginTop: "5rem",
          }}
        >
          <div
            className="mt-lg-5 mt-4"
            style={{
              color: "#393939",
              textAlign: "center",
              fontSize: "2.5rem",
              fontFamily: "Geomanist ,sans-serif",
              lineHeight: "3.75rem",
            }}
          >
            The{" "}
            <span style={{ color: "rgba(78, 89, 231, 1)", fontWeight: "600" }}>
              Verified Network
            </span>{" "}
            is serviced by
          </div>
          <div
            className="mt-lg-5 mt-4"
            style={{
              color: "#393939",
              fontSize: "1.5rem",
              fontFamily: "Geomanist,sans-serif",
            }}
          >
            Finimmo
          </div>
          <div
            className="d-flex  flex-lg-row flex-column mt-4"
            style={{ padding: "0rem 5rem" }}
          >
            <div>
              <img
                src={sp11}
                alt=""
                style={{ width: "22rem", height: "5.5rem" }}
              />
            </div>
            <div
              className="fini"
              style={{
                color: "#8F8F98",
                fontSize: "1.125rem",
                fontFamily: "Geomanist,sans-serif",
                lineHeight: "1.875rem",
              }}
            >
              Finimmo supports the issuance of tokenized notes securitized by
              assets. Based in Luxembourg, Finimmo manages in excess of EUR 1
              billion in asset backed securities
            </div>
          </div>
          <div className="overflow-hidden" style={{ height: "9rem" }}>
            <img
              src={sp10}
              alt=""
              style={{ width: "10.8rem", height: "9.8rem" }}
              className="mt-4"
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      <div
        className="d-flex flex-xl-row flex-column"
        style={{ margin: "5rem 6rem" }}
      >
        <div
          className=""
          style={{ marginTop: "11.2rem", paddingRight: "6rem" }}
        >
          <div
            style={{
              color: "#393939",
              fontSize: "3.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "3.75rem",
            }}
          >
            It is Time We Level the <br />
            <span style={{ color: "rgba(78, 89, 231, 1)", fontWeight: "700" }}>
              Playing Field.
            </span>
          </div>
          <div
            style={{
              color: "#393939",
              fontSize: "1.125rem",
              fontFamily: "Geomanist ,sans-serif",
              lineHeight: "1.875rem",
            }}
          >
            Breaking barriers and offering access, choice and control to
            Verified account holders.
          </div>
        </div>
        <div className=" mt-xl-0 mt-4 d-flex flex-lg-row flex-column justify-content-center flex-warp align-items-center ">
          <div className="align-self-center me-xl-4" style={{}}>
            <Section11
              tcolor='"#0BC1B6"'
              scolor="0px 20px 50px 0px rgba(17, 195, 184, 0.50)"
              back="rgba(193,241,238,0.5)"
              cback="#0EC2B7"
              sp13={sp13}
              title="Payments"
              p="Make payments in over 20+ countries and link your card to tap and pay
            everywhere."
            ></Section11>
          </div>
          <div className="mt-lg-0 mt-4 d-xl-block d-flex ms-xl-0 ms-4  justify-content-md-between justify-content-center flex-md-nowrap  align-items-center">
            <Section11
              tcolor="#9061F5"
              scolor="0px 20px 50px 0px rgba(142, 142, 151, 0.50)"
              back="rgba(216, 198, 255, 0.30)"
              cback="#8e5ff5"
              sp13={sp15}
              title="Financing"
              p="Access your choice of markets and broaden your investor reach to raise capital without boundaries."
            ></Section11>
            <div style={{}} className="mt-xl-4 ms-xl-0 ms-4">
              <Section11
                tcolor="#4E59E7"
                scolor="0px 20px 50px 0px rgba(78, 89, 231, 0.50)"
                back="rgba(220, 226, 255, 0.50)"
                cback="#4E59E7"
                sp13={sp17}
                title="Investments"
                p="Multiply your wealth by investing in private assets globally, so far only available to privileged bank customers."
              ></Section11>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------- */}
      <div
        className="d-flex flex-lg-row flex-column"
        style={{ margin: "10rem 6rem 0rem 3rem" }}
      >
        <div className="text-center">
          <img className="phone2" src={sp18} style={{}} alt="" />
        </div>
        <div className="mt-5" style={{ marginLeft: "6.1rem" }}>
          <div
            style={{
              color: "rgb(57,57,57)",
              fontSize: "3.125rem",
              fontFamily: "Geomanist,sans-serif",
              lineHeight: "3.75rem",
            }}
          >
            <span style={{ fontWeight: 700, color: "#4e59e7" }}>
              {" "}
              Disrupting Finance,<br></br>
            </span>{" "}
            For good, and for all.
          </div>
          <div className="position-relative">
            {/* <div style={{}} className="d-flex flex-row">
              <div>
                <div
                  style={{
                    borderLeft: "2px dotted rgb(78,89,231 )",
                    height: "100%",
                    zIndex: "-1",
                    position: "absolute",
                    left: "2.5%",
                    top: "2%",
                    height: "98%",
                  }}
                ></div>

                <div
                  style={{ height: "100%" }}
                  className="d-flex flex-column justify-content-between"
                >
                  <img
                    src={sp20}
                    style={{
                      width: "1.68rem",
                      height: "1.68rem",
                      marginTop: ".4rem",
                    }}
                    alt=""
                  />
                  <img
                    src={sp20}
                    style={{
                      width: "1.68rem",
                      height: "1.68rem",
                      marginTop: ".4rem",
                    }}
                    alt=""
                  />
                  <img
                    src={sp20}
                    style={{
                      width: "1.68rem",
                      height: "1.68rem",
                      marginTop: ".4rem",
                    }}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    color: "#8F8F98",
                    fontSize: "1.125rem",
                    fontFamily: "Geomanist,snas-serif",
                    lineHeight: "1.875rem",
                    marginLeft: "1.6rem",
                  }}
                >
                  Verified’s vision is to build a financial services ecosystem
                  anchored on blockchain that gives you full control and choice
                  over what financial products and services you want to consume.
                </div>
                <div
                  style={{
                    color: "#8F8F98",
                    fontSize: "1.125rem",
                    fontFamily: "Geomanist,snas-serif",
                    lineHeight: "1.875rem",
                    marginLeft: "1.6rem",
                  }}
                >
                  To achieve that, the solution can not be a neo-bank running on
                  a single banking platform, or a wallet tied to a single
                  payments firm.
                </div>
                <div
                  style={{
                    color: "#8F8F98",
                    fontSize: "1.125rem",
                    fontFamily: "Geomanist,snas-serif",
                    lineHeight: "1.875rem",
                    marginLeft: "1.6rem",
                  }}
                >
                  Instead, the Verified Network lets you create an account on
                  the blockchain which is serviced by your choice of financial
                  services providers globally.
                </div>
              </div>
            </div> */}
            {/* <img
              src={sp21}
              alt=""
              className="position-absolute"
              style={{
                height: "17rem",
                top: "6%",
                left: "2.3%",
                zIndex: -1,
                width: "2px",
              }}
            /> */}
            <div className="d-flex" style={{ marginTop: "4rem" }}>
              <img
                src={sp20}
                style={{
                  width: "1.68rem",
                  height: "1.68rem",
                  marginTop: ".4rem",
                }}
                alt=""
              />
              <div
                style={{
                  color: "#8F8F98",
                  fontSize: "1.125rem",
                  fontFamily: "Geomanist,snas-serif",
                  lineHeight: "1.875rem",
                  marginLeft: "1.6rem",
                }}
              >
                Verified’s vision is to build a financial services ecosystem
                anchored on blockchain that gives you full control and choice
                over what financial products and services you want to consume.
              </div>
            </div>
            <div className="d-flex" style={{ marginTop: "2rem" }}>
              <img
                src={sp20}
                style={{
                  width: "1.68rem",
                  height: "1.68rem",
                  marginTop: ".4rem",
                }}
                alt=""
              />
              <div
                style={{
                  color: "#8F8F98",
                  fontSize: "1.125rem",
                  fontFamily: "Geomanist,snas-serif",
                  lineHeight: "1.875rem",
                  marginLeft: "1.6rem",
                }}
              >
                To achieve that, the solution can not be a neo-bank running on a
                single banking platform, or a wallet tied to a single payments
                firm.
              </div>
            </div>
            <div className="d-flex" style={{ marginTop: "2rem" }}>
              <img
                src={sp20}
                style={{
                  width: "1.68rem",
                  height: "1.68rem",
                  marginTop: ".4rem",
                }}
                alt=""
              />
              <div
                style={{
                  color: "#8F8F98",
                  fontSize: "1.125rem",
                  fontFamily: "Geomanist,snas-serif",
                  lineHeight: "1.875rem",
                  marginLeft: "1.6rem",
                }}
              >
                Instead, the Verified Network lets you create an account on the
                blockchain which is serviced by your choice of financial
                services providers globally.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------- */}
      <div
        style={{
          // height: "89.37rem",
          backgroundColor: "rgba(216,198,255,0.3)",
          paddingTop: "4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ margin: "0rem 6rem" }}>
          <div
            className="d-flex justify-content-between align-items-center "
            style={{}}
          >
            <div
              style={{
                color: "#000",
                fontSize: "2.5rem",
                fontFamily: "Geomanist,sans-serif",
              }}
            >
              Latest News
            </div>
            <Link
              style={{
                color: "#4E59E7",
                fontSize: "1.125rem",
                fontFamily: "Geomanist,sans-serif",
                lineHeight: "1.875rem",
                paddingTop: "1%",
              }}
            >
              See all
            </Link>
          </div>
          <div
            style={{ margin: "0rem 1rem" }}
            className="d-flex justify-content-between flex-wrap "
          >
            <Section12
              date="12 Dec 2021"
              title="Lorem Ipsum Dolor Set Amet Consectur Adis"
              dek="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, "
            ></Section12>
            <Section12
              date="18 jun 2021"
              title="Lorem Ipsum Dolor Set Amet Consectur Adis"
              dek="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, "
            ></Section12>
            <Section12
              date="22 jan 2021"
              title="Lorem Ipsum Dolor Set Amet Consectur Adis"
              dek="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, "
            ></Section12>
          </div>
          <div
            className="d-flex justify-content-end"
            style={{ margin: "0rem 2.3rem" }}
          >
            <img
              src={sp10}
              style={{ width: "10.8rem", height: "9.8rem" }}
            ></img>
          </div>
          <div></div>
        </div>
      </div>

      {/* <Invest></Invest> */}
      {/* <Footer></Footer> */}
    </>
  );
}

export default Section1;
