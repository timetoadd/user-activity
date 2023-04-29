import React from 'react';
import './AppStyles.css';

const DevelopersList = ({ developers, onDeveloperSelect }) => {
  const teams = [...new Set(developers.map((item) => item.team))];
  return (
    <div>
      {teams.map((team) => (
        <div>
          <h1> {team}:</h1>
          <div className="developers-container">
            {developers
              .filter((each) => each.team === team)
              .map((developer) => (
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
      ))}
    </div>
  );
};

export default DevelopersList;
