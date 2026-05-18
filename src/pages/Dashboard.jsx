import React from 'react';
import './Dashboard.css';
import Sidebar from '../components/Sidebar';
import MidSection from './MidSection';
import Header from '../components/Header';
import RightPanel from './RightPanel';

const Dashboard = ({ username = "Sapna" }) => {
  return (
    <div className="dashboard-container">
      <div className="content-area">
        <Header username={username} />
        <div className="content-body">
          <MidSection />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
