import React from 'react'
import '../Styles/BodyWork.css'
import BodyWorkImg2 from '../assets/body.jpg'
import BookUsBtn from '../Components/BookUsBtn';
import WhatsappPopUp from '../Components/WhatsappPopUp';
const BodyWork = () => {
  return (
    <div>

      <section className='brief-highlight-section pt-5 pb-4 ps-3'>
        <div  className='brief-talk '>
          <h3>Best Spray and Dent Repairs</h3>
          <p>Our team is dedicated to delivering excellence in every detail. Experience the difference craftmanship makes. Choose us today.  </p>
        </div>
      </section>


        <article className='m-auto mt-3'>
        <h5>Body Work & Spraying</h5>
        <div className='bw-underline'></div>
        <p>We know an accident is anything but convinent, which is why we restore vehicles to their original condition,delivering flawless finishes and unparalleled quality.</p>
        <p>Whether it's minor den repairs, extensive bodywork, or custom paint jobs, we provide personalized solutions to meet every customer's needs.</p>
        </article>
        <BookUsBtn/>
        <WhatsappPopUp/>
    </div>
  )
}

export default BodyWork