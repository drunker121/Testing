import React from "react";
import { Form, Link } from "react-router-dom";
import './Product.css';
import FormatPrice from "../../Helpers/FormatPrice";
import { useProductContext } from "../../Context/ProductContext";
import AddToCart from "./AddToCart";


const Product = (curElem) => {

  const {pid, name, price, Category, property_type, city, image } = curElem;
  // const { isLoading, isError, products, singleProduct } = useProductContext();

  return (
    <>
      <Link to={`/singleproduct/${pid}`}>
        <img className="proimg" src={image} alt="Sample"/></Link>
        <div className="text">
          <h3>{name}</h3>
          <del><p><FormatPrice price={price + 200}/></p></del>
          <p><FormatPrice price={price}/></p>
          <AddToCart pid ={pid} />
        </div>
    </>
  );
};

export default Product;
