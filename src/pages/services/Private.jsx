import "../../styles/Services.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useInView from "../../hooks/useInView";

const Private = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [ref, visible] = useInView({ threshold: 0.2 });

    return (
        <div ref={ref} className={`service page fade-in${visible ? " visible" : ""}`}>
            <h1 className={`service-title service-anim${visible ? " service-anim-visible" : ""}`}>{t("private_title")}</h1>
            <p className={`service-intro service-anim${visible ? " service-anim-visible service-anim-delay-1" : ""}`}>{t("private_intro")}</p>

            <div className="service-package-row">
                <div className={`service-package-details service-anim${visible ? " service-anim-visible service-anim-delay-2" : ""}`}>
                    <h2>{t("private_daily_title")} <span style={{ color: "#888", fontFamily: "QuickSand" }}>– {t("private_daily_price")}</span></h2>
                    <ul>
                        <li>{t("private_daily_list_1")}</li>
                        <li>{t("private_daily_list_2")}</li>
                        <li>{t("private_daily_list_3")}</li>
                        <li>{t("private_daily_list_4")}</li>
                        <li>{t("private_daily_list_5")}</li>
                        <li>{t("private_daily_list_6")}</li>
                    </ul>
                    <button onClick={() => {navigate("/contact")}}>{t("private_enquire_button")}</button>
                </div>
                <img
                    className={`service-package-img service-anim${visible ? " service-anim-visible service-anim-delay-3" : ""}`}
                    src="/images/private_events/DSC07110.jpg"
                    alt="service Content Example"
                />
            </div>

            <div className="service-package-row reverse">

                <div className={`service-package-details service-anim${visible ? " service-anim-visible service-anim-delay-5" : ""}`}>
                    <h2>{t("private_extended_title")} <span style={{ color: "#888", fontFamily: "QuickSand" }}>– {t("private_extended_price")}</span></h2>
                    <ul>
                        <li>{t("private_extended_list_1")}</li>
                        <li>{t("private_extended_list_2")}</li>
                        <li>{t("private_extended_list_3")}</li>
                        <li>{t("private_extended_list_4")}</li>
                        <li>{t("private_extended_list_5")}</li>
                        <li>{t("private_extended_list_6")}</li>
                    </ul>
                    <button onClick={() => {navigate("/contact")}}>{t("private_enquire_button")}</button>
                </div>

                <img
                    className={`service-package-img service-anim${visible ? " service-anim-visible service-anim-delay-4" : ""}`}
                    src="/images/private_events/DSC09850.jpg"
                    alt="service Content Example"
                />
            </div>
        </div>
    );
};

export default Private;