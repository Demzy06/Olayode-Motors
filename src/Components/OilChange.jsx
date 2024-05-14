import React from 'react'
import '../Styles/OilChange.css'
import BookUsBtn from '../Components/BookUsBtn'
import WhatsappPopUp from '../Components/WhatsappPopUp'
const OilChange = () => {
  return (
    <div>
      <section className='brief-quote-section pt-5 pb-4 ps-3'>
        <div  className='brief-talk '>
          <h3>Swift Oil Change Service</h3>
          <p>Trust our experience team for professional oil changes and comprehensive automotive care, ensuring your vehicle performs at its best mile after mile. </p>
        </div>
      </section>

      <article className='m-auto mt-3'>
        <h5>Oil Change Service</h5>
        <div className='oc-underline'></div>
        <p>The engine of your vehicle serves as the life and bloodline of your engine, and without it there are chances that so many things could go wrong.</p>
        <p>Excelllent engine oil does mmore for an engine than simple lubrication. it provides cooling, cleanses remove wear particles, increases gas milelage and promotes vehicle longevity.</p>
        <p>Consult Our experienced technicians today for your oil change.</p>
      </article>
      <BookUsBtn/>
      <WhatsappPopUp/>
    </div>
  )
}

export default OilChange