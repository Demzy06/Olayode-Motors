import { Routes,Route, } from 'react-router-dom';
import './App.css'
import { useEffect } from 'react';
import Navbar from './Layouts/Navbar'
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Footer from './Components/Footer';
import GeneralService from './Components/GeneralService';
import BodyWork from './Components/BodyWork';
import AirMaintenance from './Components/AirMaintenance';
import VehicleUpholstery from './Components/VehicleUpholstery';
import OilChange from './Components/OilChange';
function App() {
 
  return (
    <div>
      
      <Navbar/>
       <Routes>
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='services' element={<Services/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />    
        <Route path='gallery' element={<Gallery/>} />    
        <Route path='generalService' element={<GeneralService/>} />
        <Route path='bodyWork' element={<BodyWork/>} />
        <Route path='airMaintenance' element={<AirMaintenance/>} />
        <Route path='vehicleUpholstery' element={<VehicleUpholstery/>} />
        <Route path='oilChange' element={<OilChange/>} />
       </Routes>
       <Footer/>
      
    </div>
  )
}

export default App
