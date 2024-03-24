import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const Causes = () => {
  Aos.init({duration: 1000});
  return (
    <>
    <div className="row d-flex justify-content-around">

      <div data-aos="flip-left" className="card card1 col-12 col-md-4" style={{width: '18rem'}}>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-c629b844cb06646223f8e2fdaf6a7895" className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">Greenhouse Emissions</h5>
          <p className="card-text">
          Release of gases like carbon dioxide and methane from burning fossil fuels, trapping heat in the atmosphere and causing global warming.</p>
        </div>
      </div>

      <div data-aos="zoom-out" className="card card2 col-12 col-md-4" style={{width: '18rem'}}>
        <img src="https://files.worldwildlife.org/wwfcmsprod/images/Deforestation_in_Tesso_Nilo_Sumatra/story_full_width/1e7g2a63k2_deforestation_causes_HI_104236.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">Deforestation</h5>
          <p className="card-text">
          Large-scale clearing of forests reduces Earth's ability to absorb carbon dioxide, contributing to increased greenhouse gas concentrations.
          </p>
        </div>
      </div>

      <div data-aos="flip-right" className="card card3 col-12 col-md-4" style={{width: '18rem'}}>
        <img src="https://miro.medium.com/v2/resize:fit:1024/1*hGEoEv4Bjsd8cgxUQ6fDJg.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">Industrial Processes</h5>
          <p className="card-text">
          Activities like cement production and land conversion release additional greenhouse gases and alter the Earth's energy balance, further exacerbating climate change.
          </p>
        </div>
      </div>
      
    </div>
      <a href="https://en.wikipedia.org/wiki/Causes_of_climate_change" style={{marginLeft: 'auto', width: 'fit-content'}}>and many other human driven activities</a>
    </>
  );
};

export default Causes;
