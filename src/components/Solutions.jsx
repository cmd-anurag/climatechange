import React from 'react'

const Solutions = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div style={{ maxWidth: '900px'}} id="carouselExampleCaptions" class="carousel slide">
        
        <div  class="carousel-inner">
            <div class="carousel-item active">
                <img style={{aspectRatio: '5/3'}} src="https://solarismypassion.com/wp-content/uploads/2023/02/Effect-of-solar-energy-on-climate-change.jpeg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
                <h5>Power Down and Shift Up</h5>
                <p>Reduce your reliance on fossil fuels at home. Use energy-efficient appliances, switch to LED bulbs, and air-dry clothes whenever possible. Consider installing a smart thermostat to optimize heating and cooling. Explore options for switching to renewable energy sources for your electricity.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img style={{aspectRatio: '5/3'}} src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MFKBDNTMW5FLPJNCDIRDTX57JY.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
                <h5 className='fs-5'>Travel Green</h5>
                <p className='fs-6'>Leave the car behind! Walk, bike, or use public transportation whenever possible. If you must drive, consider carpooling or switching to a fuel-efficient or electric vehicle.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img style={{aspectRatio: '5/3'}} src="https://media.eastman.com/is/image/eastman/reduce-reuse-recycle?$corporatepreset$&wid=2000" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
                <h5>The Three R's</h5>
                <p>Reduce, reuse, and recycle! Avoid single-use plastics and bring your own reusable bags for shopping. Look for products with minimal packaging and choose durable items over disposable ones. Properly recycle what you can't avoid throwing away.</p>
            </div>
            </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Solutions
