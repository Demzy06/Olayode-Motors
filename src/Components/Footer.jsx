import React from 'react'
import '../Styles/Footer.css';
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div>
      <footer className='mt-2'>

        <section className='company-socials text-light p-3'>

          <div className='/generalService'>
          <h4>Check Out Our Socials</h4>

          <div className='social-icons d-flex justify-content-between '>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram fa-rotate-90"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-linkedin"></i>

          </div>
          </div>

        </section>

        <section className='customer-care mt-3 m-auto'>
          <div className='mb-0'>
            <h3>Customer Care</h3>
          </div>

          <div className='d-flex align-items-center'>
          <i className="fa-solid fa-phone me-4"></i>
          <div>
            <p className='mb-2'>Phone</p>
            <p className='mb-1'>+234 814 309 5131</p>
          </div>
          </div>
          
          <div className='d-flex align-items-center '>
          <i className="fa-regular fa-envelope-open me-4"></i>
            <div>
              <p className='mb-2'>Email</p>
              <p className='mb-1'>demolaolayode6@gmail.com</p>
            </div>
          </div>
        </section>

        <section className='main-company-footer-infos d-flex pt-4 pb-5'>

          <div>
            <div>
              <h3>Services</h3>
            </div>
            <p><Link to='/generalService' className='text-decoration-none text-dark'>General Maintenance</Link></p>

            <p><Link to='/oilChange' className='text-decoration-none text-dark'>Oil Change</Link></p>

            <p><Link to='/bodyWork' className='text-decoration-none text-dark'>Body Work & Spraying</Link></p>

            <p><Link to='/airMaintenance' className='text-decoration-none text-dark'>AC Maintenance</Link></p>
          </div>

          <div>
            <div>
              <h3>Information</h3>
            </div>
            <p><Link to='/contact' className='text-decoration-none text-dark'>Contact Us</Link></p>
            <p>News</p>
            <p>Gallery</p>
          </div>

          <div >
            <div>
              <h3>Company</h3>
            </div>
            <p><Link to='/about' className='text-decoration-none text-dark'>About Us</Link></p>
            <p>Our Blog</p>
          </div>


          <div>
            <div>
              <h3>Products</h3>
            </div>
            <p>Spray Paint</p>
            <p>Body Filler</p>
          </div>


        </section>

        <section className='copyright'>
          <p className='ms-3'>&copy;2024 Olayode Motors Nigeria. All Rights Reserved </p>
        </section>

      </footer>
    </div>
  )
}

export default Footer