import React from 'react';
import '../Styles/Contact.css';
import WhatsappPopUp from '../Components/WhatsappPopUp';
import ContactPic from '../assets/contact-us-pic.jpg';
const Contact = () => {
  const myStyle ={
    color: '#BE1717'
  };
  return (
    <div>
      <section>
        <div>
          <img src={ContactPic} alt="" />
        </div>

        <div className=' major-contact-infos text-center m-auto mt-3 d-flex flex-column'>
          <h2 className='mb-3'>Get In <span style={myStyle}>Touch</span></h2>
          <p className='mb-4'>We appreciate your visit. For further enquiries kindly click on the chat with us button. You can also visit our office opened from 8a.m - 5p.m Mondays to Fridays and 9a.m - 5p.m on Saturdays.  </p>

          <div className='office-header m-auto text-light mb-3 d-flex'>
            <p>EGBEDA OFFICE</p>
            </div>

          <p className='mb-4'>207, Idimu Egbeda Road, Aboru Estate, Alimosho, Lagos, Nigeria</p>
          <p className='mb-4'>Beside YemKem-Plaza, Car Wash Bus Stop</p>
          <p className='mb-4'>+234-802-317-5440</p>
          <p className='mb-4'>+234-806-818-9900</p>
        </div>
      </section>
      <WhatsappPopUp/>
    </div>
  )
}

export default Contact