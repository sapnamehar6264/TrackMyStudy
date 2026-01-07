import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import MidSection from './MidSection';
import Header from '../components/Header';
import RightPanel from './RightPanel';

const Dashboard = ({ username = "Sapna" }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />

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
