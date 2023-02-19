import React, { useEffect, useState } from "react";
import "./Pop.css";
import signimg from "../../Images/logo.png";
import axios from 'axios';

const SignUpPop = ({ closeModal }) => {

  const [signup , setSignup] = useState(true);

  const [userDetails , setUserDetails] = useState({
    name: "",
    email:"",
    phone_number: "",
    city:""
  });

  const [loginDetails, setLoginDetails] = useState({
    email:"",
    phone_number:""
  });

  const changeHandler = (e) => {
    const {name , value} = e.target;
    setUserDetails({
      ...userDetails,
      [name]:value
    })
  };

  const changeHandlerLogin = (e) => {
    const {name , value} = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]:value
    })
  };

  const registerHandle = async(e) => {
    e.preventDefault();
    const {name, email, phone_number, city} = userDetails;
    if( name && email && city && phone_number ) {
      axios.post('http://localhost:5000/products' , userDetails)
      .then(res => {
        alert(res.data.status);
        closeModal();
      })
      .catch((err)=>console.log(err));
    }
    else{
      alert("Please enter credientials")
    }
  }

  const loginHandle = async(e) => {
    e.preventDefault();
    const {email , phone_number} = loginDetails;
    if ( email && phone_number ) {
      axios.post('http://localhost:5000/login' , loginDetails)
      .then((res) => {
        const {status} = res.data;
        if ( status === "Log In Successful") {
          alert(status);
          closeModal();
        }
        if(status === "User not found" ) {
          alert(status);
          setSignup(true);
        }
      })
      .catch((err) => console.log(err));
    }
    else{
      alert("Please enter credientials")
    }
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper"></div>
       
      <div className='modal-container'>
         <div className='d-flex'>
            <div className="imgBx mx-auto text-center my-auto">
                <img className="mg" src={signimg} alt="logo" />
            </div>
            <div className="formBx">
              { signup ?
                <form action="post" onSubmit={registerHandle}>
                  <h2>Sign up</h2>
                  <input type="text" name="name" id="name" placeholder="Name" onChange={changeHandler} value={userDetails.name}/>
                  <input type="email" name="email" id="email" placeholder="Email" onChange={changeHandler} value={userDetails.email}/>
                  <input type="text" name="phone_number" placeholder="Phone Number" onChange={changeHandler} value={userDetails.phone_number}/>
                  <input type="text" name="city" placeholder="City" onChange={changeHandler} value={userDetails.city}/>
                  <button className="btn btn-warning mt-2" type="submit" onClick={registerHandle} >Submit</button>
                  <p className="mt-2">already registered ?<span onClick={() => {setSignup(false)}}>Log In</span></p>
                </form>
                :
                <form action="post" onSubmit={loginHandle}>
                  <h2>Log in</h2>
                  <input type="email" name="email" id="email" placeholder="Email" onChange={changeHandlerLogin} value={loginDetails.email} required/>
                  <input type="text" name="phone_number" placeholder="Phone Number" onChange={changeHandlerLogin} value={loginDetails.phone_number} required/>
                  <button className="btn btn-warning mt-2" type="submit" onClick={loginHandle}>Log in</button>
                  <p className="mt-2">New user ? <span onClick={() => setSignup(true)}>Register</span></p>
                </form>
              }
              </div>
            </div>
      </div>
    </>
  );
};

export default SignUpPop;
