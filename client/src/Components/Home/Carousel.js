import React from "react";
import './Carousel.css';
// import img1 from "../Images/1.jpg";
// import img2 from "../Images/6.jpg";
// import img3 from "../Images/10.jpg";
// import $ from 'jquery';
import 'slick-carousel'


const Carousel = () => {

  return (
    <>
      <div>
        <section className="graimg">
          <div className="graphite">
            GRANITE
          </div>
        </section>
        <section>
          <div className="marbtext">
            MARBLE
          </div>
        </section>
        <section>
          <div className="art">
            ART & CRAFT
          </div>
        </section>
      </div>
    </>
  );
};

export default Carousel;
