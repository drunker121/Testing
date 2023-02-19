import React from 'react'
import { BsFillGridFill, BsList} from 'react-icons/bs'
import { useFilterContext } from '../../Context/Filter_Context';
import './Sort.css';

const Sort = () => {

    const {grid_view , setGridView , setListView, filter_products , sorting} =useFilterContext();

  return (
    <>
        <div className='container d-flex justify-content-between my-5 py-3'>
            <div className='d-flex'>
                <button className={grid_view ? 'active sort-btn' : 'sort-btn' } onClick={setGridView}>
                    <BsFillGridFill/>
                </button>
                <button className={!grid_view ? 'active sort-btn' : 'sort-btn' } onClick={setListView}>
                    <BsList/> 
                </button>
            </div>
            <div>
                <p>{`${filter_products.length}`} products available</p>
            </div>
            <div>
                <form action='#'>
                    <label htmlFor='sort'></label>
                    <select name='sort' id='sort' onClick={sorting}>
                        <option style={{display: 'none'}}>Sort</option>
                        <option value="lowest">Price(lowest to highest)</option>
                        <option value="highest">Price(highest to lowest)</option>
                    </select>
                </form>
            </div>
        </div>
    </>
  )
}

export default Sort