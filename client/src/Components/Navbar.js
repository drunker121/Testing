import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "./Navbar.css";
import { useFilterContext } from "../Context/Filter_Context";

const Navbar = () => {

  const { filters:{text}, updateFilterValue} = useFilterContext();


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid px-10">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid px-10" src={logo} alt="logo"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex" role="search" onSubmit={ (e) => e.preventDefault()}>
              <input
                className="form-control me-3 px-5"
                type="text"
                name="text"
                value={text}
                onChange={updateFilterValue}
                placeholder="Search for products, brands and more"
                aria-label="Search"
              />
              <Link to="/products"><button className="btn btn-outline-primary" type="submit">
                Search
              </button></Link>
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
              <li className="nav-item px-3">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/enquirycart">
                  Enquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
