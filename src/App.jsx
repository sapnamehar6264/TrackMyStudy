import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App(){
  return (
    <div>
      <h1>Track My Study</h1>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
