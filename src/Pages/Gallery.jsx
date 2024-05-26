import React from 'react'
import '../Styles/Gallery.css'
import NissanVid from '../VideoPlayer/NissanVid';
const Gallery = () => {
  return (
    <div className='gallery-container m-auto'>
      <section>
        <h6 className='mb-3 mt-3'>Check Out Some Of Our Beautiful Works</h6>
        
        <NissanVid/>
      </section>
    </div>
  )
}

export default Gallery