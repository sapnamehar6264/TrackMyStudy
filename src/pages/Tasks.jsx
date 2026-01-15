import { useState } from "react";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const addTask = () => {
    if (!taskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      isImportant,
      completed: false,
      completedViaFocus: false
    };

    // safer state update
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskTitle("");
    setIsImportant(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="tasks-container">
      <div className="tasks-content">
        <h2>Your Tasks</h2>

        {/* Add Task Section */}
        <div className="add-task">
          <div className="input-button-wrapper">
            <input
              type="text"
              placeholder="Enter a task..."
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={addTask}>Add</button>
          </div>

          <label className="important-checkbox">
            <input
              type="checkbox"
              checked={isImportant}
              onChange={() => setIsImportant(!isImportant)}
            />
            Mark Important 🚩
          </label>
        </div>

        {/* Task List */}
        <div className="task-list">
          {tasks.length === 0 && (
            <p className="empty-text">No tasks added yet</p>
          )}

          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-card ${task.isImportant ? "important" : ""}`}
            >
              <span className="task-title">{task.title}</span>
              <span className="task-status">
                {task.completed ? "✅ Completed" : "⏳ Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
