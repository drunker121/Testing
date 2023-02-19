import React from 'react';
import Product from './Product';

const GridView = ({products}) => {
  return (
    <>
        <div className="container my-5">
        <main className="grid">
          {products.map((curElem) => {
            return <Product key={curElem.pid} {...curElem} />;
          })}
        </main>
      </div>
    </>
  )
}

export default GridView