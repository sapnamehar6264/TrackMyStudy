import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <nav>       
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
}
export default Navbar;

