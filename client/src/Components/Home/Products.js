import React from 'react';
import './Products.css';
import c1 from '../../Images/c1.jpg';
import { Link } from 'react-router-dom';
import c2 from '../../Images/c2.jpg';
import c3 from '../../Images/c3.jpg'
const Products = () => {
  return (
    <>
        <div className="marbanime text-bold mt-5 text-center">
          [ M A R B L E G R A M ]
        </div>

        <div className="our text-center mt-2">
          <h1>Product Categories</h1>
        </div>
        <hr/>

        <div>
        <section className="section-1">
            <div className="row">
                <figure className="figure">
                <img src={c1} alt="marble"
                />
                <figcaption>
                    <h3>MARBLE</h3>
                </figcaption>
                <Link to="/"></Link>
                </figure>
                <figure className="figure">
                <img src={c2} alt='granite'/>
                <figcaption>
                    <h3>GRANITE</h3>
                </figcaption>
                <Link to="/"></Link>
                </figure>
                <figure className="figure">
                <img src={c3} alt='art & craft'/>
                <figcaption>
                    <h3>ART & CRAFT</h3>
                </figcaption>
                <Link to="/"></Link>
                </figure>
            </div>
        </section>




{/* <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script> */}

        </div>
    </>
  )
}

export default Products