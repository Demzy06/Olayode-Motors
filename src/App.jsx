import { Routes,Route, } from 'react-router-dom';
import './App.css'
import Navbar from './Layouts/Navbar'
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import { useEffect } from 'react';
import GeneralService from './Components/GeneralService';
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
        <Route path='generalService' element={<GeneralService/>}/>
       </Routes>
       <Footer/>
      
    </div>
  )
}

export default App
