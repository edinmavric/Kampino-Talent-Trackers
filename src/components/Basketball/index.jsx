import React from 'react';
import './index.scss';
import { BasketballPlayers } from '../PlayerBase';

const Basketball = () => {
    return BasketballPlayers ? (
        <div>
            {BasketballPlayers.map(data => (
                <div className="Player-Card" key={data.name}>
                    <p>{data.name}</p>
                    <span>{data.age}</span>
                    <span>{data.position}</span>
                    <span>{data.points} Points</span>
                    <span>{data.asists} Assists</span>
                    <span>{data.rebounds} Rebounds</span>
                </div>
            ))}
        </div>
    ) : (
        <div>Loading...</div>
    );
};

export default Basketball;
