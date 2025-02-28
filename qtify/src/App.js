import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import Hero from './Hero/Hero';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Hero />
    
   
    </BrowserRouter>
  );
}

export default App;
