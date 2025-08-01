import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useInView from "../../hooks/useInView";
import Contact from "../Contact";

const Weddings = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [ref, visible] = useInView({ threshold: 0.2 });

    return (
        <div ref={ref} className={`weddings page fade-in${visible ? " visible" : ""}`}>
            <h1 className={`service-title service-anim${visible ? " service-anim-visible" : ""}`}>{t("weddings_title")}</h1>
            <p className={`service-intro service-anim${visible ? " service-anim-visible service-anim-delay-1" : ""}`}>{t("weddings_intro")}</p>

            {/* Row 1 */}
            <div className="service-package-row">
                <div className={`service-package-details service-anim${visible ? " service-anim-visible service-anim-delay-2" : ""}`}>
                    <h2>{t("weddings_essence_title")} <span style={{ color: "#888", fontFamily: "QuickSand" }}>– {t("weddings_essence_price")}</span></h2>
                    <ul>
                        <li>{t("weddings_essence_list_1")}</li>
                        <li>{t("weddings_essence_list_2")}</li>
                        <li>{t("weddings_essence_list_3")}</li>
                        <li>{t("weddings_essence_list_4")}</li>
                        <li>{t("weddings_essence_list_5")}</li>
                        <li>{t("weddings_essence_list_6")}</li>
                    </ul>
                    <button See onClick={() => {navigate("/gallery?type=weddings")}}>{t("weddings_enquire_button")}</button>
                </div>
                <img
                    className={`service-package-img service-anim${visible ? " service-anim-visible service-anim-delay-3" : ""}`}
                    src="/images/weddings/DSC05738.jpg"
                    alt="service Content Example"
                />
            </div>

            {/* Row 2 */}
            <div className="service-package-row reverse">
                <div className={`service-package-details service-anim${visible ? " service-anim-visible service-anim-delay-5" : ""}`}>
                    <h2>{t("weddings_signature_title")} <span style={{ color: "#888", fontFamily: "QuickSand" }}>– {t("weddings_signature_price")}</span></h2>
                    <ul>
                        <li>{t("weddings_signature_list_1")}</li>
                        <li>{t("weddings_signature_list_2")}</li>
                        <li>{t("weddings_signature_list_3")}</li>
                        <li>{t("weddings_signature_list_4")}</li>
                        <li>{t("weddings_signature_list_5")}</li>
                        <li>{t("weddings_signature_list_6")}</li>
                    </ul>
                    <button See onClick={() => {navigate("/gallery?type=weddings")}}>{t("weddings_enquire_button")}</button>
                </div>
                <img
                    className={`service-package-img service-anim${visible ? " service-anim-visible service-anim-delay-4" : ""}`}
                    src="/images/weddings/DSC07928.jpg"
                    alt="Wedding Content Example"
                />
            </div>
            
            {/* Row 3 */}
            <div className="service-package-row">
                <div className={`service-package-details service-anim${visible ? " service-anim-visible service-anim-delay-6" : ""}`}>
                    <h2>{t("weddings_legacy_title")} <span style={{ color: "#888", fontFamily: "QuickSand" }}>– {t("weddings_legacy_price")}</span></h2>
                    <ul>
                        <li>{t("weddings_legacy_list_1")}</li>
                        <li>{t("weddings_legacy_list_2")}</li>
                        <li>{t("weddings_legacy_list_3")}</li>
                        <li>{t("weddings_legacy_list_4")}</li>
                        <li>{t("weddings_legacy_list_5")}</li>
                        <li>{t("weddings_legacy_list_6")}</li>
                    </ul>
                    <button See onClick={() => {navigate("/gallery?type=weddings")}}>{t("weddings_enquire_button")}</button>
                </div>
                <img
                    className={`service-package-img service-anim${visible ? " service-anim-visible service-anim-delay-7" : ""}`}
                    src="/images/weddings/DSC05262.jpg"
                    alt="service Content Example"
                />
            </div>

            <Contact default_value={"weddings"} />
        </div>
    );
};

export default Weddings;