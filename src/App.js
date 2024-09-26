
import FirefighterTable from './components/FirefighterTable';
import DroneTable from './components/DroneTable';
import SearchInput from './components/SearchInput'; // SearchInput 임포트
import './App.css';
import React, { useState, useEffect } from 'react';

import TeamLogo from './images/EXIT.jpg';

const App = () => {
    const [searchText, setSearchText] = useState('');
    const [activeTab, setActiveTab] = useState('firefighters');
    const [firefighters, setFirefighters] = useState([]);
    const [drones, setDrones] = useState([]);

    const handleSearch = (e) => {
        setSearchText(e.target.value.toLowerCase());
    };


    const fetchFirefighters = async () => {
        try {
            const response = await fetch('http://125.132.216.190:7757/api/ranks');
            const data = await response.json();

            console.log(data); // 응답 데이터 확인

            if (data.success) {
                const transformedData = data.response.map(fighter => ({
                    name: fighter.userNickname,
                    spaces: fighter.room,
                    items: fighter.item,
                    hazards: fighter.damage,
                    playtime: fighter.playtime,
                    img: 'images/Firefighter1.jpg'
                }));
                setFirefighters(transformedData);
            } else {
                console.error("API 응답 오류: ", data.error);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchDrones = async () => {
        try {
            const response = await fetch('http://125.132.216.190:7757/api/dranks'); // 가정: API 엔드포인트
            const data = await response.json();

          if (data.success) {
                const transformedData = data.response.map(drone => ({
                    name: drone.userNickname,
                    attempts: drone.detection,
                    hazardDetected: drone.danger,
                    cautionDetected: drone.caution,
                    safeDetected: drone.safe,
                    playtime: drone.playtime,
                    img: 'images/Firefighter1.jpg' // 이미지 경로를 API 응답에서 가정
                }));
                setDrones(transformedData);
            }
        } catch (error) {
            console.error("Error fetching drones:", error);
        }
    };

    useEffect(() => {
        fetchFirefighters();
        fetchDrones();
    }, []);


    return (
        <div className="leaderboard">
            <img src={TeamLogo} className="theme-img" alt="Theme" />
            <div className="description">
                <h3>소방관 & 드론 랭킹</h3>
                <SearchInput
                    searchText={searchText}
                    onSearchChange={handleSearch}
                />
            </div>
            <div className="tabs">
                <button onClick={() => setActiveTab('firefighters')}>소방관 랭킹</button>
                <button onClick={() => setActiveTab('drones')}>드론 랭킹</button>
            </div>
            {activeTab === 'firefighters' ? (
                <FirefighterTable firefighters={firefighters} searchText={searchText} />
            ) : (
                <DroneTable drones={drones} searchText={searchText} />
            )}
        </div>
    );
};
//
export default App;
