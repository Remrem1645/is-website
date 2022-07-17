import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Locations from './components/pages/Locations';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/locations' element = {<Locations />} />
        <Route path = '/gallery' element = {<Gallery />} />
        <Route path = '/contact' element = {<Contact />} />
        <Route path = '/services' element = {<Services />} />
      </Routes>
    </>
  );
}

export default App;
