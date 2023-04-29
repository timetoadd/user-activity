import React from 'react';
import LoginActivityChart from './LoginActivityChart.js';
import RulesData from './RulesData.js';

const DeveloperProfile = ({ id, developers }) => {
  if (id == null) return;

  return (
    <div>
      <div className="developer-profile-container">
        <h2 className="developer-name">{developers[id - 1].name}'s Profile</h2>
        <p className="developer-skills">{developers[id - 1].bio}</p>
        <p className="developer-profile">
          Profile:{' '}
          <a href={developers[id - 1].profile} target="_blank">
            {developers[id - 1].profile}
          </a>
        </p>
        <p className="developer-ads">ADS: {developers[id - 1].id}</p>
        <p className="developer-email">Email: {developers[id - 1].email}</p>
        <p className="developer-github-profile">
          Github:{' '}
          <a href={developers[id - 1].githubProfile} target="_blank">
            {developers[id - 1].githubProfile}
          </a>
        </p>
        
      </div>
      <br />
      <div className="developer-profile-container">
        <LoginActivityChart />{' '}
      </div>
      <br />
      <div className="developer-profile-container">
        <RulesData developers={developers} />{' '}
      </div>
    </div>
  );
};

export default DeveloperProfile;
