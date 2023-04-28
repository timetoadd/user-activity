import React from 'react';
import './AppStyles.css';

function RulesData({ developers }) {
  return (
    <table className="developers-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {developers.map((developer) => (
          <tr key={developer.id}>
            <td>{developer.name}</td>
            <td>{developer.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RulesData;
