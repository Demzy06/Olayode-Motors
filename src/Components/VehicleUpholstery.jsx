import React from 'react'
import '../Styles/VehicleUpholstery.css'
import BookUsBtn from '../Components/BookUsBtn'
import WhatsappPopUp from '../Components/WhatsappPopUp'
const VehicleUpholstery = () => {
  return (
    <div>
      <section className='brief-statement-section pt-5 pb-4 ps-3'>
        <div  className='brief-talk '>
          <h3>Top Notch Vehicle Upholtery</h3>
          <p>Elevate your driving experience with experty crafted vehicle upholstery tailored to your style and comfort.</p>
        </div>
      </section>

      <article className='m-auto mt-3'>
        <h5>Vehicle Upholstery</h5>
        <div className='vh-underline'></div>
        <p>Emback on a journey of luxury and comfort with us, your premier destination for expert vehicle upholtery services. Your vehicle is more than just a mode of transportation- it;s an extension of your personality and style. At Olayode Motors & Repairs, we understand the importance of a well-appointed interior, and we're here to help you transform your vehicle into a sanctuary on wheels. </p>
        <p>Our team of skilled technicians brings years of experience and expertise to every upholstery project. Whether you're dealing with worn-out seats, faded carpets, or damaged headliners, we have the knowledge and skill to restore and enhance your vehicle's interior to its former glory.</p>
        <p></p>
      </article>
      <BookUsBtn/>
      <WhatsappPopUp/>
    </div>
  )
}

export default VehicleUpholstery