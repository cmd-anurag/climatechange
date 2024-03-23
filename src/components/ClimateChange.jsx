import React from 'react'
import '../App.css'
import Causes from './Causes'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Introduction from './Introduction';


const ClimateChange = () => {
  AOS.init({duration: 1000});
  return (
    <>
    <div className='stackedbg'>
      <div className='container'>
      <div data-aos="zoom-out" data-aos-anchor-placement="top-center" className='climatechange-header container'>
        <h1><span id='climate'>CLIMATE </span><br /><span className='mx-5' id='change'>CHANGE</span></h1>
        <p className='quote'>
      <i className="fa-solid fa-quote-left fa-lg"></i>
      &nbsp;&nbsp;Inaction today may paint<br /> a future we can't undo.&nbsp;&nbsp;
      <i className="fa-solid fa-quote-right fa-lg"></i>
      </p>
      </div>
      <Introduction />
      </div>
    </div>
    
    <div className='wavebg'>
      <div className="container">
        <h3 style={{fontWeight: '1000', color: 'white'}}>What is causing Climate Change?</h3>
        <Causes />
      </div>
    </div>
    </>
  )
}

export default ClimateChange
