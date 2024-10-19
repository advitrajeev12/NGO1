import React from 'react';
import './Team.css'; // Assuming you will add styles here
import Rupak from '../assets/teams/rupak.png';
import Chandan from '../assets/teams/chandan.png';
import Goli from '../assets/teams/goli.png';
import Rupa from '../assets/teams/rupa.png';
import Rahul from '../assets/teams/rahul.jpg';
import Gauri from '../assets/teams/gauri.png';

import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png'; // Assuming you'll add LinkedIn icon

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: 'Rupak Kumar',
      position: 'Founder & CEO',
      bio: 'Hey, I’m Rupak Kumar, the founder of the Bal Jyoti Foundation. Our organization is committed to uplifting rural artisans and improving their livelihoods. I studied textile design at NIFT Hyderabad, and my passion has always been to revive India’s traditional crafts while creating sustainable income opportunities for communities, especially those living below the poverty line (BPL). Since starting the foundation in 2019, I’ve focused on empowering artisans by working with crafts like rugs, bamboo, and basketry. We aim to give them access to modern markets, improve their financial stability, preserve their cultural heritage, and help build leadership within their communities.',
      image: Rupak,
    },
    {
      name: 'Chandan Kumar',
      position: 'Secretary',
      image: Chandan,
      socialLinks: {
        facebook: 'https://www.facebook.com/chandan.kumar', 
        instagram: 'https://www.instagram.com/chandan.kumar',
        linkedin: 'https://www.linkedin.com/in/chandan-kumar',
      },
    },
    {
      name: 'Akashdeep Khalko',
      position: 'Senior Designer',
      image: Goli,
      socialLinks: {
        facebook: 'https://www.facebook.com/akashdeep.khalako',
        instagram: 'https://www.instagram.com/akashdeep.khalako',
        linkedin: 'https://www.linkedin.com/in/akashdeep-khalako',
      },
    },
    {
      name: 'Rupa Kumari',
      position: 'Head Trainer',
      image: Rupa,
      socialLinks: {
        facebook: 'https://www.facebook.com/rupa.kumari',
        instagram: 'https://www.instagram.com/rupa.kumari',
        linkedin: 'https://www.linkedin.com/in/rupa-kumari',
      },
    },
    {
      name: 'Rahul Kumar',
      position: 'Head Trainer',
      image: Rahul,
      socialLinks: {
        facebook: 'https://www.facebook.com/rahul.kumar',
        instagram: 'https://www.instagram.com/rahul.kumar',
        linkedin: 'https://www.linkedin.com/in/rahul-kumar',
      },
    },
    {
      name: 'Gauri Kumari',
      position: 'Marketing',
      image: Gauri,
      socialLinks: {
        facebook: 'https://www.facebook.com/gauri.kumari',
        instagram: 'https://www.instagram.com/gauri.kumari',
        linkedin: 'https://www.linkedin.com/in/gauri-kumari',
      },
    },
  ];

  return (
    <div className="meet-the-team">
      <h1>Meet The Team</h1>
      
      {/* Display the founder with side-by-side layout */}
      <div className="founder-section">
        <img src={teamMembers[0].image} alt={teamMembers[0].name} className="founder-image" />
        <div className="founder-info">
          <h2>{teamMembers[0].name}</h2>
          <h3>{teamMembers[0].position}</h3>
          <p>{teamMembers[0].bio}</p>
        </div>
      </div>
      {/* New Section: The Team Leading Bal Jyoti Foundation */}
      <h2>The Team Leading <span style={{ color: '#005F1E', fontWeight: 'bold' }}>Bal Jyoti Foundation</span></h2>


      {/* Display the rest of the team members */}
      <div className="team-members">
        {teamMembers.slice(1).map((member, index) => (
          <div className="team-member" key={member.name}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h2>{member.name}</h2>
            <h3>{member.position}</h3>
            <div className="social-links">
              {member.socialLinks && (
                <>
                  {member.socialLinks.facebook && (
                    <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                      <img src={facebook} alt="Facebook" className="social-icon" />
                    </a>
                  )}
                  {member.socialLinks.instagram && (
                    <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                      <img src={instagram} alt="Instagram" className="social-icon" />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <img src={linkedin} alt="LinkedIn" className="social-icon" />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
