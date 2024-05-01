import React from 'react'
import '../Styles/Hero.css'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import CarSprayImg from '../assets/CarSpray.jpg';
import CarSprayImg2 from '../assets/car-spray4.jpg'
import CarSprayImg3 from '../assets/car-spray3.jpg';
import CarSprayImg4 from '../assets/ser-car-body-work.jpg'
import GenServiveImg from '../assets/general-service.jpg';
import LexusImg1 from '../assets/Lexus-suv-1.jpg';
import CorollaHybridImg from '../assets/Corolla-Hybrid.webp'
import ToyotaHiluximg from '../assets/Toyota-hilux.webp';
import LexusRxImg from '../assets/2021-LexusRX-350.webp';
import LexusESImg from '../assets/Lexus-ES-350.webp'
import BenzAmgGleImg from '../assets/Benz-AMG-GLE63.webp';
import BenzMLImg from '../assets/Benz-ML350.webp';
import BenzGleImg from '../assets/Benz-GLE450.webp';
import ToyotaCorollaImg from '../assets/2021-Toyota-Corolla.webp';
import ToyotaSiennaImg from '../assets/2018-Toyota-Sienna.webp';
import GeneralMaintenanceImg  from '../assets/general-maintenancepic.jpg';
import AcRepairPic from '../assets/AC-repair-pic.jpeg';
import CarInteriorPic from '../assets/Car-interior-pic.jpg'
import OilChangePic from '../assets/oil-change-pic.jpg';
import CarIcon from '../assets/car-icon-1.png';
import SatisfactionIcon from '../assets/satisfaction-1.png';
import certifiedIcon from '../assets/circular-label-with-certified-stamp-1.png';
const Hero = () => {
  return (
    <div>

   
    <main className='hero-container'>

      {/*  Carousel section*/}
      
      <div className='carousel'>
      <Carousel className='carousel-container w-100 m-auto'>
      <Carousel.Item className='carousel-items'>
        <img
          className="d-block w-100"
          src={CarSprayImg2}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className='carousel-items'>
        <img
          className="d-block w-100"
          src={CarSprayImg}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item className='carousel-items'>
        <img
          className="d-block w-100"
          src={CarSprayImg3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-items'>
        <img
          className="d-block w-100"
          src={CarSprayImg4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-items'>
        <img
          className="d-block w-100"
          src={GenServiveImg}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      </div>

      {/* Header section */}
      <header className='header mt-5 w-100'>
        <div className='header-text m-auto text-center'>
        <h2>Premium Auto Dealership Offering Luxury Cars And Expert Car Repair Services </h2>
        <p>Experience Luxury And Affordability  </p>
        </div>

        {/* Luxury car image section */}
        <section className='luxurycars-img d-flex justify-content-evenly'>
          <div>
            <img src={LexusImg1} alt="car-pic" />
            <p className='text-center'>Lexus Rx</p>
          </div>
          <div>
            <img src={CorollaHybridImg} alt="" />
            <p className='text-center'>Corolla Hybrid</p>
          </div>
          <div>
            <img src={ToyotaHiluximg} alt="" />
            <p className='text-center'>Toyota Hilux</p>
          </div>
          <div>
            <img src={LexusRxImg} alt="" />
            <p className='text-center'>Lexus RX 350</p>
          </div>
          <div>
            <img src={LexusESImg} alt="" />
            <p className='text-center'>Lexus ES 350</p>
          </div>
          <div>
            <img src={BenzAmgGleImg} alt="" />
            <p className='text-center'>Mercedes-Benz AMG GLE 63</p>
          </div>
          <div>
            <img src={BenzMLImg} alt="" />
            <p className='text-center'>Mercedes-Benz ML 450</p>
          </div>
          <div>
            <img src={BenzGleImg} alt="" />
            <p className='text-center'>Mercedes-Benz GLE450</p>
          </div>
          <div>
            <img src={ToyotaCorollaImg} alt="" />
            <p className='text-center'>Toyota Corolla</p>
          </div>
          <div>
            <img src={ToyotaSiennaImg} alt="" />
            <p className='text-center'>Toyota Sienna</p>
          </div>
        </section>
      </header>

      <hr/>

      {/* Company Services */}
      <section className='company-services  mt-5'>
        <div className="services-briefing my-5">
        <h3>Our Services</h3>
         <div className='os-underline'></div>
         <p>Our automotive services prioritize both your car and your comfort. From routine maintenance to complex repairs, our friendly team ensures a seamless experience tailored to your needs. Trust us to keep you and your vehicle safely on the road.</p>
        </div>

         <div className='our-services text-light '>

          <div>
            <img src={GeneralMaintenanceImg} alt="" />
            <Link to='generalService' className='services text-light text-decoration-none border-0'>
            <p>General Maintenance</p>
            </Link>
          </div>
          
          <div>
            <img src={CarSprayImg4} alt="" />
            <Link to='bodyWork' className='services text-light text-decoration-none'>
            <p>Body Work & Spraying</p>
            </Link>
          </div>

          <div>
            <img src={AcRepairPic} alt="" />
            <Link to='airMaintenance' className='services text-light text-decoration-none boder-top-0'>
            <p>A/C Maintenance</p>
            </Link>
          </div>

          <div>
            <img src={CarInteriorPic} alt="" />
            <Link to='vehicleUpholstery' className='services text-light text-decoration-none border-top-0' >           
            <p>Vehicle Upholstery</p>
            </Link>
          </div>

          <div>
            <img src={OilChangePic} alt="" />
            <Link to='oilChange' className='services text-light text-decoration-none border-top-0'>
            <p>Oil Change</p>
            </Link>
          </div>
         </div>
      </section>

      {/* About Us */}
      <article className='about-us-containe m-auto'>
        <div className='about-us m-auto'>
          <h3>About Us</h3>
          <div className='os-underline'></div>
          <h5 className='text-center'>Luxury Auto Dealership And Auto Services </h5>
          <p className='text-center'>OLAYODE MOTORS is one of the best automobile car dealers that renders auto services in Nigeria, with a reputable customer satisfaction. We proud ourselves with swift delivery within a pocket friendly budget, when it comes to car dealership and auto services in Nigeria.</p>
          <div className='d-flex justify-content-center'>
            <Link to='/about'>
          <button className='about-us-btn  text-light '>More About us</button>
            </Link>
          </div>
        </div>
      </article>

      {/* Customer rating */}
      <aside className='customer-rating-container mt-5 pt-5 pb-5'>
        <div className='customer-rating text-center'>
          <h2 className='mb-4'>Why Our Customers Choose Us</h2>
          <p>As one of the best car dealers and auto sevices provider in Nigeria, we offer the best and also have the <span className='best-price-alight'>best price</span></p>
          <p>Our unwavering commitment is to always prioritize our customer's satisfaction</p>

          <div className='satisfaction-section'>

            <div className='sold-cars-rating'>
              <img src={CarIcon} alt="" />
              <h4>300+</h4>
              <p>VEHICLES SOLD YEARLY</p>
            </div>

            <div className='customer-satisfaction-rating'>
              <img src={SatisfactionIcon} alt="" />
              <h4>99%</h4>
              <p>CUSTOMER SATISFACTION</p>
            </div>

            <div className='certified-rating'>
              <img src={certifiedIcon} alt="" />
              <h4>100%</h4>
              <p>PREMIUM VEHICLES </p>
            </div>

          </div>


          </div>   
      </aside>
    </main>
    </div>
  )
}

export default Hero