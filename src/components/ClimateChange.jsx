import React from 'react'
import '../App.css'
import Causes from './Causes'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Introduction from './Introduction';
import { TypeAnimation } from 'react-type-animation';


const ClimateChange = () => {
  AOS.init({duration: 1000});
  return (
    <>
    <div className='stackedbg'>
      <div className='container'>
      <div className='climatechange-header container'>

      <TypeAnimation
      sequence={[
        'Climate Change?', 
        1000, 
        'Droughts?', 
        2000, 
        'Sea Level Rise?', 
        3000, 
        'Ocean Acidification?',
        4000,
        'Food Shortages?',
        4000,
        'Health Crisis?',
        4000,
        'Conflict?',
        4000,
        'Extinction.',
        5000
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: 'clamp(50px, 5vw, 100px)', display: 'inline-block', color: 'darkred'}}
      id='climate'
    />
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
