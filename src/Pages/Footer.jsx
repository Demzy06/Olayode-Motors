import React from 'react'
import '../Styles/Footer.css';
const Footer = () => {
  return (
    <div>
      <footer className='mt-2'>

        <section className='company-socials text-light p-3'>

          <div className=''>
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
            <p>General Maintenance</p>
            <p>Oil Change</p>
            <p>Body Work & Spraying</p>
            <p>AC Maintenance</p>
          </div>

          <div>
            <div>
              <h3>Information</h3>
            </div>
            <p>Contact Us</p>
            <p>News</p>
            <p>Gallery</p>
          </div>

          <div >
            <div>
              <h3>Company</h3>
            </div>
            <p>About Us</p>
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