import React, { useEffect, useState } from "react";
import Earth from "./Earth";

const Home = () => {

  // const [loaded, setLoaded] = useState(false);

  // useEffect(()=> {
  //   const timer = setTimeout(() => {
  //     setLoaded(true);
  //   }, 3400);
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, []);


  return (
    <div>
      <div className={`container my-4`}>
        <div className="row">
          <div className="col-12 col-md-8 d-flex flex-column align-items-start">
            <h1 className="mainheader1">Climate</h1>
            <h1 className="mainheader2">Change</h1>
            <button type="button" class="btn btn-primary btn-lg mx-5 my-4">
              Know More
            </button>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center description my-4">
              <h2>What is Climate Change?</h2>
              <p>Climate change refers to long-term shifts in temperatures and weather patterns. Such shifts can be natural, due to changes in the sun’s activity or large volcanic eruptions. But since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil and gas.</p>
          </div>
        </div>
      </div>
      <Earth />
    </div>
  );
};

export default Home;