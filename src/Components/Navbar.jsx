import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    navigate("/LogIn");
  }

    return (
        
        <nav className="Head">
          <div className="head1">
            <img src={logo} alt="Logo1" className="logo1"/>
            <h2>Car Rental System</h2>
          </div>

          <div className="head2">
            <input type="text" placeholder="Search Cars"/>
            <button>Search</button>
          </div>


         <div className="head3">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        
        {
          token?
          (<> <Link to="/Profile">Profile</Link>
            <button onClick={handleLogOut}>LogOut</button> </>
          )
          :(<Link to="/LogIn">LogIn/Reg</Link>)
        }
      </div>
    </nav>
    );
}

export default Navbar;





