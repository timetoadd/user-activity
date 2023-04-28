import React from 'react';

const DevelopersList = ({ developers, onDeveloperSelect }) => {
  return (
    <div>
      <h2>List of Developers</h2>
      <ul>
        {developers.map((developer) => (
          <li key={developer.id}>
            <button onClick={() => onDeveloperSelect(developer.id)}>
              {developer.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevelopersList;
