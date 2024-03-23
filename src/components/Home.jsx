import React, { useState } from "react";
import Earth from "./Earth";

const Home = () => {

  const [exit, setExit] = useState(false);


  return (
    <div>
      <div className={`container my-4`}>
        <div className="row">
          <div className="col-12 col-md-8 d-flex flex-column align-items-start">
            <h1 className="mainheader1">Climate</h1>
            <h1 className="mainheader2">Change</h1>
            <button onClick={()=>{setExit(true)}} type="button" class="btn btn-success btn-lg mx-2 my-4">
              Know More
            </button>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-end description my-4">
              <h2>THE EARTH</h2>
              <p className="my-3">Earth stands alone as the only known planet capable of sustaining life, a delicate oasis in the vastness of space where ecosystems and biodiversity thrives. However, our actions are casting a shadow over this unique haven. Human activities, particularly the burning of fossil fuels and deforestation, are altering the Earth's climate at an unprecedented rate, leading to a phenomenon known as climate change</p>
          </div>
        </div>
      </div>
      <Earth exit={{exit, setExit}} />
    </div>
  );
};

export default Home;