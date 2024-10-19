import React from 'react';
import './Intro.css';
import intro_1 from '../../assets/intro-1.png';
import intro_2 from '../../assets/intro-2.png';

const Intro = () => {
  return (
    <div>
      <h2 className="intro-headline">
        Our aim is to empower rural artisans by providing hands-on training in traditional crafts, enhancing their skills, fostering creativity, and building pathways for sustainable livelihoods and self-reliance.
      </h2>

      <div className="intro">
        <div className="intro-item">
          <img src={intro_1} alt="Intro 1" />
        </div>
        <div className="intro-items">
          <div className="intro-text-container">
            <img src={intro_2} alt="Intro 2" />
            <div className="intro-text">
  <strong>Bal Jyoti Foundation</strong> has initiated a visionary approach to serve rural areas by improving their livelihoods and ensuring sustainability through craft and textile-based projects. The foundation was established in February 2019 by Mr. Rupak Kumar.

  Our team is composed of young, dynamic designers and engineers who aim to incorporate innovative design ideas into every aspect of craft and textile development. We focus on Below Poverty Line (BPL) families in rural areas, providing them with opportunities for growth and leadership, which lies at the heart of our mission.
</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
