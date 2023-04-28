import React from 'react';
import LoginActivityChart from './LoginActivityChart.js';

const DeveloperProfile = ({ id, developers }) => {
  if (id == null) return;

  return (
    <div>
      <div className="developer-profile-container">
        <h2 className="developer-name">{developers[id - 1].name}'s Profile</h2>
        <p className="developer-skills">{developers[id - 1].bio}</p>
        <p className="developer-email">Email: {developers[id - 1].email}</p>
      </div>
      <LoginActivityChart />
    </div>
  );
};

export default DeveloperProfile;
