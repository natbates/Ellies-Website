import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Contact from "./Contact";
import MapComponent from "../comps/Map";
import { useNotification } from "../contexts/NotificationContext.jsx";
import { useTranslation } from "react-i18next";
import useInView from "../hooks/useInView";

const threshold = 0.4; // Adjust this value to control when the element is considered in view

const PageDivider = () => {
    const [ref, visible] = useInView({ threshold: 0.3 });
    return (
        <div
            ref={ref}
            className={`page-divider fade-in${visible ? " visible page-divider-delay" : ""}`}
            alt="Page Divider"
        />
    );
};

const Intro = () => {
    const { t } = useTranslation();
    const [ref, visible] = useInView({ threshold: threshold });
    const navigate = useNavigate();

    return (
        <div ref={ref} className={`intro-container fade-in${visible ? " visible" : ""}`}>
            <img
                className={`home-image intro-anim${visible ? " intro-anim-visible" : ""}`}
                src="../images/weddings/DSC08190.jpg"
                alt="Home Background"
            />
            <div className="home-text">
                <h1 className={`home-title intro-anim${visible ? " intro-anim-visible intro-anim-delay-1" : ""}`}>
                    {t("home_title")}
                </h1>
                <p className={`home-quote intro-anim${visible ? " intro-anim-visible intro-anim-delay-2" : ""}`}>
                    {t("home_quote")}
                </p>
                <button className={`cta_gallery intro-anim${visible ? " intro-anim-visible intro-anim-delay-3" : ""}`} onClick={() => navigate("/gallery")}>
                    {t("home_cta")}
                </button>
            </div>
        </div>
    );
};

const Packages = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [ref, visible] = useInView({ threshold: threshold });

    var package_images = {
        Weddings: "../images/weddings/DSC00632.jpg",
        Maternity: "../images/maternity/DSC02507.jpg",
        Resturants: "../images/restaurants/DSC08988.jpg",
        Private_Events: "../images/private_events/DSC08073.jpg"
    };

    return (
        <div ref={ref} className={`packages fade-in${visible ? " visible" : ""}`}>
            <h2 className={`packages-title packages-anim${visible ? " packages-anim-visible" : ""}`}>{t("packages_title")}</h2>
            <p className={`package-intro packages-anim${visible ? " packages-anim-visible packages-anim-delay" : ""}`}>{t("packages_intro")}</p>
            <div className="package-columns">
                <div className={`package-column packages-anim${visible ? " packages-anim-visible packages-anim-delay-1" : ""}`}>
                    <img
                        src={package_images.Weddings}
                        alt={t("package_weddings_title")}
                        className="package-img"
                        onClick={() => navigate("/weddings")}
                    />
                    <h2>{t("package_weddings_title")}</h2>
                    <p>{t("package_weddings_desc")}</p>
                    <button onClick={() => navigate("/weddings")}>{t("package_view_details")}</button>
                </div>
                <div className={`package-column packages-anim${visible ? " packages-anim-visible packages-anim-delay-2" : ""}`}>
                    <img
                        src={package_images.Maternity}
                        alt={t("package_maternity_title")}
                        className="package-img"
                        onClick={() => navigate("/maternity")}
                    />
                    <h2>{t("package_maternity_title")}</h2>
                    <p>{t("package_maternity_desc")}</p>
                    <button onClick={() => navigate("/maternity")}>{t("package_view_details")}</button>
                </div>
                <div className={`package-column packages-anim${visible ? " packages-anim-visible packages-anim-delay-3" : ""}`}>
                    <img
                        src={package_images.Resturants}
                        alt={t("package_restaurants_title")}
                        className="package-img"
                        onClick={() => navigate("/restaurants")}
                    />
                    <h2>{t("package_restaurants_title")}</h2>
                    <p>{t("package_restaurants_desc")}</p>
                    <button onClick={() => navigate("/restaurants")}>{t("package_view_details")}</button>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [ref, visible] = useInView({ threshold: threshold });

    return (
        <div ref={ref} className={`about-container fade-in${visible ? " visible" : ""}`}>
            <h2 className={`centred-text about-anim${visible ? " about-anim-visible" : ""}`}>{t("about_title")}</h2>
            <div className="about-section">

                <div className="about-text">
                    <div className={`text-section about-anim${visible ? " about-anim-visible about-anim-delay-2" : ""}`}>
                        <h3>{t("about_section_1_title")}</h3>
                        <p>{t("about_section_1_text")}</p>
                    </div>
                    <div className={`text-section about-anim${visible ? " about-anim-visible about-anim-delay-3" : ""}`}>
                        <h3>{t("about_section_2_title")}</h3>
                        <p>{t("about_section_2_text_1")}</p>
                        <p>{t("about_section_2_text_2")}</p>
                    </div>
                    <div className={`text-section about-anim${visible ? " about-anim-visible about-anim-delay-4" : ""}`}>
                        <h3>{t("about_section_3_title")}</h3>
                        <p>{t("about_section_3_text")}</p>
                        <button style={{ marginTop: "30px" }} onClick={() => navigate("/contact")}>
                            {t("about_section_3_button")}
                        </button>
                    </div>
                </div>
                <img
                    className={`about-image about-anim${visible ? " about-anim-visible about-anim-delay-1" : ""}`}
                    src="../images/me/IMG_7453.jpg"
                    alt="About Background"
                />
            </div>
        </div>
    );
};

