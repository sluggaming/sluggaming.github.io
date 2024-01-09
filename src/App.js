import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Staff from './pages/Staff';
import Contact from './pages/Contact'
import Recruitment from './pages/Recruitment'
import Teams from './pages/Teams';
import Achievements from './pages/Achievements';
import ScrollToTop from './components/ScrollToTop';
import Apex from './pages/games/Apex';
import COD from './pages/games/COD';
import League from './pages/games/League';
import Overwatch from './pages/games/Overwatch';
import Rocket from './pages/games/Rocket';
import Valorant from './pages/games/Valorant';

function App() {
  return (

    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path="/sluggaming" element={< Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/recruitment' element={<Recruitment />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='*' element={<NoPage />} />
        <Route path='/teams/apex_legends' element={<Apex />} />
        <Route path='/teams/call_of_duty' element={<COD />} />
        <Route path='/teams/league_of_legends' element={<League />} />
        <Route path='/teams/overwatch' element={<Overwatch />} />
        <Route path='/teams/rocket_league' element={<Rocket />} />
        <Route path='/teams/valorant' element={<Valorant />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
