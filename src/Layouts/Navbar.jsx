import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Navbar.css';
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='helooo' href="#home">OLAYODE MOTORS & REPAIRS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" >
           <Nav className= 'navbar-links'>
            
            <div className='d-flex align-items-center'>
              <Link to="/" className='hey text-decoration-none text-dark h-50'>
                <p className=' home-btn'>Home</p>
              </Link>
              </div>

            <div href="#home" className='hey d-flex align-items-center'>
              <Link to="/services" className='text-decoration-none text-dark h-50'>
                <p className='link'>Services</p>
              </Link>
              </div>

              <div className=' d-flex align-items-center'>
              <Link to="/about" className='text-decoration-none text-dark h-50'>
                <p className='link'>About Us</p>
              </Link>
              </div>

              <div className='d-flex align-items-center'>
              <Link to="/contact" className='text-decoration-none text-dark h-50'>
                <p className='link'>Contact Us</p>
              </Link>
              </div>

              <div  className='d-flex align-items-center'>
              <Link to="gallery" className='text-decoration-none text-dark h-50'>
                <p className='link'>Gallery</p>
              </Link>
              </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;