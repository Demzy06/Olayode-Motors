import React from 'react'
import '../Styles/Hero.css'
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
const Hero = () => {
  return (
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
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis quaerat quam enim vitae! Distinctio quos voluptates vitae obcaecati, suscipit alias officiis voluptatum maiores accusantium voluptatibus, consequatur dolor itaque sint?</p>
        </div>

         <div className='our-services text-light '>

          <div>
            <img src={GeneralMaintenanceImg} alt="" />
            <p>General Maintenance</p>
          </div>
          
          <div>
            <img src={CarSprayImg4} alt="" />
            <p>Body Work & Spraying</p>
          </div>

          <div>
            <img src={AcRepairPic} alt="" />
            <p>A/C Maintenance</p>
          </div>

          <div>
            <img src={CarInteriorPic} alt="" />
            <p>Vehicle Upholstery</p>
          </div>

          <div>
            <img src={OilChangePic} alt="" />
            <p>Oil Change</p>
          </div>
         </div>
      </section>

      {/* About Us */}
      <article className='about-us-containe'>
        <div className='about-us m-auto'>
          <h3>About Us</h3>
          <div className='os-underline'></div>
          <h5 className='text-center'>Luxury Auto Dealership And Auto Services </h5>
          <p className='text-center'>OLAYODE MOTORS is one of the best automobile car dealers that renders auto services in Nigeria, with a reputable customer satisfaction. We proud ourselves with swift delivery within a pocket friendly budget, when it comes to car dealership and auto services in Nigeria.</p>
          <div className='d-flex justify-content-center'>
          <button className='w-50 btn btn-danger '>More About us</button>
          </div>
        </div>
      </article>

      {/* Customer rating */}
      <section className='customer-rating-container mt-5 pt-5 pb-5'>
        <div className='customer-rating text-center'>
          <h5>Why Our Customers Choose Us</h5>
          <p>As one of the best car dealers and auto sevices provider in Nigeria, we offer the best and also have the best price</p>
          <p>Our unwavering commitment is to always prioritize our customer's satisfaction</p>

          </div>   
      </section>
    </main>
  )
}

export default Hero