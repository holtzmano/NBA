import React from 'react';
import teams from './teamData';

function Series({ idPrefix, onScoreChange }) {
    const [team1, setTeam1] = React.useState('');
    const [team2, setTeam2] = React.useState('');

    // Handles the score input changes as before
    const handleInputChange = (team, event) => {
        const score = event.target.value;
        onScoreChange(idPrefix, team, score);
    };

    return (
        <div className="series mb-3">
            <div className="input-group">
                <select className='form-select' value={team1} onChange={(e) => setTeam1(e.target.value)}>
                    <option value="">Select Team</option>
                    {teams.map(team => (
                        <option key={team.id} value={team.id}>{team.name}</option>
                    ))}
                </select>
                <input
                    type='number'
                    className='form-control'
                    id={`${idPrefix}-team1`}
                    name={`${idPrefix}-team1`}
                    min='0'
                    max='4'
                    required
                    onChange={handleInputChange.bind(null, 'team1')}
                />
                <select className='form-select' value={team2} onChange={(e) => setTeam2(e.target.value)}>
                    <option value="">Select Team</option>
                    {teams.map(team => (
                        <option key={team.id} value={team.id}>{team.name}</option>
                    ))}
                </select>
                <input
                    type='number'
                    className='form-control'
                    id={`${idPrefix}-team2`}
                    name={`${idPrefix}-team2`}
                    min='0'
                    max='4'
                    required
                    onChange={handleInputChange.bind(null, 'team2')}
                />
            </div>
        </div>
    );
}


export default Series;
