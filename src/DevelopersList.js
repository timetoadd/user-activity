import React from 'react';
import './AppStyles.css';

const DevelopersList = ({ developers, onDeveloperSelect }) => {
  return (
    <div>
      <h1>Andromeda:</h1>
      <div className="developers-container">
        {developers.map((developer) => (
          <div>
            <div
              className="developer-card"
              onClick={() => onDeveloperSelect(developer.id)}
            >
              <div className="developer-name">{developer.name}</div>
            </div>
          </div>
        ))}
      </div>
      <h1>Aviators:</h1>
      <div className="developers-container">
        {developers.map((developer) => (
          <div>
            <div
              className="developer-card"
              onClick={() => onDeveloperSelect(developer.id)}
            >
              <div className="developer-name">{developer.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopersList;
