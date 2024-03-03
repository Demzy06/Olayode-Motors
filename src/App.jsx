import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Navbar from './Layouts/Navbar'
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>

       <Routes>
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='services' element={<Services/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />        
       </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
