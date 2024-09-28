import "./header.css";
import {Link,useNavigate} from 'react-router-dom'
const Header = () => {
  const navigate=useNavigate()
  function onLogin(){
    navigate('/login&signup')
  }
  return (
   <header>
     <div className="main">
     
    <div className="nav">
    <h3 id='3'>Log</h3>
      <div className="nav-list">
        <div className="nav-link">
          <Link to='/'>Home</Link>
        </div>
      </div>
      <div className="nav-list">
        <div className="nav-link">
          <Link to='/about'>About</Link>
        </div>
      </div>
      <div className="nav-list">
        <div className="nav-link" >
        <Link to='/courses'>Courses</Link>
        </div>
      </div>
      <div className="nav-list">
        <div className="nav-link">
          <Link to='/pages'>Pages</Link>
        </div>
      </div>
      <div className="nav-list">
        <div className="nav-link" >
        <Link to='/blog'>Blog</Link>
        </div>
      </div>
      <button onClick={onLogin}>
        Login/SignUp
      </button>
    </div>
  </div>
   </header>
  );
};

export default Header;
