import React from 'react'

const Footprint = () => {

    const calculateFootprint = (e) => {
            e.preventDefault();
            // Constants for carbon emissions (in kg CO2 equivalent) per activity
            const carEmissionPerKm = 0.25; // Average for gasoline-powered cars (converted from mile to km)
            const busEmissionPerKm = 0.149; // Average for diesel buses (converted from mile to km)
            const trainEmissionPerKm = 0.036; // Average for trains (converted from mile to km)
            const planeEmissionPerKm = 0.195; // Average for short-haul flights (converted from mile to km)
            const electricityEmissionPerKwh = 0.475; // Average for electricity consumption
            const gasEmissionPerKwh = 0.2; // Average for natural gas consumption (approximated, as therms are not directly convertible to kWh)
            const wasteEmissionPerPerson = 0.59; // Average for waste production per person (converted from pound to kg)
            
            // Retrieve values from HTML input fields
            const carKm = parseFloat(document.getElementById("carKm").value);
            const carDays = parseInt(document.getElementById("carDays").value);
            const busKm = parseFloat(document.getElementById("busKm").value);
            const busDays = parseInt(document.getElementById("busDays").value);
            const planeKm = parseFloat(document.getElementById("planeKm").value); // Assuming per year for plane travel
            const electricityKwh = parseFloat(document.getElementById("electricityKwh").value);
            const gasKwh = parseFloat(document.getElementById("gasKwh").value); // Assuming gas consumption is provided in kWh
            const wasteKg = parseFloat(document.getElementById("wasteKg").value);
            const dietChoice = document.getElementById("dietChoice").value.toLowerCase(); // Ask for diet type
        
            // Calculate total emissions
            const carEmission = carKm * carEmissionPerKm * carDays;
            const busEmission = busKm * busEmissionPerKm * busDays;
            const planeEmission = planeKm * planeEmissionPerKm;
            const electricityEmission = electricityKwh * electricityEmissionPerKwh;
            const gasEmission = gasKwh * gasEmissionPerKwh;
            const wasteEmission = wasteKg * wasteEmissionPerPerson;
        
            // Adding diet-related emissions
            let dietEmission;
            switch (dietChoice) {
                case 'omnivore':
                    dietEmission = 3.3; // Average kg CO2 equivalent emissions per day for an omnivorous diet
                    break;
                case 'vegetarian':
                    dietEmission = 2.5; // Average kg CO2 equivalent emissions per day for a vegetarian diet
                    break;
                case 'vegan':
                    dietEmission = 1.5; // Average kg CO2 equivalent emissions per day for a vegan diet
                    break;
                default:
                    dietEmission = 0; // Default to 0 if diet type is not recognized
                    break;
            }
        
            const totalEmission = carEmission + busEmission + planeEmission +
                                  electricityEmission + gasEmission + wasteEmission + dietEmission;
        
            alert("Your carbon footprint is approximately " + totalEmission.toFixed(2) + " kg CO2 equivalent per day.");
        }
  return (
    <div>
        <h1>Carbon Footprint Calculator</h1>
        <form id="carbonFootprintForm">
            <div class="form-floating mb-3">
            <input type="number" class="form-control" id="carKm" placeholder=" "/>
            <label for="carMiles">Miles driven by car per day</label>
            </div>

            <div class="form-floating mb-3">
            <input type="number" max="7" class="form-control" id="carDays" placeholder=" "/>
            <label for="carDays">Number of days per week you drive</label>
            </div>

            <div class="form-floating mb-3">
            <input type="number" class="form-control" id="busKm" placeholder=" "/>
            <label for="busMiles">Kilometers traveled by bus per day</label>
            </div>

            <div class="form-floating mb-3">
            <input type="number" max="7" class="form-control" id="busDays" placeholder=" "/>
            <label for="busDays">Number of days per week you take the bus</label>
            </div>

            <div class="form-floating mb-3">
            <input type="number" class="form-control" id="planeKm" placeholder=" "/>
            <label for="planeMiles">Miles traveled by plane per year</label>
            </div>

            <div class="form-floating mb-3">
            <input type="number" class="form-control" id="electricityKwh" placeholder=" "/>
            <label for="electricityKwh">Electricity consumption in kWh per month</label>
            </div>

            <div class="form-floating mb-3">
            <input type="number" class="form-control" id="gasKwh" placeholder=" "/>
            <label for="gasTherms">Natural gas consumption in therms per month</label>
            </div>

            <div class="form-floating mb-3">
            <input type="number" class="form-control" id="wasteKg" placeholder=" "/>
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

<button type="button" onClick={calculateFootprint} class="btn btn-primary">Calculate Carbon Footprint</button>

        </form>
    </div>
  )
}

export default Footprint
