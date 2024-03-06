import React from 'react';

function Series({ idPrefix, team1Id, team2Id, onScoreChange }) {
    const handleInputChange = (team, event) => {
        const score = event.target.value;
        onScoreChange(idPrefix, team, score);
    };
    return (
        <div className="series mb-3">
            <div className="input-group">
                <span className='input-group-text'>{team1Id.toUpperCase()}</span>
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
                <span className='input-group-text'>{team2Id.toUpperCase()}</span>
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
