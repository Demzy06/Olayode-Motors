import React from 'react'
import { Link } from "react-router-dom";
import '../Styles/WhatsappPopUp.css'
import WhatsappPic from '../assets/whatsapp.png'
const WhatsappPopUp = () => {
  const WhatsappLink = 'https://wa.link/o5yz2s';
  return (
    <div className='w-100 d-flex justify-content-center'>

    <div className='pop-up-btn d-flex justify-content-center'>
      <button className='p-2 m-auto mb-3'>
        <Link to={WhatsappLink}  className='text-decoration-none text-dark'>
        <span>Need Help?</span>
        <span className='fw-bold ms-1'>Chat with us</span>
        </Link>
        </button>

        <div className='svg-container'>
        <img src={WhatsappPic} alt="whatsapp-icon" className=''/>
        </div>
      </div>

    </div>
  )
}

export default WhatsappPopUp