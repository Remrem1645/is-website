import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/gallery' element = {<Gallery />} />
        <Route path = '/contact' element = {<Contact />} />
        <Route path = '/services' element = {<Services />} />
        <Route path = '/about-us' element = {<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
