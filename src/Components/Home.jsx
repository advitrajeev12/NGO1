import React from 'react';
import Slider from './Slider';
import './Home.css';

// Import images from assets
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';

// Import icons for interventions
import rugIcon from '../assets/rug-icon.png';
import bambooIcon from '../assets/bamboo-icon.png';
import basketryIcon from '../assets/basketry-icon.png';
import stitchingIcon from '../assets/stitching-icon.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <h2>
        Our aim is to empower rural artisans by providing hands-on training in traditional crafts, enhancing their skills, fostering creativity, and building pathways for sustainable livelihoods and self-reliance.
      </h2>
      
      {/* Single container for both images */}
      <div className="image-gallery">
        <div className="image-container">
          <img src={i1} alt="Showcase of crafted products" className="home-image" />
        </div>
        <div className="image-container">
          <img src={i2} alt="Artisan displaying their work" className="home-image" />
          
        </div>
      </div>

      {/* Interventions Section */}
      <div className="interventions">
        <h3><Link>INTERVENTIONS</Link></h3>
        <ul>
          <li>
            <img src={rugIcon} alt="Rugs Icon" className="intervention-icon" />
            <div className="intervention-name">
              {/* Link to the specific intervention route */}
              <a href="/intervention/rugs">Rugs</a>
            </div>
          </li>
          <li>
            <img src={bambooIcon} alt="Bamboo Icon" className="intervention-icon" />
            <div className="intervention-name">
              <a href="/intervention/bamboo">Bamboo</a>
            </div>
          </li>
          <li>
            <img src={basketryIcon} alt="Basketry Icon" className="intervention-icon" />
            <div className="intervention-name">
              <a href="/intervention/basketry">Basketry</a>
            </div>
          </li>
          <li>
            <img src={stitchingIcon} alt="Stitching Icon" className="intervention-icon" />
            <div className="intervention-name">
              <a href="/intervention/stitching">Stitching</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
