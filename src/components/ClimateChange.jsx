import React from 'react'
import '../App.css'
import Causes from './Causes'
import Introduction from './Introduction';
import { TypeAnimation } from 'react-type-animation';
import Visualisations from './Visualisations';
import Solutions from './Solutions';
import Aos from 'aos';
import 'aos/dist/aos.css';


const ClimateChange = () => {
  Aos.init({duration: 800});
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
      style={{ fontSize: 'clamp(50px, 5vw, 100px)', display: 'inline-block', color: 'red', fontWeight: '600'}}
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
        <h2 data-aos="fade-up" style={{fontWeight: '1000', color: 'white'}}>What is causing Climate Change?</h2>
        <Causes />
      </div>
    </div>

    <div className='blurbg'>
      <div className="container">
        <Visualisations />
      </div>
    </div>

    <div className='solutionbg'>
      <div className="container">
        <h1 data-aos='fade-up' className='py-5' style={{fontWeight: '600'}}>What can we do?</h1>
        <Solutions />
      </div>
    </div>
    </>
  )
}

export default ClimateChange
