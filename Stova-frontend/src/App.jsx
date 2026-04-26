
import './index.css'; 
import Navigation from './components/Navigation'; 
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import heroimage from './assets/hero/hero1.jpg';
import HotelListings from './components/HotelListings';


function App() {
 
  return (
    <>
    <BrowserRouter>
      <Navigation/>
      <div className="relative min-h-screen bg-black/40">
        <Hero />
        <img
          src={heroimage}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-70 brightness-60 backdrop-brightness-10 backdrop-blur-3xl"
        />
      </div>
    {/* <div className='absolute inset-0'>
      <img src={heroimage} alt="hero" className='w-full h-full object-cover opacity-50' />
    </div> */}
     
      <HotelListings/>
      
        
      </BrowserRouter>  
        
    </>
  )
}

export default App

