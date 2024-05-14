import React from 'react'
import '../Styles/BookUsBtn.css'
import { Link } from "react-router-dom";
const BookUsBtn = () => {
  return (
    <div>
      <Link to='/contact' className='ps-3'>
      <button className='book-us-btn '>Book An Appointment</button>
      <div className='btn-underline'></div>
      </Link>
    </div>
  )
}

export default BookUsBtn