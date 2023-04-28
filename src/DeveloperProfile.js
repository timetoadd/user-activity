import React from 'react';
import LoginActivityChart from './LoginActivityChart.js';

const DeveloperProfile = ({ id, developers }) => {
  if (id == null) return;

  return (
    <div>
      <h2>{developers[id - 1].name}'s Profile</h2>
      <p>{developers[id - 1].bio}</p>
      <p>Email: {developers[id - 1].email}</p>

      <LoginActivityChart />
    </div>
  );
};

export default DeveloperProfile;
