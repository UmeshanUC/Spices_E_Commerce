
import  React from 'react';


import { useState } from 'react';

import Consumer from '../../screens/Consumer/ConsumerScreen';
import Farmer_LendScreen from '../../screens/Farmer_LendMachine/Farmer_LendScreen';
import './Home.css'

// import CardMenu from '../../components/CardMenuSet/CardMenu';
// import Meta from '../../components/Helmet/Meta';
// import OurServices from '../../components/OurServices/OurServices';
// import SliderComponent from '../../components/Slider/Slider';
// import GenralMap from '../Map/GenralMap';


const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tab-container">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <div className="tab-header">
        <div
          className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Spices
        </div>
        <div
          className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Fish
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <Consumer searchQuery={searchQuery} />}
        {activeTab === 2 && <Farmer_LendScreen searchQuery={searchQuery} />}
      </div>
    </div>
  );
};

export default HomeScreen;



