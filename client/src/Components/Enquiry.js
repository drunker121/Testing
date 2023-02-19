import React, { useState } from 'react'
import { useCartContext } from '../Context/Cart_Context';
import './Cart.css';
import FormatPrice from '../Helpers/FormatPrice';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Enquiry = () => {

  let {cart, removeItem, clearCart} = useCartContext();

  let uniqueProducts = cart.filter((product, index) => {
    return (
      cart
      .map(product => JSON.stringify(product))
      .indexOf(JSON.stringify(product)) === index &&
      Object.values(product).every(value => value !== undefined)
    );
  });
  cart = uniqueProducts;
  console.log(uniqueProducts);
  
  const [enquiryMessage, setEnquiryMessage] = useState({
    Cart_Messages: [[]],
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    enquiry_message: ""
  });

  const [tempMessages, setTempMessages] = useState([]);

  const changeHandler = (e) => {
    const {name , value} = e.target;
      setEnquiryMessage({
        ...enquiryMessage,
        [name]:value
      })
  };

  const submitHandle = async(e) => {
    e.preventDefault();
    console.log(tempMessages, "dikh rha kuch ?");

    const { name, email, phone_number, enquiry_message} = enquiryMessage;
    if ( name && email && phone_number && enquiry_message) {
        if (tempMessages.length > 0) {
            setEnquiryMessage((prevEnquiryMessage) => ({
              ...prevEnquiryMessage,
              Cart_Messages: [...prevEnquiryMessage.Cart_Messages, ...tempMessages],
            }));
            setTempMessages([]);
          }
        axios.post('http://localhost:5000/enquirycart' , enquiryMessage)
        .then((res) => {
            alert("Enquiry Sent");
            setEnquiryMessage({
                ...enquiryMessage,
                Cart_Messages:[[]],
                enquiry_message: ""
            });
        })
        .catch((err) => console.log(err));
    }
    else {
        alert("Enter the fields properly");
    }
  }


  return (
    <>

        <div className='container p-5'>
            <div>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th className='text-center'>Your Message</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((curElem) => {
                                const temp = new Array(2);
                                temp[0] = curElem.id;
                                const {id, name , price, image} = curElem;
                                return (
                                    <tr key={name}>
                                        <td><img className='cartimage' src={image} alt={name}/></td>
                                        <td>{name}</td>
                                        <td><FormatPrice price={price} /> </td>
                                        <td className='text-center'><textarea className='' onChange={(e) => {
                                             temp[1] = e.target.value;
                                             setTempMessages((prevTempMessages) => [
                                            ...prevTempMessages,
                                            temp,
                                        ]);
                                        }}></textarea></td>
                                        <td><MdDelete onClick={() => {removeItem(id)}}/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className='d-flex justify-content-between'>
                <Link to="/products"><button type="button" className="btn btn-primary">Browse More Products</button></Link>
                <button type="button" className="btn btn-danger" onClick={clearCart }>Clear Cart</button>
            </div>

            <div className='d-flex flex-column gap-4 p-5 m-5'>
                <input placeholder='NAME' name="name" id='name' type="text" value={enquiryMessage.name} onChange={changeHandler}></input>
                <input placeholder='EMAIL' name='email' id='email' type='text' value={enquiryMessage.email} onChange={changeHandler}></input>
                <input placeholder='PHONE NUMBER' value={enquiryMessage.phone_number} name='phone_number' type="number" id='phone_number' onChange={changeHandler} ></input>
                <input placeholder='SUBJECT' name='subject' id='subject' type='text' onChange={changeHandler} value={enquiryMessage.subject}></input>
                <textarea placeholder='YOUR MESSAGE' type='text' id='enquiry_message' name='enquiry_message' value={enquiryMessage.enquiry_message} onChange={changeHandler}></textarea>
                <button type="button" className="btn btn-info" onClick={submitHandle}>Send Message</button>
            </div>
        </div>
    </>
  )
}

export default Enquiry