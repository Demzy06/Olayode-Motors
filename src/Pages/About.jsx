import React from 'react'
import '../Styles/About.css'
import MissionPic from '../assets/Mission-pic.jpg';
import CustomerServicePic from '../assets/Customer-Service-pic.jpg';
import CarServicePic from '../assets/carservice-img.jpg';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <article className='w-100'>
        <div className="about-us text-center m-auto pt-5 d-flex flex-column">

        <h2 className='mb-4'>About us</h2>
        <div className='underline w-25 mb-3 m-auto '></div>
        <h3 className='mb-4'>Best Car Dealer and Auto Repair In Lagos Nigeria</h3>
        <p>OLAYODE MOTORS is one of the best automobile car dealers that renders auto services in Nigeria, with a reputable customer satisfaction. We proud ourselves with swift delivery within a pocket friendly budget, when it comes to car dealership and auto services in <span className='text-danger'>Nigeria</span>.</p>

        <p>Olayode Motors and Repairs is dedicated to setting the standard for excellence in the automotive industry. As a cornerstone of our community, we pride ourselves on delivering unparalleled customer experiences through our comprehensive range of automotive sales and services. At Olayode Motors and Repairs, we understand the importance of trust and reliability when it comes to purchasing a vehicle or entrusting your car to be serviced. That's why our mission is rooted in the principles of integrity, professionalism, and customer-centricity.</p>

        <p>In our state-of-the-art service center, our team of skilled technicians is committed to providing comprehensive repair and maintenance solutions to keep our customers safely on the road. From routine oil changes and tire rotations to complex engine diagnostics and repairs, we utilize the latest technology and industry best practices to ensure optimal performance and longevity for every vehicle we service.</p>
        </div>

        <section className='company-personalities-container w-100'>

          <div className='personalities-card-grey pt-5 pb-5'>
          <div className='our-mission text-center m-auto'>
            <div className='img-container m-auto mb-4'>
            <img src={MissionPic} alt="" />
            </div>

            <h3>Our Mission</h3>
            <p>At Olayode Motors & Repairs, we're dedicated to delivering automotive excellence through personalized service, craftmanship, and innovations. Our mission is to redefine the automotive experience by exceeding expectations and fostering long-lasting relationship with our clients.</p>
          </div>
          </div>

          <div className='personalities-card-white pt-5 pb-5'>
          <div className='our-customer-service text-center m-auto'>
            <div className='img-container m-auto mb-4'>
            <img src={CustomerServicePic} alt="" className=''/>
            </div>
            <h3>Our Customer Service</h3>
            <p>We believe in treating our customers like family. Your satisfaction is our driving force, and we're committed to making every interaction as friendly, helpful, and hassle-free as possible. From answering questions to addressing your concerns, we're here to provide the support and assistance you need.</p>
          </div>
          </div>

          <div className='personalities-card-grey pt-5 pb-5 w-100'>
          <div className='vehicle-service text-center m-auto'>
            <div className='img-container m-auto mb-4'>
            <img src={CarServicePic} alt="" />
            </div>
            <h3>Vehicle Services</h3>
            <p>Trust us for expert service, ensuring your ride runs smoothly and safely. Our skilled professionals provide meticulous care and attention to detail, keeping your car in top condition.</p>
          </div>
          </div>
            

            {/* <div>
          <div>
            <div>
            <img src="" alt="" />
            </div>
            <h5></h5>
            <p></p>
          </div>
            </div> */}

            <div className='text-center pt-4 pb-4'>
              <h3 className='mb-3'>Save Big On Your Next Car</h3>
              <Link to='/contact' className='text-decoration-none'>

              <button className='contact-us-btn text-light'>Contact Us </button>
              </Link>
            </div>
        </section>
      </article>
    </div>
  )
}

export default About