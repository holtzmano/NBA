import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Series from './Series';
import { useState } from 'react';

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
        {/* Round 1 NBA playoffs */}
        <div id='round-1'>
          <h2> Round 1 </h2>
          <div className='conference' id='westRound1'>
            <h3>Western Conference</h3>
            <Series idPrefix='westRound1Series1' team1Id='lal' team2Id='por' onScoreChange={handleScoreChange} />
            <Series idPrefix='westRound1Series2' team1Id='lac' team2Id='dal' onScoreChange={handleScoreChange} />
            <Series idPrefix='westRound1Series3' team1Id='den' team2Id='uta' onScoreChange={handleScoreChange}/>
            <Series idPrefix='westRound1Series4' team1Id='hou' team2Id='okc' onScoreChange={handleScoreChange}/>
          </div>
          <div className='conference' id='eastRound1'>
            <h3>Eastern Conference</h3>
            <Series idPrefix='eastRound1Series1' team1Id='mil' team2Id='orl' onScoreChange={handleScoreChange}/>
            <Series idPrefix='eastRound1Series2' team1Id='tor' team2Id='bkn' onScoreChange={handleScoreChange}/>
            <Series idPrefix='eastRound1Series3' team1Id='bos' team2Id='phi' onScoreChange={handleScoreChange}/>
            <Series idPrefix='eastRound1Series4' team1Id='mia' team2Id='ind' onScoreChange={handleScoreChange}/>
          </div>
        </div>
        {/* Round 2 NBA playoffs */}
        <div id='round-2'>
          <h2> Round 2 </h2>
          <div className='conference' id='westRound2'>
            <h3>Western Conference</h3>
            <Series idPrefix='westRound2Series1' team1Id='lal' team2Id='hou' onScoreChange={handleScoreChange}/>
            <Series idPrefix='westRound2Series2' team1Id='lac' team2Id='den' onScoreChange={handleScoreChange}/>
          </div>
          <div className='conference' id='eastRound2'>
            <h3>Eastern Conference</h3>
            <Series idPrefix='eastRound2Series1' team1Id='mil' team2Id='mia' onScoreChange={handleScoreChange}/>
            <Series idPrefix='eastRound2Series2' team1Id='tor' team2Id='bos' onScoreChange={handleScoreChange}/>
          </div>
        </div>
        {/* Round 3 NBA playoffs */}
        <div id='round-3'>
          <h2> Round 3 - Conference Finals</h2>
          <div className='conference' id='westRound3'>
            <h3>Western Conference</h3>
            <Series idPrefix='westRound3Series1' team1Id='lal' team2Id='lac' onScoreChange={handleScoreChange}/>
          </div>
          <div className='conference' id='eastRound3'>
            <h3>Eastern Conference</h3>
            <Series idPrefix='eastRound3Series1' team1Id='mil' team2Id='tor' onScoreChange={handleScoreChange}/>
          </div>
        </div>
        {/* Round 4 NBA playoffs */}
        <div id='round-4'>
          <h2> Round 4 - NBA Finals</h2>
          <Series idPrefix='finalsSeries1' team1Id='lal' team2Id='mil' onScoreChange={handleScoreChange}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
