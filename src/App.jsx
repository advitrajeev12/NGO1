import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Navbar and Footer for navigation
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'; // Import the ScrollToTop component

// Main pages
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import JoinUs from './Components/JoinUs';
import Events from './Components/Events';
import Contacts from './Components/Contacts';
import Intervention from './Components/Intervention';
import Donation from './Components/Donation';
import MeetTheTeam from './Components/Team';

// Interventions
import Rugs from './Components/Rugs';
import Bamboo from './Components/Bamboo';
import Stitching from './Components/Stitching';
import Basketry from './Components/Basketry';

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* This will ensure scroll-to-top behavior on route change */}
      <Navbar /> {/* Navbar will be displayed on all pages */}

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/join-us/intern" element={<JoinUs type="intern" />} />
        <Route path="/join-us/trainee" element={<JoinUs type="trainee" />} />
        <Route path="/join-us/volunteer" element={<JoinUs type="volunteer" />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<Contacts />} />

        {/* Interventions Pages */}
        <Route path="/intervention" element={<Intervention />} />
        <Route path="/intervention/rugs" element={<Rugs />} />
        <Route path="/intervention/bamboo" element={<Bamboo />} />
        <Route path="/intervention/basketry" element={<Basketry />} />
        <Route path="/intervention/stitching" element={<Stitching />} />

        {/* Single Donation Page for Both Donation and Donation/Make Paths */}
        <Route path="/donation" element={<Donation />} />
        <Route path="/donations/donation" element={<Donation />} />

        {/* Team Page */}
        <Route path="/team" element={<MeetTheTeam />} />
      </Routes>

      <Footer /> {/* Footer will be displayed on all pages */}
    </Router>
  );
};

export default App;
