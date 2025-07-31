import { useNavigate, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="nav-top" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                <img className="logo" src="/images/logo.png" alt="Els Social Spark Logo" />
            </div>

            <div className="navbar-section">
                <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>Gallery</NavLink>
                <NavLink to="/weddings" className={({ isActive }) => isActive ? "active" : ""}>Weddings</NavLink>
                <NavLink to="/restaurants" className={({ isActive }) => isActive ? "active" : ""}>Restaurants</NavLink>
                <NavLink to="/maternity" className={({ isActive }) => isActive ? "active" : ""}>Maternity</NavLink>
                <NavLink to="/private" className={({ isActive }) => isActive ? "active" : ""}>Private Events</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;