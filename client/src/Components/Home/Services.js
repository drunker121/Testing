import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { SiSimpleanalytics} from "react-icons/si";
import { RiInstallFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { CgIfDesign } from "react-icons/cg";

const Services = () => {
  return (
    <>
      <div className="Services">
        <div className="marbanime text-bold mt-5 text-center">
          [ M A R B L E G R A M ]
        </div>

        <div className="our text-center mt-2">
          <h1>Our Services</h1>
        </div>
        <hr/>

        <div className="cards d-flex justify-content-center">
        
            <div className="card" >
              <div className="card-body">
                <div className="mx-3"><SiSimpleanalytics size={35} style={{color: "#244a92"}}/></div>
                <h5 className="card-title mt-4 mx-3" style={{color: "#244a92"}}>Financial Analyst</h5>
                <p className="card-text mt-5 mx-3">
                We created this square foot calculator for the flooring to take the maths off your plate. Thanks to this tool, you can quickly estimate the flooring cost and calculate how much hardwood.
                </p>
                <div className="mt-5">
                <Link to="/financialanalyst" className="card-link mt-5">
                  READ MORE
                </Link>
                </div>
              </div>
            </div>

            <div className="card" >
              <div className="card-body">
                <div className="mx-3"><RiInstallFill size={35} style={{color: "#244a92"}}/></div>
                <h5 className="card-title mt-4 mx-3" style={{color: "#244a92"}}>Installation and Finishing</h5>
                <p className="card-text mt-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                </p>
                <div className="mt-5">
                <Link to="/installation" className="card-link">
                READ MORE
                </Link>
                </div>
              </div>
            </div>

            <div className="card" >
              <div className="card-body">
                <div className="mx-3"><IoIosPeople size={35} style={{color: "#244a92"}}/></div>
                <h5 className="card-title mt-4 mx-3" style={{color: "#244a92"}}>Marble Selection Consultancy</h5>
                <p className="card-text mt-4">
                Marble and granite have witnessed some aggressive marketing, primarily to win over the increased competition that picked up during the last decade, rather
                </p>
                <div className="mt-5">
                <Link to="#" className="card-link">
                READ MORE
                </Link>
                </div>
              </div>
            </div>

            <div className="card" >
              <div className="card-body">
                <div className="mx-3"><CgIfDesign size={35} style={{color: "#244a92"}}/></div>
                <h5 className="card-title mt-4 mx-3" style={{color: "#244a92"}}>Interior Design</h5>
                <p className="card-text mt-5">
                Interior designers make interior spaces functional, safe, and beautiful for almost every type of building. Interior designers make indoor spaces functional, safe.
                </p>
                <div className="mt-5">
                <Link to="#" className="card-link">
                READ MORE
                </Link>
                </div>
              </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Services;
