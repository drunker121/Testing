// import { Cursor } from 'mongoose';
import React, { useState , useEffect} from "react";
import { useProductContext } from "../../Context/ProductContext";
// import Product from "./Product";
import Filter from "./Filter";
// import { useFilterContext } from "../../Context/Filter_Context";
import ProductList from "./ProductList";
import Sort from "./Sort";
import SignUpPop from "./SignUpPop";


const Products = () => {
  const { isLoading, isError, products } = useProductContext();
  const [showSingUp , setShowSignUp] = useState(false);

  const closeModal = () => setShowSignUp(false);

  useEffect(() => {
    console.log(showSingUp)
    const timer = setTimeout(() => {
      setShowSignUp(true);
      console.log(SignUpPop)
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div>......Loading</div>;
  }
  return (
    <>
      { showSingUp && <SignUpPop closeModal = { closeModal }/> }
      <Filter/>
      <Sort/>
      <ProductList/>
    </>
  );
};

export default Products;
