
import { t } from "i18next";
import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>&copy; {currentYear} {t("footer_text")}</p>
                <div className="footer-socials">
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-icons/facebook.svg" alt="Facebook" style={{ width: "24px", margin: "0 8px" }} />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-icons/twitter.svg" alt="Twitter" style={{ width: "24px", margin: "0 8px" }} />
                    </a>
                    <a href="https://instagram.com/Els.socialspark" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-icons/instagram.svg" alt="Instagram" style={{ width: "24px", margin: "0 8px" }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;