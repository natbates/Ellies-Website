import "../../styles/Services.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useInView from "../../hooks/useInView";

const Maternity = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [ref, visible] = useInView({ threshold: 0.2 });

    return (
        <div ref={ref} className={`service page fade-in${visible ? " visible" : ""}`}>
            <h1 className={`service-title service-anim${visible ? " service-anim-visible" : ""}`}>{t("maternity_title")}</h1>
            <p className={`service-intro service-anim${visible ? " service-anim-visible service-anim-delay-1" : ""}`}>{t("maternity_intro")}</p>
            <div className="service-package-row">
                <div className={`service-package-details service-anim${visible ? " service-anim-visible service-anim-delay-2" : ""}`}>
                    <h2>
                        {t("maternity_package_title")} <span style={{ color: "#888", fontFamily: "QuickSand" }}>– {t("maternity_package_price")}</span>
                    </h2>
                    <ul>
                        <li>{t("maternity_package_list_1")}</li>
                        <li>{t("maternity_package_list_2")}</li>
                        <li>{t("maternity_package_list_3")}</li>
                        <li>{t("maternity_package_list_4")}</li>
                        <li>{t("maternity_package_list_5")}</li>
                        <li>{t("maternity_package_list_6")}</li>
                    </ul>
                    <button onClick={() => {navigate("/contact")}}>{t("maternity_enquire_button")}</button>
                </div>
                <img
                    className={`service-package-img service-anim${visible ? " service-anim-visible service-anim-delay-3" : ""}`}
                    src="/images/maternity/DSC00533.jpg"
                    alt="service Content Example"
                />
            </div>
        </div>
    );
};

export default Maternity;