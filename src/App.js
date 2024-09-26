import React, { useState } from 'react';
import { firefighters, drones } from './data/rankings';
import FirefighterTable from './components/FirefighterTable';
import DroneTable from './components/DroneTable';
import SearchInput from './components/SearchInput'; // SearchInput 임포트
import './App.css';

import TeamLogo from './images/EXIT.jpg';

const App = () => {
    const [searchText, setSearchText] = useState('');
    const [activeTab, setActiveTab] = useState('firefighters');

    const handleSearch = (e) => {
        setSearchText(e.target.value.toLowerCase());
    };

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

export default App;
