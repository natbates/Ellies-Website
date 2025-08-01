import { useTranslation } from "react-i18next";

const NotFound = () => {
    const { t } = useTranslation();
    return (
        <div className="not-found">
            <span>
                <h1 className="numbers">{t("notfound_404")}</h1>
                <h1> {t("notfound_title")}</h1>
            </span>
            <p>{t("notfound_message")}</p>
            <button onClick={() => window.location.href = "/"}>{t("notfound_back_home")}</button>
        </div>
    );
};

export default NotFound;