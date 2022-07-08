import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Locations from './components/pages/Locations';
import Services from './components/pages/Gallery';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/locations' element = {<Locations />} />
        <Route path = '/gallery' element = {<Services />} />
        <Route path = '/contact' element = {<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
