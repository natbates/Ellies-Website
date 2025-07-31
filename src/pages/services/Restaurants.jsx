import "../../styles/Restaurants.css";
import { useNavigate } from "react-router-dom";

const Restaurants = () => {

    const navigate = useNavigate();

    return (
        <div className="restaurants page">
            <h1>Restaurant Content Packages</h1>
            <p className="restaurant-intro"> 
                Elevate your restaurant’s online presence with professional photography and video content tailored for social media. Whether you need a one-off boost or ongoing support, our packages are designed to showcase your food, drinks, interiors, and team in the best light—helping you attract new customers and engage your audience.
            </p>

            <div className="restaurant-package-row">
                <div className="restaurant-package-details">
                    <h2>One Month Package <span style={{ color: "#888", fontFamily: "QuickSand" }}>– £350</span></h2>
                    <ul>
                        <li>1 full content shoot (on location, up to 3 hours)</li>
                        <li>30 high quality edited photos (food, drinks, interiors, staff, BTS)</li>
                        <li>10 short form vertical videos (Reel/TikTok style)</li>
                        <li>Social media optimised exports</li>
                        <li>Brand consultation & content planning call</li>
                        <li>Delivery within 7 days</li>
                    </ul>
                    <button onClick={() => {navigate("/contact")}}>Enquire About This</button>
                </div>
                <img
                    className="restaurant-package-img"
                    src="/images/restaurants/DSC06878.jpg"
                    alt="Restaurant Content Example"
                />
            </div>

            <div className="restaurant-package-row">
                <img
                    className="restaurant-package-img"
                    src="/images/restaurants/DSC04100.jpg"
                    alt="Restaurant Content Example"
                />
                <div className="restaurant-package-details">
                    <h2>Three Month Package <span style={{ color: "#888", fontFamily: "QuickSand" }}>– £950</span></h2>
                    <ul>
                        <li>3 content shoots (1 per month, up to 3 hours each)</li>
                        <li>100+ high quality edited photos over 3 months</li>
                        <li>25 short form vertical videos</li>
                        <li>Ongoing planning and marketing support</li>
                        <li>Custom content calendar for social media use</li>
                        <li>Priority editing and fast delivery</li>
                    </ul>
                    <button onClick={() => {navigate("/contact")}}>Enquire About This</button>
                </div>
            </div>
        </div>
    );
};

export default Restaurants;