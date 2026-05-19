import { useState, useEffect } from "react";
import "./Tasks.css";

const Tasks = () => {
  // 1. Smart Initialization: Load from localStorage RIGHT HERE
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []; 
  });
  const [taskTitle, setTaskTitle] = useState("");
  const [focusTime, setFocusTime] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [search, setSearch] = useState("");
  
  //Save tasks to localstorage
  // This block keeps our tasks saved even if the user refreshes. Leave alone!
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      focusTime,
      isImportant,
      status: "pending",
      completedViaFocus: false,
      completedSessions: 0
    };

    // safer state update
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskTitle("");
    setFocusTime("");
    setIsImportant(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  
  //Filters the tasks.
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="tasks-container">
      <div className="tasks-content">
        <h2>Your Tasks</h2>

        <input
          type="text"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

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
            <input 
              type="number"
              placeholder="Enter focus time (min)"
              value={focusTime}
              onChange={(e) => setFocusTime(e.target.value)}
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

          {/* 3. FIXED: If user is searching but gets zero matches */}
          {tasks.length > 0 && filteredTasks.length === 0 && (
            <p className="empty-text">No matching tasks found 🔍</p>
          )}

          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`task-card ${task.isImportant ? "important" : ""}`}
            >  
              {task.focusTime && (<span className="task-focus-display">{task.focusTime}m</span>)}
              <span className="task-title">{task.title}</span>
              <div className="status-container">
                <span className="task-status">
                  {task.status === "pending" && "⏳ Pending"}
                  {task.status === "active" && "🔥 Active Now"}
                  {task.status === "completed" && "✅ Completed"}
                </span>

                <button className="delete-btn" onClick={() => deleteTask(task.id)}> 🗑️ </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
