import React, { useState, useRef } from 'react'
import GlobalTemperature from './GlobalTemperature'
import CarbonEmissions from './CarbonEmissions'
import EnergyConsumption from './EnergyConsumption'

const Visualisations = () => {
    const [selected, setSelected] = useState('button1')
  return (
    <div>
      <h3 className='py-2' style={{fontWeight: '600'}}>What does the data show?</h3>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input onClick={()=>{setSelected('button1')}} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
        <label className="btn btn-outline-danger" htmlFor="btnradio1">Global Temperature Average</label>

        <input onClick={()=>{setSelected('button2')}} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
        <label className="btn btn-outline-danger" htmlFor="btnradio2">Greenhouse Emissions</label>

        <input onClick={()=>{setSelected('button3')}} type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="btn btn-outline-danger" htmlFor="btnradio3">Energy Consumption</label>
      </div>
      {selected==='button1' && <div>
        <GlobalTemperature />
        </div>}
        {selected==='button2' && <div>
        <CarbonEmissions />
        </div>}
        {selected==='button3' && <div>
        <EnergyConsumption />
        </div>}
    </div>
  )
}

export default Visualisations
