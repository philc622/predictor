import React, { useState } from 'react';
import './App.css';

function App() {
  // Define initial fixtures with empty scores
  const initialFixtures = [
    { homeTeam: 'Ireland', awayTeam: 'Wales', homeScore: '', awayScore: '' },
    { homeTeam: 'Scotland', awayTeam: 'England', homeScore: '', awayScore: '' },
    { homeTeam: 'France', awayTeam: 'Italy', homeScore: '', awayScore: '' },
  ];

  // State to hold fixtures
  const [fixtures, setFixtures] = useState(initialFixtures);

  // Function to handle input change for score
  const handleScoreChange = (index, team, value) => {
    const updatedFixtures = [...fixtures];
    updatedFixtures[index][team] = value;
    setFixtures(updatedFixtures);
  };

  return (
    <div className="App">
      <h1>Rugby Fixtures</h1>
      <div className="fixtures">
        {fixtures.map((fixture, index) => (
          <div key={index} className="fixture">
            <div className="teams">
              <span>{fixture.homeTeam}</span>
              <span>vs</span>
              <span>{fixture.awayTeam}</span>
            </div>
            <div className="scores">
              <input
                type="number"
                value={fixture.homeScore}
                onChange={(e) => handleScoreChange(index, 'homeScore', e.target.value)}
                placeholder="Home Score"
              />
              <input
                type="number"
                value={fixture.awayScore}
                onChange={(e) => handleScoreChange(index, 'awayScore', e.target.value)}
                placeholder="Away Score"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
