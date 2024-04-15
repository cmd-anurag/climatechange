import React from 'react'

const Footprint = () => {

    const calculateFootprint = (e) => {
            e.preventDefault();
            
            
            const carEmissionPerKm = 0.25; 
            const busEmissionPerKm = 0.149; 
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
        
            document.getElementById('resultfootprint').innerText = "Your carbon footprint is approximately " + totalEmission.toFixed(2) + " kg CO2 equivalent per week.";
        }
return (
    <div className='footprintbg'>
            <div style={{maxWidth: '50%'}} className='container'>
            <h1 style={{textAlign: 'center', fontWeight: '1000'}} className='py-3 gradient-text'>Carbon Footprint Calculator</h1> <br />
            <form id="carbonFootprintForm">
                    <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="carKm" placeholder=" " min="0"/>
                    <label for="carMiles">Kilometers driven by car per day</label>
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
                    <label for="planeMiles">Kilometers traveled by plane per week</label>
                    </div>

                    <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="electricityKwh" placeholder=" " min="0"/>
                    <label for="electricityKwh">Electricity consumption in kWh per month</label>
                    </div>

                    <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="gasKwh" placeholder=" " min="0"/>
                    <label for="gasTherms">Natural gas consumption in kWh per month</label>
                    </div>

                    <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="wasteKg" placeholder=" " min="0"/>
                    <label for="wasteProduction">Waste production in kilograms per day</label>
                    </div>

                    <div class="form-floating mb-3">
                    <select class="form-select" id="dietChoice" aria-label="Select your diet type">
                            <option value="omnivore">Omnivore</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                    </select>
                    <label for="dietChoice">Your diet type</label>
                    </div>

                    <div class="modal fade" id="resultmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Carbon Footprint Result</h1>
                    </div>
                    <div id='resultfootprint' class="modal-body">
                        
                    </div>
                    <div class="modal-footer">
                        <button style={{height: '25px'}} type="button" class="btn btn-success btn-sm" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>

                <button data-bs-toggle="modal" data-bs-target="#resultmodal" style={{fontSize: '15px'}} type="button" onClick={calculateFootprint} class="btn btn-success">Calculate Carbon Footprint</button>

            </form>
            </div>
    </div>
)
}

export default Footprint
