import React from 'react';
import './Footer.css';
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
            <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="widget1">
                            <div className="logo">
                                <img src={logo} className="img-fluid" alt=""/>
                            </div>
                            <p>
                                In eu libero ligula. Fusce eget metus lorem, ac viverra
                                leo. Nullam convallis, arcu vel pellentesque sodales,
                                nisi est varius diam, ac ultrices sem ante quis sem.
                                Proin ultricies volutpat sapien.
                            </p>
                            <div className="socialLinks">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="fab fa-linkedin-in"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="fab fa-google-plus-g"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-sm-6 col-lg-2">
                        <div className="widget3">
                            <h5>
                                Quick Links
                            </h5>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/aboutus">
                                        about
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contactus">
                                        contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/enquirycart">
                                        Your Inquiry
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-2">
                        <div className="widget4">
                            <h5>
                                About
                            </h5>
                            <ul>
                                <li>
                                    <Link to="/aboutus">
                                        History
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contactus">
                                        About Company
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Our Works
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-2">
                        <div className="widget3">
                            <h5>
                                Our Servies
                            </h5>
                            <ul>
                                <li>
                                    <Link to="/financialanalyst">
                                        Financial Analyst
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/installation">
                                        Installation and Finishing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/selectionconsultancy">
                                        Marble Selection Consultancy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/interior">
                                        Interior Design
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                   
                </div>
            </div>
            <div className="copyRightArea">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>&copy; Copyright All rights reserved 2019.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer