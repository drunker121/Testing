import React from 'react';
import './Talk.css';
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';

const Talk = () => {
  return (
    <>
    <div className='bg text-center'>
      
        <div className='pt-5'>
          <h1 className='perfect text-white pt-5'>Perfect Design of Products</h1>
        </div>
        
        <div className='d-flex justify-content-center mt-5 pt-5'>
            <Link to='/contactus'><button className='btn btn-light mb-5'>TALK TO US</button></Link>
        </div>
    </div>

    <div className='bg-dark mt-5 d-flex justify-content-center'>

    <div className="card text-center d-flex m-5" >
      <div className="card-body">
        <h1 className="card-title">18 K</h1>
        <p className="card-text">Completed Projects</p>
      </div>
    </div>

    <div className="card text-center d-flex m-5" >
      <div className="card-body">
        <h1 className="card-title">140 +</h1>
        <p className="card-text">WorldWide Clients</p>
      </div>
    </div>

    <div className="card text-center d-flex m-5" >
      <div className="card-body">
        <h1 className="card-title">900 +</h1>
        <p className="card-text">Millions in Growth</p>
      </div>
    </div>

    <div className="card text-center d-flex m-5" >
      <div className="card-body">
        <h1 className="card-title">48 +</h1>
        <p className="card-text">Total Awards</p>
      </div>
    </div>

    </div>

    <Testimonials/>

    <div className='customer mt-5'>
      <div className=''><h3 className='custext text-white pt-5'>Customer relation with</h3></div>
      <div className=''><h3 className='custext text-white'>transparent communication ...</h3></div>
      <div className=''><h3 className='custext1 text-white mt-3'>Customer solutoins can get you there</h3></div>
      <div><Link to='/contactus'><button className='hi btn btn-light mb-5 mt-5'>TALK TO US</button></Link></div>
    </div>
    </>
  )
}

export default Talk