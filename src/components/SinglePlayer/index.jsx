import React from 'react';
import './index.scss';
import image from './avatar.jpg';

const SinglePlayer = () => {
    return (
        <>
            <div
                style={{
                    margin: '12px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                }}
            >
                <div>
                    <img src={image} alt="" height="180px" width="180px" />
                    <h2>Janko Jankovic</h2>
                    <div>
                        <p style={{ margin: '10px 0' }}>
                            Age: <a style={{ fontWeight: 'bold' }}>14</a>
                        </p>
                        <p style={{ margin: '10px 0' }}>
                            Height:{' '}
                            <a style={{ fontWeight: 'bold' }}>185cm, 6'1ft</a>
                        </p>
                        <p style={{ margin: '10px 0' }}>
                            Weight:{' '}
                            <a style={{ fontWeight: 'bold' }}>82kg, 180lbs</a>
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '42px 0 0 0',
                    }}
                >
                    <span style={{ margin: '4px 0' }}>
                        Average points:{' '}
                        <a style={{ fontWeight: 'bold' }}>14.4</a>
                    </span>
                    <span style={{ margin: '4px 0' }}>
                        Average assists:{' '}
                        <a style={{ fontWeight: 'bold' }}>4.5</a>
                    </span>
                    <span style={{ margin: '4px 0' }}>
                        Average rebounds:{' '}
                        <a style={{ fontWeight: 'bold' }}>9.2</a>
                    </span>
                    <div>
                        <p style={{ marginTop: '127px', marginBottom: '10px' }}>
                            Position:{' '}
                            <a style={{ fontWeight: 'bold' }}>SG/SF</a>
                        </p>
                        <p style={{ margin: '10px 0' }}>
                            Current status:{' '}
                            <a style={{ fontWeight: 'bold' }}>Active</a>
                        </p>
                        <p style={{ margin: '10px 0' }}>
                            Strong Hand/Foot:{' '}
                            <a style={{ fontWeight: 'bold' }}>Left</a>
                        </p>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <h3>Janko's Health Problems History</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Injury Type</th>
                            <th>Injury</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Lower Body</th>
                            <th>Torn Achilles Tendon</th>
                            <th>20.02.2021</th>
                        </tr>
                        <tr>
                            <th>--------------</th>
                            <th>--No More Data--</th>
                            <th>--------------</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ textAlign: 'center' }}>
                    Player's Special Abilities and Video Footage
                </h4>
                <p style={{ width: '50%', margin: '0 0 0 18px' }}>
                    Can finish on both hands, shoots decent, very strong on
                    defence, good athleticism, agile and good cardio. Performs
                    under pressure good at school not problematic.
                </p>
            </div>
        </>
    );
};

export default SinglePlayer;
