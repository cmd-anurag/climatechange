import React from 'react'

const Footprint = () => {

    const calculateFootprint = (e) => {
            e.preventDefault();
            
            
            const carEmissionPerKm = 0.25; 
            const busEmissionPerKm = 0.149; 
            const trainEmissionPerKm = 0.036; 
            const planeEmissionPerKm = 0.195; 
            const electricityEmissionPerKwh = 0.475; 
            const gasEmissionPerKwh = 0.2; 
            const wasteEmissionPerPerson = 0.59; 
            
            
            const carKm = parseFloat(document.getElementById("carKm").value);
            const carDays = parseInt(document.getElementById("carDays").value);
            const busKm = parseFloat(document.getElementById("busKm").value);
            const busDays = parseInt(document.getElementById("busDays").value);
            const planeKm = parseFloat(document.getElementById("planeKm").value); 
            const electricityKwh = parseFloat(document.getElementById("electricityKwh").value);
            const gasKwh = parseFloat(document.getElementById("gasKwh").value); 
            const wasteKg = parseFloat(document.getElementById("wasteKg").value);
            const dietChoice = document.getElementById("dietChoice").value.toLowerCase(); 
        
          
            const carEmission = carKm * carEmissionPerKm * carDays;
            const busEmission = busKm * busEmissionPerKm * busDays;
            const planeEmission = planeKm * planeEmissionPerKm;
            const electricityEmission = electricityKwh * electricityEmissionPerKwh;
            const gasEmission = gasKwh * gasEmissionPerKwh;
            const wasteEmission = wasteKg * wasteEmissionPerPerson;
        
            
            let dietEmission;
            switch (dietChoice) {
                case 'omnivore':
                    dietEmission = 3.3;
                    break;
                case 'vegetarian':
                    dietEmission = 2.5;
                    break;
                case 'vegan':
                    dietEmission = 1.5; 
                    break;
                default:
                    dietEmission = 0;
                    break;
            }
        
            const totalEmission = carEmission + busEmission + planeEmission +
                                  electricityEmission + gasEmission + wasteEmission + dietEmission;
        
            alert("Your carbon footprint is approximately " + totalEmission.toFixed(2) + " kg CO2 equivalent per day.");
        }
return (
    <div className='footprintbg'>
            <div style={{maxWidth: '50%'}} className='container'>
            <h1 style={{color: 'white', textAlign: 'center', fontWeight: '1000'}} className='py-3'>Carbon Footprint Calculator</h1> <br />
            <form id="carbonFootprintForm">
                    <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="carKm" placeholder=" " min="0"/>
                    <label for="carMiles">Miles driven by car per day</label>
                    </div>

                    <div class="form-floating mb-3">
                    <input type="number" max="7" class="form-control" id="carDays" placeholder=" " min="0"/>
                    <label for="carDays">Number of days per week you drive</label>
                    </div>

                    <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="busKm" placeholder=" " min="0"/>
                    <label for="busMiles">Kilometers traveled by bus per day</label>
                    </div>

                    <div class="form-floating mb-3">
                    <input type="number" max="7" class="form-control" id="busDays" placeholder=" " min="0"/>
                    <label for="busDays">Number of days per week you take the bus</label>
                    </div>

                    <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="planeKm" placeholder=" " min="0"/>
                    <label for="planeMiles">Miles traveled by plane per year</label>
                    </div>

                    <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="electricityKwh" placeholder=" " min="0"/>
                    <label for="electricityKwh">Electricity consumption in kWh per month</label>
                    </div>

                    <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="gasKwh" placeholder=" " min="0"/>
                    <label for="gasTherms">Natural gas consumption in therms per month</label>
                    </div>

                    <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="wasteKg" placeholder=" " min="0"/>
                    <label for="wasteProduction">Waste production in pounds per day</label>
                    </div>

                    <div class="form-floating mb-3">
                    <select class="form-select" id="dietChoice" aria-label="Select your diet type">
                            <option value="omnivore">Omnivore</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                    </select>
                    <label for="dietChoice">Your diet type</label>
                    </div>

<button style={{fontSize: '15px'}} type="button" onClick={calculateFootprint} class="btn btn-success">Calculate Carbon Footprint</button>

            </form>
            </div>
    </div>
)
}

export default Footprint
