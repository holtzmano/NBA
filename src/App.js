import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Series from './Series';
import { useState } from 'react';
import teams from './teamData';

function App() {
  const [seriesScores, setSeriesScores] = useState({
    westRound1Series1: { team1: 0, team2: 0 },
    westRound1Series2: { team1: 0, team2: 0 },
    westRound1Series3: { team1: 0, team2: 0 },
    westRound1Series4: { team1: 0, team2: 0 },
    eastRound1Series1: { team1: 0, team2: 0 },
    eastRound1Series2: { team1: 0, team2: 0 },
    eastRound1Series3: { team1: 0, team2: 0 },
    eastRound1Series4: { team1: 0, team2: 0 },
    westRound2Series1: { team1: 0, team2: 0 },
    westRound2Series2: { team1: 0, team2: 0 },
    eastRound2Series1: { team1: 0, team2: 0 },
    eastRound2Series2: { team1: 0, team2: 0 },
    westRound3Series1: { team1: 0, team2: 0 },
    eastRound3Series1: { team1: 0, team2: 0 },
    finalsSeries1: { team1: 0, team2: 0 }
  });

  const handleScoreChange = (seriesId, team, score) => {
    setSeriesScores(prevScores => ({
      ...prevScores,
      [seriesId]: {
        ...prevScores[seriesId],
        [team]: score
      }
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(seriesScores);
  }
      


  return (
    <div className='App'>
      <h1>NBA Playoffs Betting</h1>
      <form id='betting-form' onSubmit={handleSubmit}>
        {/* Round 1 NBA playoffs example */}
        <div id='round-1'>
          <h2> Round 1 </h2>
          <div className='conference' id='westRound1'>
            <h3>Western Conference</h3>
            {/* Example of a Series component without team1Id and team2Id */}
            <Series idPrefix='westRound1Series1' onScoreChange={handleScoreChange} />
            <Series idPrefix='westRound1Series2' onScoreChange={handleScoreChange} />
            <Series idPrefix='westRound1Series3' onScoreChange={handleScoreChange} />
            <Series idPrefix='westRound1Series4' onScoreChange={handleScoreChange} />
          </div>
          <div className='conference' id='eastRound1'>
            <h3>Eastern Conference</h3>
            <Series idPrefix='eastRound1Series1' onScoreChange={handleScoreChange} />
            <Series idPrefix='eastRound1Series2' onScoreChange={handleScoreChange} />
            <Series idPrefix='eastRound1Series3' onScoreChange={handleScoreChange} />
            <Series idPrefix='eastRound1Series4' onScoreChange={handleScoreChange} />
          </div>
        </div>
        {/* Additional rounds follow a similar pattern */}
        <div id='round-2'>
          <h2> Round 2 </h2>
          <div className='conference' id='westRound2'>
            <h3>Western Conference</h3>
            <Series idPrefix='westRound2Series1' onScoreChange={handleScoreChange} />
            <Series idPrefix='westRound2Series2' onScoreChange={handleScoreChange} />
          </div>
          <div className='conference' id='eastRound2'>
            <h3>Eastern Conference</h3>
            <Series idPrefix='eastRound2Series1' onScoreChange={handleScoreChange} />
            <Series idPrefix='eastRound2Series2' onScoreChange={handleScoreChange} />
          </div>
        </div>
        <div id='round-3'>
          <h2> Conference Finals </h2>
          <div className='conference' id='westRound3'>
            <h3>Western Conference</h3>
            <Series idPrefix='westRound3Series1' onScoreChange={handleScoreChange} />
          </div>
          <div className='conference' id='eastRound3'>
            <h3>Eastern Conference</h3>
            <Series idPrefix='eastRound3Series1' onScoreChange={handleScoreChange} />
          </div>
        </div>
        <div id='finals'>
          <h2> NBA Finals </h2>
          <div className='conference' id='finals'>
            <h3>Finals</h3>
            <Series idPrefix='finalsSeries1' onScoreChange={handleScoreChange} />
            {/* Repeat for other series as needed */}
          </div>
          {/* Additional rounds follow a similar pattern */}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
