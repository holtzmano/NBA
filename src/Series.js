import React from 'react';

function Series({ idPrefix, team1Id, team2Id, onScoreChange }) {
    const handleInputChange = (team, event) => {
        const score = event.target.value;
        onScoreChange(idPrefix, team, score);
    };
    return (
        <div className="series">
            <label htmlFor={`${idPrefix}Team1`}>{team1Id}:</label>
            <input
                type="number"
                id={`${idPrefix}Team1`}
                name={`${idPrefix}Team1`}
                min="0"
                max="4"
                required
                onChange={handleInputChange.bind(null, 'team1')}
            />
            <label htmlFor={`${idPrefix}Team2`}>{team2Id}:</label>
            <input
                type="number"
                id={`${idPrefix}Team2`}
                name={`${idPrefix}Team2`}
                min="0"
                max="4"
                required
                onChange={handleInputChange.bind(null, 'team2')}
            />
        </div>
    );
}

export default Series;