const Location = () => {
    const { t } = useTranslation();
    const [ref, visible] = useInView({ threshold: 0.2 });

    return (
        <div ref={ref} className={`location-container fade-in${visible ? " visible" : ""}`}>
            <h2 className={`location-title location-anim${visible ? " location-anim-visible" : ""}`}>{t("location_title")}</h2>
            <p className={`location-intro location-anim${visible ? " location-anim-visible location-anim-delay-1" : ""}`}>{t("location_intro")}</p>
            <div className={`map-anim${visible ? " map-anim-visible map-anim-delay-2" : ""}`}>
                <MapComponent />
            </div>
            <div className={`location-text location-anim${visible ? " location-anim-visible location-anim-delay-2" : ""}`}>
                <p>{t("location_text")}</p>
            </div>
        </div>
    );
};
const Clients = () => {
    const { t } = useTranslation();
    const [ref, visible] = useInView({ threshold: 0.2 });

    const clientData = [
        {
            img: "../images/fashion/63F08F85-2BBE-47DC-A287-6DDB7370A55F.jpg",
            title: t("client_1_name"),
            text: t("client_1_feedback")
        },
        {
            img: "../images/fashion/DSC00739 copy.jpg",
            title: t("client_2_name"),
            text: t("client_2_feedback")
        },
        {
            img: "../images/fashion/DSC00272 copy.jpg",
            title: t("client_3_name"),
            text: t("client_3_feedback")
        }
    ];

    return (
        <div ref={ref} className={`clients-container fade-in${visible ? " visible" : ""}`}>
            <h2 className={`client-title clients-anim${visible ? " clients-anim-visible" : ""}`}>{t("clients_title")}</h2>
            <div className="clients-row-list">
                {clientData.map((client, idx) => (
                    <div
                        className={`client-row clients-anim${visible ? " clients-anim-visible clients-anim-delay-" + (idx + 1) : ""}${idx % 2 === 1 ? " reverse" : ""}`}
                        key={client.title}
                    >
                        <img
                            src={client.img}
                            alt={client.title}
                            className="client-photo"
                        />
                        <div className="client-info">
                            <h3 className="client-name">{client.title}</h3>
                            <p className="client-feedback-text">"{client.text}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div className="home-page">
            <Intro />
            <PageDivider />
            <About />
            <PageDivider />
            <Packages />
            <PageDivider />
            <Clients />
            <PageDivider />
            <Location />
            <PageDivider />
            <Contact />
        </div>
    );
};

export default Home;