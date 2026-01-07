import React, {useState} from 'react';
const Tasks = () => {
  //Define state variables 
  const [tasks, setTasks] = useState([]);
  const [tasksText, setTasksText] = useState('');
  
  //Logic to handle adding new task

  const addTask = () => {
    const trimmedText = tasksText.trim();
    if (trimmedText === '') {
      return; // Prevent adding empty tasks
    }

    setTasks([...tasks, trimmedText]);
    setTasksText(''); // Clear input field after adding
  }
  return (
    <div className="tasks-page">
      <h1>📝 My Task List</h1>
      <div className="task-input-area">
        <input
          type="text"
          placeholder="Enter a new task"
          value={tasksText}
          onChange={(e) => setTasksText(e.target.value)}
          className="task-input"
        />
        <button
          className="add-task-button"
         onClick={addTask}
        > Add Task </button>
      </div>

      <div className="task-list-container">
        <h2>Pending Task ({tasks.length})</h2>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
export default Tasks;