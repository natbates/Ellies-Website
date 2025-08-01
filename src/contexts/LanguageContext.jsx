import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";
import "../styles/LanguageSwitcher.css";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const getInitialLanguage = () => sessionStorage.getItem("language") || "en";
    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        i18n.changeLanguage(language);
        sessionStorage.setItem("language", language);
    }, [language]);

    const switchLanguage = (lang) => {
        setLanguage(lang);
    };

    // Detect mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            <div className="language-switcher">
            {isMobile ? (
                <button
                    onClick={() => switchLanguage(language === "en" ? "hi" : "en")}
                    className="flag-toggle"
                    aria-label="Switch language"
                >
                    <img
                        src={language === "en" ? "/images/flags/in.jpg" : "/images/flags/gb.png"}
                        alt={language === "en" ? "Switch to Hindi" : "Switch to English"}
                        style={{ width: 28, height: 20 }}
                    />
                </button>
            ) : (
                <>
                    <button
                        onClick={() => switchLanguage("en")}
                        className={language === "en" ? "active" : ""}
                        aria-label="English"
                    >
                        <img src="/images/flags/gb.png" alt="English" style={{ width: 28, height: 20 }} />
                    </button>
                    <button
                        onClick={() => switchLanguage("hi")}
                        className={language === "hi" ? "active" : ""}
                        aria-label="Hindi"
                    >
                        <img src="/images/flags/in.jpg" alt="Hindi" style={{ width: 28, height: 20 }} />
                    </button>
                </>
            )}
            </div>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);