import './Sidebar.css';
const Sidebar = () => {
  return(
    <div className="sidebar">
      <div className="sidebar-header">
          <h2>TrackMyStudy</h2>
      </div>
      <nav className="sidebar-nav">
        <a href="/dashboard" className="nav-item">
          <span role="img" aria-label="Dashboard Icon">📊</span>
          Dashboard
        </a>

        <a href="/focus" className="nav-item">
          <span role="img" aria-label="Focus Icon">⏳</span>
          Focus
        </a>

        <a href="/tasks" className="nav-item">
          <span role="img" aria-label="Tasks Icon">🗓️</span>
          Tasks
        </a>

        <p>Settings</p>

        <a href="/logout" className="nav-item">
          <span role="img" aria-label="Logout Icon">↩️</span>
          Logout
        </a>
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