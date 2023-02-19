import React, {useState} from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoMdCall } from "react-icons/io";
import axios from 'axios';


const ContactUs = () => {

  const [contactQuery , setContactQuery] = useState({
    name: "",
    email: "",
    phone_number: "",
    query: ""
  })
  
  const changeHandler = (e) => {
    const {name , value} = e.target;
      setContactQuery({
        ...contactQuery,
        [name]:value
      })
  };

  const sendHandle = async(e) => {
    e.preventDefault();
    const {name, email, phone_number, query} = contactQuery;
    if ( name && email && phone_number && query) {
      axios.post('http://localhost:5000/contactus' , contactQuery)
      .then((res) => {
        alert("Message sent successfully");
        setContactQuery({
          ...contactQuery,
          query: ""
        });
      })
      .catch((err)=>console.log(err));
    }
    else {
      alert("Enter the fields properly");
    }
  }


  return (
    <>
      <div className="aboutbg pt-5 pb-5 mb-3">
        <div className="pt-5 pb-5 align-items-center">
          <Link className="abtxt pt-5 pb-5">Contact Us</Link>
        </div>
      </div>

      <div className="cntbg">
        <div className="cntmarb d-flex">
          <div className="discuss">
            <h3>Let's discuss about your spaces!</h3>
            <br></br>
            <p>
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice that they’ve made.
            </p>
            <br></br>
            <p>
              This paragraph is also for those who are looking out for a
              reliable interior design firm.
            </p>
            <br></br>
            <ol>
              <li>Free Consultation</li>
              <li>Budget Quotations</li>
              <li>Latest Technologies</li>
              <li>Eco Friendly Constructions</li>
            </ol>
          </div>
          <div className="getintouch">
            <form className="cntform p-5 m-5" onSubmit={sendHandle}>
              <h3>Get in Touch</h3>
              <div>
                <label>Name:</label>
                <input type="text" name="name" id="name" value={contactQuery.name} onChange={changeHandler}></input>
              </div>
              <div>
                <label>Email:</label>
                <input type="text" name="email" id="email" value={contactQuery.email} onChange={changeHandler}></input>
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="text" name="phone_number" id="phone_number" value={contactQuery.phone_number} onChange={changeHandler}></input>
              </div>
              <div>
                <label>Your query:</label>
                <input type="text" name="query" id="query" value={contactQuery.query} onChange={changeHandler}></input>
              </div>
              <button className="btn btn-primary mt-2" type="submit" onClick={sendHandle}>Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="cntdet m-5 d-flex">
        <div className="cntleft">
          <h3>Contact Details</h3>
          <br></br>
          <small>
            You can use a few enticing words and flaunt your capabilities that
            will attract future clients and encourage them to hire you right
            away.
          </small>
        </div>
        <div className="socialLinks p-5">
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

      <div className="container2 mb-3 gap-5">
        <div className="card2">
          <div className="card2-side card2-side-front"><MdLocationOn/></div>
          <div className="d-flex flex-column card2-side card2-side-back">
          <div><h3>Address</h3></div>
          <div className="text-center"><small>1, Rahimpura, landmark : Bala G Granite, Kishangarh, Rajasthan 305801</small></div>
          </div>
        </div>
        <div className="card2">
          <div className="card2-side card2-side-front"><TfiEmail/></div>
          <div className="d-flex flex-column card2-side card2-side-back">
          <div><h3>Email Us</h3></div>
          <div><small>marblegram@gmail.com</small></div>
          </div>
        </div>
        <div className="card2">
          <div className="card2-side card2-side-front"><IoMdCall/></div>
          <div className="d-flex flex-column card2-side card2-side-back">
          <div><h3>Call Us</h3></div>
          <div><small>+9195090-71607</small></div>
          </div>
        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912839.3705326719!2d74.2633954143983!3d26.655564199999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396bf33f65f35f5d%3A0xcfd329aafda34fb8!2smarblegram!5e0!3m2!1sen!2sin!4v1675623452693!5m2!1sen!2sin" width="100%" height="400" style={{border:0 }}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};

export default ContactUs;
