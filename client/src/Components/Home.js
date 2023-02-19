import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Services from './Home/Services';
import Products from './Home/Products';
import Carousel from './Home/Carousel';
import Search from './Home/Search';
import Talk from './Home/Talk';

const Home = () => {
  return (
    <>
    <Carousel/>
    <Search/>
    <Services/>
    <Products/>
    <Talk/>
    </>
  )
}

export default Home