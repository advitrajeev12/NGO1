import React from 'react';
import { Link } from 'react-router-dom';

const Intervention = () => {
  return (
    <div>
      <h1><Link>Interventions</Link></h1>
      <ul>
        {/* Link to the specific intervention pages */}
        <li><Link to="/intervention/rugs">Rugs</Link></li>
        <li><Link to="/intervention/bamboo">Bamboo</Link></li>
        <li><Link to="/intervention/moonj">Moonj</Link></li>
        <li><Link to="/intervention/stitching">Stitching</Link></li>
      </ul>
    </div>
  );
};

export default Intervention;
