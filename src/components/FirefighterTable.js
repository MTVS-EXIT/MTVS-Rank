import React from 'react';

const FirefighterTable = ({ firefighters, searchText }) => {
    const filteredFirefighters = firefighters.filter(firefighter =>
        firefighter.name.toLowerCase().includes(searchText)
    );

    return (
        <table className="rank-table">
            <thead>
                <tr>
                    <td></td>
                    <td>소방관</td>
                    <td>탐색 공간 수</td>
                    <td>활용 물품 수</td>
                    <td>위험물 수</td>
                    <td>구조 시간 (초)</td>
                </tr>
            </thead>
            <tbody>
                {filteredFirefighters.map((firefighter, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <p>{firefighter.name}</p>
                        </td>
                        <td>{firefighter.spaces}</td>
                        <td>{firefighter.items}</td>
                        <td>{firefighter.hazards}</td>
                        <td>{firefighter.playtime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FirefighterTable;
