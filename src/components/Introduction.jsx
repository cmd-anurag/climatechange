import React from 'react'
import ccgif from '../assets/ccgif.gif'

const Introduction = () => {
  return (
    <>
    <div className='d-flex'>
    <div className="row introduction py-4">
      <div className="col-12">
        <h2>What is Climate Change?</h2>
        <p>Climate change refers to long-term changes in temperature, precipitation, wind patterns, and other aspects of the Earth's climate system. It is primarily caused by human activities, such as the burning of fossil fuels and deforestation, which release greenhouse gases into the atmosphere.</p>
      </div>
      
      <div className="col-12">
        <h2>Why is Climate Change a Problem?</h2>
        <p>Climate change poses significant threats to the environment, ecosystems, and human societies. It leads to rising global temperatures, sea-level rise, extreme weather events, loss of biodiversity, and disruptions to agriculture and water resources. Addressing climate change is crucial for the sustainability and well-being of future generations.</p>
      </div>
    </div>
    <div>
      <img src={ccgif} alt="Climate Change" className="img-fluid" />
    </div>
    </div>
      </>
  )
}

export default Introduction
