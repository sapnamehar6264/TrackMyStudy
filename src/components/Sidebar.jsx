import { NavLink } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
  return(
    <div className="sidebar">
      <div className="sidebar-header">
          <h2>TrackMyStudy</h2>
      </div>
      <nav className="sidebar-nav">

        <NavLink to="/dashboard" className="nav-item">
          <span>📊</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/focus" className="nav-item">
          <span>⏳</span>
          <span>Focus</span>
        </NavLink>

        <NavLink to="/tasks" className="nav-item">
          <span>🗓️</span>
          <span>Tasks</span>
        </NavLink>

        <p>Settings</p>

        <NavLink to="/logout" className="nav-item">
          <span>↩️</span>
          <span>Logout</span>
        </NavLink>

        </nav>
        <div className="sidebar-footer">
          <div className="illustration-placeholder">

          </div>
          <button className="streak-button">
            Check Streak
          </button>
        </div>
    </div>
  );
};

export default Sidebar;