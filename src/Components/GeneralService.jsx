import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/GeneralServices.css'
import GeneralServiceBgrcPic from '../assets/generalservice-bgrc-pic.jpg'
const GeneralService = () => {

  return (
    <div>
      <section className='brief-talk-section pt-5 pb-5 ps-4'>
        
        <div  className='brief-talk '>
          <h3>Top Notch Maintenance</h3>
          <p>At our expert car repair shop, where quality meets reliability. From routine oil changes to brake inspections, our expert technicians provide top-notch general car maintenance services.</p>
        </div>
      </section>

      <article className='m-auto'>
        <h6>ABOUT OUR CAR MAINTENANCE SERVICES</h6>
        <p>Regular Maintenance is essential for every vehicle. By bringing your car in for services like a tune-up, oil changes, belt replacement, body work and spraying, and many more, you can avoid more costly repairs in the future.</p>
        
        <p>We at Olayode Motors & Repairs and our expert car repair technicians are herr to make sure your car runs the way it should. If you aren't sure what your car needs, <Link className='text-dark'>give us a call</Link> and schedule a tune-up to get started! </p>
      </article>
    </div>
  )
}

export default GeneralService