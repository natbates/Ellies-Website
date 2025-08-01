import { useNavigate, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [open]);

    // Close menu when a link is clicked (mobile)
    const handleNavClick = () => setOpen(false);

    return (
        <nav className={`navbar${open ? " nav-open" : ""}`}>
            <div className="nav-top" style={{ cursor: "pointer" }} onClick={() => { navigate("/"); setOpen(false); }}>
                <img className="logo" src="/images/logo.png" alt="Els Social Spark Logo" />
            </div>

            <div className="burger" onClick={() => setOpen(!open)}>
                <div className="burger-bar" />
                <div className="burger-bar" />
                <div className="burger-bar" />
            </div>

            <div className={`navbar-section${open ? " open" : ""}`}>
                {/* Close X button for overlay */}
                <button
                    className="navbar-close"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                >
                    &times;
                </button>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick}>{t("nav_gallery")}</NavLink>
                <NavLink to="/weddings" className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick}>{t("nav_weddings")}</NavLink>
                <NavLink to="/restaurants" className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick}>{t("nav_restaurants")}</NavLink>
                <NavLink to="/maternity" className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick}>{t("nav_maternity")}</NavLink>
                <NavLink to="/private" className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick}>{t("nav_private_events")}</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick}>{t("nav_contact")}</NavLink>
            </div>

{open && <div className="navbar-overlay overlay-animate-in" onClick={() => setOpen(false)} />}        </nav>
    );
}

export default Navbar;