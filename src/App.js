import React from 'react';
import './style.css';
import LoginActivityChart from './LoginActivityChart.js';

import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import DevelopersList from './DevelopersList';
import DeveloperProfile from './DeveloperProfile';

const developers = [
  {
    id: 1,
    name: 'John Doe',
    bio: 'Full Stack Developer',
    profile: 'https://www.google.com',
    githubProfile: 'https://www.google.com',
    email: 'johndoe@example.com',
    skills: ['React', 'Node.js', 'JavaScript'],
    team: 'Andromeda',
  },
  {
    id: 2,
    name: 'Jane Doe',
    bio: 'Frontend Developer',
    profile: 'https://www.google.com',
    githubProfile: 'https://www.google.com',
    email: 'janedoe@example.com',
    skills: ['React', 'CSS', 'HTML'],
    team: 'Aviators',
  },
  {
    id: 3,
    name: 'Bob Smith',
    bio: 'Backend Developer',
    profile: 'https://www.google.com',
    githubProfile: 'https://www.google.com',
    email: 'bobsmith@example.com',
    skills: ['Node.js', 'Express', 'MongoDB'],
    team: 'Andromeda',
  },
];

export default function App() {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  return (
    <div>
      <DevelopersList
        developers={developers}
        onDeveloperSelect={setSelectedDeveloper}
      />
      <DeveloperProfile id={selectedDeveloper} developers={developers} />
    </div>
  );
}
