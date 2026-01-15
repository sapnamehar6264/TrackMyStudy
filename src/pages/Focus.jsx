import "./Focus.css";

const Focus = () => {
  return (
    <div className="focus-container">
      <div className="main-card">
        <h1 className="timer">55:00</h1>
        <p className="focus-task">Focusing on: Study Session</p>
        <div className="buttons-row">
        <button className="start-focus-button">Start Focus</button>
        <button className="pomodoro-button">Pomodoro</button>
        </div>
      </div>

      <p className="focus-quote">One task. No distractions.</p>
    </div>
  );
};

export default Focus;
