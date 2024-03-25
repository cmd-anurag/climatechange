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
        <h5 className="card-title">Greenhouse Emissions</h5><hr />
          <p className="card-text">
          Greenhouse gas emissions from fossil fuels and industry cause global warming. Switching to renewable energy is crucial for reducing these emissions and addressing climate change.</p>
        </div>
      </div>

      <div data-aos="flip-left" className="card card2 col-12 col-md-4" style={{width: '18rem'}}>
        <img src="https://files.worldwildlife.org/wwfcmsprod/images/Deforestation_in_Tesso_Nilo_Sumatra/story_full_width/1e7g2a63k2_deforestation_causes_HI_104236.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">Deforestation</h5><hr />
          <p className="card-text">
          Deforestation, primarily caused by human activities like logging and agriculture, leads to the loss of valuable biodiversity and contributes to climate change by reducing the Earth's carbon sink.
          </p>
        </div>
      </div>

      <div data-aos="flip-right" className="card card3 col-12 col-md-4" style={{width: '18rem'}}>
        <img src="https://miro.medium.com/v2/resize:fit:1024/1*hGEoEv4Bjsd8cgxUQ6fDJg.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">Industrial Processes</h5><hr />
          <p className="card-text">
          Activities like cement production and land conversion release additional greenhouse gases and alter the Earth's energy balance, further exacerbating climate change.
          </p>
        </div>
      </div>

      <div data-aos="flip-right" className="card card3 col-12 col-md-4" style={{width: '18rem'}}>
        <img src="https://cordis.europa.eu/docs/news/images/2022-05/436389.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">Urbanization and Lifestyle</h5>
          <p className="card-text">
          Urbanization and lifestyle contribute to climate change through increased energy consumption and consumer habits. Sustainable planning and eco-friendly choices are key to reducing these impacts.</p>
        </div>
      </div>

    </div>
    <div className="d-flex justify-content-end"><a href="https://en.wikipedia.org/wiki/Causes_of_climate_change" style={{marginLeft: 'auto'}}>and many other human driven activities</a></div>
    </>
  );
};

export default Causes;
