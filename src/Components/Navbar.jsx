import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
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


         <div>
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/login">Log/Reg</Link>
      </div>
    </nav>
    );
}

export default Navbar;





