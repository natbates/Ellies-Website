import "../../styles/Services.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useInView from "../../hooks/useInView";
import Contact from "../Contact";

const Restaurants = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [ref, visible] = useInView({ threshold: 0.2 });

    return (
        <div ref={ref} className={`service page fade-in${visible ? " visible" : ""}`}>
            <h1 className={`service-title service-anim${visible ? " service-anim-visible" : ""}`}>{t("restaurants_title")}</h1>
            <p className={`service-intro service-anim${visible ? " service-anim-visible service-anim-delay-1" : ""}`}>{t("restaurants_intro")}</p>

            <div className="service-package-row">
                <div className={`service-package-details service-anim${visible ? " service-anim-visible service-anim-delay-2" : ""}`}>
                    <h2>
                        {t("restaurants_1month_title")} <span style={{ color: "#888", fontFamily: "QuickSand" }}>– {t("restaurants_1month_price")}</span>
                    </h2>
                    <ul>
                        <li>{t("restaurants_1month_list_1")}</li>
                        <li>{t("restaurants_1month_list_2")}</li>
                        <li>{t("restaurants_1month_list_3")}</li>
                        <li>{t("restaurants_1month_list_4")}</li>
                        <li>{t("restaurants_1month_list_5")}</li>
                        <li>{t("restaurants_1month_list_6")}</li>
                    </ul>
                    <button See onClick={() => {navigate("/gallery?type=restaurants")}}>{t("restaurants_enquire_button")}</button>
                </div>
                <img
                    className={`service-package-img service-anim${visible ? " service-anim-visible service-anim-delay-3" : ""}`}
                    src="/images/restaurants/DSC06878.jpg"
                    alt="service Content Example"
                />
            </div>

            <div className="service-package-row reverse">

                <div className={`service-package-details service-anim${visible ? " service-anim-visible service-anim-delay-5" : ""}`}>
                    <h2>
                        {t("restaurants_3month_title")} <span style={{ color: "#888", fontFamily: "QuickSand" }}>– {t("restaurants_3month_price")}</span>
                    </h2>
                    <ul>
                        <li>{t("restaurants_3month_list_1")}</li>
                        <li>{t("restaurants_3month_list_2")}</li>
                        <li>{t("restaurants_3month_list_3")}</li>
                        <li>{t("restaurants_3month_list_4")}</li>
                        <li>{t("restaurants_3month_list_5")}</li>
                        <li>{t("restaurants_3month_list_6")}</li>
                    </ul>
                    <button See onClick={() => {navigate("/gallery?type=restaurants")}}>{t("restaurants_enquire_button")}</button>
                </div>
                <img
                    className={`service-package-img service-anim${visible ? " service-anim-visible service-anim-delay-4" : ""}`}
                    src="/images/restaurants/DSC04100.jpg"
                    alt="service Content Example"
                />
            </div>
            <Contact default_value={"restaurant-1month"} />
        </div>
    );
};

export default Restaurants;