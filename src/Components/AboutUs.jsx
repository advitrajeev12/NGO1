import React from 'react';
import './AboutUs.css'; // Assuming you have a CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <h2>Welcome to Bal Jyoti Foundation</h2>
      <p className="intro-text">
        The Bal Jyoti Foundation, founded in February 2019 by Mr. Rupak Kumar, is driven by a powerful vision to uplift rural communities by enhancing their livelihoods and ensuring sustainability through crafts and textiles.
      </p>

      {/* Our Vision Section */}
      <div className="box vision-box">
        <h3>1. Our Vision</h3>
        <p>
          At Bal Jyoti Foundation, our vision is to empower artisans by implementing a core product line that showcases their craftsmanship, while establishing sustainable income opportunities to enhance their livelihoods. We are dedicated to fostering leadership within Self Help Groups (SHGs), encouraging community-driven growth and development.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="box mission-box">
        <h3>2. Our Mission</h3>
        <p>
          Our mission is to revive the nearly extinct crafts of India, preserving cultural heritage and supporting at least 300 families each year to rise out of poverty. We aim to sustain these families through craft-based livelihoods, bridging the gap between tradition and modernity, while focusing on the empowerment of women where it is most needed.
        </p>
      </div>

      {/* Our Objectives Section */}
      <div className="box objectives-box">
        <h3>3. Our Objectives</h3>
        <p>
          Our objectives are to provide customers with desired products, ensure artisans earn higher profit margins than normal wages, involve rural communities in the business sector, promote sustainability, and offer stable work to families below the poverty line (BPL). We also seek distributors to help scale our efforts.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
