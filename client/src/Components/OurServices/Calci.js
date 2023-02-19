import React, {useState} from 'react';
import './Calci.css';
import background from '../../Images/3.jpg';

// 6,7,3
// maybe 9,12
// less maybe 10,8


const Calci = () => {

    const [val1, setval1] = useState();
    const [val2, setval2] = useState();
    const [val3, setval3] = useState();
    const [val4, setval4] = useState(0);

    const[show, setShow] = useState(false);
    const[selectedValue, setSelectedValue] = useState('m');


  return (
    <>
        <div className='main text-white' style={{ backgroundImage: `url(${background})`}}>
            <div className='sub-main'>

                <div className='text-align-center'>
                    <h1 className='text-center'>Flooring Calulator</h1>
                </div>

                <div className="d-flex justify-content-center mt-5 pt-3">
                    <label className="unit h6">Enter unit of measurements:</label>
                    <div className="mx-3">
                    <select className='rounded' id="length" name="length" onChange={(e) => setSelectedValue(e.target.value)}>
                        <option value="m">meters(m)</option>
                        <option value="cm">centimeters(cm)</option>
                        <option value="in">inches(in)</option>
                        <option value="ft">feet(ft)</option>
                    </select>
                    </div>
                </div>

                <div className='d-flex justify-content-center mt-4'>
                    <div className='leftflex'>
                        <div className='mt-3 h6'>Room Length:</div>
                        <div className='mt-3 h6'>Room Width:</div>
                        <div className='mt-3 h6'>Cost of Material:</div>
                        {show ? <div className='h6 mx-3 mt-3 pt-1'>Waste factor:</div> :null}
                    </div>
                    <div className='d-flex flex-column mx-4'>
                        <input className='midflex1 form-control form-rounded mx-4' id="roomlength" type="number" value={val1} onChange={(e) => setval1(e.target.value)}></input>
                        <input className='midflex2 form-control form-rounded mx-4' id="roomwidth"  type="number" value={val2} onChange={(e) => setval2(e.target.value)}></input>
                        <input className='midflex3 form-control form-rounded mx-4' id="roomlength"  type="number" value={val3} onChange={(e) => setval3(e.target.value)}></input>
                        {show ?<input className='midflex4 form-control form-rounded mx-4' id="roomarea"  type="number" value={val4} onChange= {(e) => setval4(e.target.value)}></input> :null}
                    </div>
                    <div className='lastflex d-flex flex-column mt-2'>
                        <span className='lastflex1 bage bg-dark text-light mx-1' value={selectedValue}>{selectedValue} </span>
                        <span className='lastflex2 bage bg-dark text-light mx-1' value={selectedValue}>{selectedValue} </span>
                        <span className='lastflex3 bage bg-dark text-light mx-1'>&#8377;/{selectedValue}<sup>2</sup> </span>
                        {show ?<span className='lastflex4 bage bg-dark text-light mx-1'>&#x00025;</span> : null}
                    </div>
                </div>

                <label className="h6 d-flex justify-content-center mt-5">Flooring Cost</label>

                <div className='d-flex justify-content-center mt-4'>
                    <div>
                        <div className='mx-3 mt-3 h6'>Room Area:</div>
                        { show?<div className='mx-3 mt-3 h6'>Total material required:</div>:null}
                        <div className='mx-3 mt-3 h6'>Total Cost:</div>
                    </div>
                    <div className='midflex d-flex flex-column mx-3'>
                        <input className='midflex5 form-control form-rounded mx-1' id="roomarea"  type="number" value={val1*val2}></input>
                        { show ? <input className='midfle6 form-control form-rounded mx-1' id="totalmaterialrequired"  type="number" value={val1*val2 + val1*val2*val4/100}></input>:null}
                        <input className='midlfex7 form-control form-rounded mx-1' id="waste"  type="number" value={(val1*val2 + val1*val2*val4/100)*val3}></input>
                    </div>
                    <div className='d-flex flex-column mt-2'>
                        <span className='midflex5 bage bg-dark text-light'>{selectedValue}<sup>2</sup> </span>
                        {show ?<span className='midflex6 bage bg-dark text-light mt-3'>{selectedValue}<sup>2</sup> </span>: null}
                        <span className='midflex7 bage bg-dark text-light mt-3'>&#8377;</span>
                    </div>
                </div>

                <div className='text-center mt-5'>
                    <button type="button" className="btn btn-primary" onClick={() => setShow(!show)}>
                    {show ? 'Simple Calculator' : 'Advance Calulator' }</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Calci