import React from 'react';

const DroneTable = ({ drones, searchText }) => {
    const filteredDrones = drones.filter(drone =>
        drone.name && drone.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <table className="rank-table">
            <thead>
                <tr>
                    <td></td>
                    <td>드론</td>
                    <td>위험물 탐지 시도</td>
                    <td>위험 감지</td>
                    <td>주의 감지</td>
                    <td>안전 감지</td>
                    <td>구조 시간 (초)</td>
                </tr>
            </thead>
            <tbody>
                {filteredDrones.map((drone, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <p>{drone.name}</p>
                        </td>
                        <td>{drone.attempts}</td>
                        <td>{drone.hazardDetected}</td>
                        <td>{drone.cautionDetected}</td>
                        <td>{drone.safeDetected}</td>
                        <td>{drone.playtime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DroneTable;
