
import React from 'react'
import { Link } from 'react-router-dom'

const Solutions = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div style={{ maxWidth: '900px'}} id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        
        <div  className="carousel-inner">
            <div className="carousel-item active">
                <img style={{aspectRatio: '5/3'}} src="https://solarismypassion.com/wp-content/uploads/2023/02/Effect-of-solar-energy-on-climate-change.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
                <h5>Power Down and Shift Up</h5>
                <p>Reduce your reliance on fossil fuels at home. Use energy-efficient appliances, switch to LED bulbs, and air-dry clothes whenever possible. Explore options for switching to renewable energy sources for your electricity.</p>
            </div>
            </div>
            <div className="carousel-item">
            <img style={{aspectRatio: '5/3'}} src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MFKBDNTMW5FLPJNCDIRDTX57JY.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
                <h5 className='fs-5'>Travel Green</h5>
                <p className='fs-6'>Leave the car behind! Walk, bike, or use public transportation whenever possible. If you must drive, consider carpooling or switching to a fuel-efficient or electric vehicle.</p>
            </div>
            </div>
            <div className="carousel-item">
            <img style={{aspectRatio: '5/3'}} src="https://media.eastman.com/is/image/eastman/reduce-reuse-recycle?$corporatepreset$&wid=2000" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
                <h5>The Three R's</h5>
                <p>Reduce, reuse, and recycle! Avoid single-use plastics and bring your own reusable bags for shopping. Look for products with minimal packaging and choose durable items over disposable ones. Properly recycle what you can't avoid throwing away.</p>
            </div>
            </div>
            <div className="carousel-item">
            <img style={{aspectRatio: '5/3'}} src="https://elion.co.in/wp-content/uploads/2023/08/carbonfootprint1-1024x594.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
                <h5>Reduce your Carbon Footprint</h5>
                <p>By minimizing the amount of greenhouse gases we emit into the atmosphere, we can help slow the rate of global warming and protect the health of our planet.</p>
            </div>
            </div>
        </div>
            <button className="carousel-control-prev centered-control" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next centered-control" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Solutions
