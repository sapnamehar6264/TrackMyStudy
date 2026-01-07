import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App(){
  return (
    <div>
      {/* <Navbar/> */}
      <Dashboard />
    </div>
  );
}

export default App;
