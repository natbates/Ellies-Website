
import "../styles/Footer.css";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Els Social Spark. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-icons/facebook.svg" alt="Facebook" style={{ width: "24px", margin: "0 8px" }} />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-icons/twitter.svg" alt="Twitter" style={{ width: "24px", margin: "0 8px" }} />
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-icons/instagram.svg" alt="Instagram" style={{ width: "24px", margin: "0 8px" }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;