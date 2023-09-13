import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import basketballimg from '../../images/basketball.png';
import footballimg from '../../images/football.png';
import volleyballimg from '../../images/volleyball.png';

const ChoseSport = () => {
    return (
        <>
            <div className='text'>Choose the sport you are playing or scouting</div>
            <div className="Chose-Sport">
                <Link to="/basketball">
                    <img src={basketballimg} alt="" />
                </Link>
                <Link to="/football">
                    <img src={footballimg} alt="" />
                </Link>
                <Link to="/volleyball">
                    <img src={volleyballimg} alt="" />
                </Link>
                <Link to="/coming-soon">Coming soon...</Link>
            </div>
        </>
    );
};

export default ChoseSport;
