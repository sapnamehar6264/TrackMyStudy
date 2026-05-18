import { useEffect, useState } from "react";
import "./Focus.css";

const Focus = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [timeLeft, setTimeLeft] = useState(55 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(55);
  const [hasStarted, setHasStarted] = useState(false);

  // dummy tasks
  const tasks = [
    { id: 1, title: "Study DSA" },
    { id: 2, title: "Revise React" },
    { id: 3, title: "Complete Assignment" }
  ];

  // FORMAT TIME
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // TIMER LOGIC
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          setHasStarted(false); // allow fresh start
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // START / RESUME
  const handleStart = () => {
    if (!selectedTask) return;

    if (!hasStarted) {
      setTimeLeft(customMinutes * 60); // set only first time
      setHasStarted(true);
    }

    setIsRunning(true);
  };

  // STOP / PAUSE
  const handleStop = () => {
    setIsRunning(false);
  };

  // POMODORO
  const handlePomodoro = () => {
    if (!selectedTask) return;

    setTimeLeft(25 * 60);
    setHasStarted(true);
    setIsRunning(true);
  };

  // DESELECT TASK
  const handleDeselect = () => {
    setSelectedTask(null);
    setTimeLeft(customMinutes * 60);
    setIsRunning(false);
    setHasStarted(false);
  };

  return (
    <div className="focus-container">
      <div className="main-card">

        {/* SEARCH */}
        <input
          type="text"
          className="task-search"
          placeholder="Search your task..."
        />

        {/* TASK LIST */}
        <div className="task-list">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${
                selectedTask?.id === task.id ? "active" : ""
              }`}
              onClick={() => setSelectedTask(task)}
            >
              {task.title}
            </div>
          ))}
        </div>

        {/* CUSTOM MINUTES */}
        {selectedTask && !isRunning && !hasStarted && (
          <input
            type="number"
            min="1"
            className="custom-time"
            value={customMinutes}
            onChange={(e) => setCustomMinutes(Number(e.target.value))}
            placeholder="Enter minutes..."
          />
        )}

        {/* TIMER */}
        <h1 className="timer">{formatTime(timeLeft)}</h1>

        {/* SELECTED TASK */}
        <p className="focus-task">
          {selectedTask
            ? `Focusing on: ${selectedTask.title}`
            : "Select a task to start focusing"}
        </p>

        {/* BUTTONS */}
        <div className="buttons-row">

          {/* Start / Resume */}
          <button
            className="start-focus-button"
            disabled={!selectedTask || isRunning}
            onClick={handleStart}
          >
            {isRunning ? "Focusing..." : hasStarted ? "Resume" : "Start Focus"}
          </button>

          {/* Pomodoro */}
          <button
            className="pomodoro-button"
            disabled={!selectedTask || isRunning}
            onClick={handlePomodoro}
          >
            Pomodoro
          </button>

          {/* Stop */}
          {isRunning && (
            <button className="stop-button" onClick={handleStop}>
              Stop
            </button>
          )}

          {/* Deselect */}
          {selectedTask && !isRunning && (
            <button className="deselect-button" onClick={handleDeselect}>
              Deselect Task
            </button>
          )}
        </div>
      </div>

      <p className="focus-quote">One task. No distractions.</p>
    </div>
  );
};

export default Focus;