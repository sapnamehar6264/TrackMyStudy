import './RightPanel.css';
const RightPanel = () => {
  return (
    <div className="right-panel">
      <div className="calendar-card">
        <div className="calendar-header">
          <p className="day">Monday 12 Jan 2025</p>
          <div className="calendar-arrows">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>

        <div className="calendar-body">
          <p className="month">May 2022</p>
          <div className="calendar-grid">
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
            {Array.from({ length: 31 }, (_, i) => (
              <span key={i} className="date">{i + 1}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
