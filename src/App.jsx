import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Focus from "./pages/Focus";
import Sidebar from "./components/Sidebar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [streak, setStreak] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard streak={streak} />}
          />

          <Route
            path="/tasks"
            element={<Tasks tasks={tasks} setTasks={setTasks} />}
          />

          <Route
            path="/focus"
            element={
              <Focus
                tasks={tasks}
                setTasks={setTasks}
                setStreak={setStreak}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
