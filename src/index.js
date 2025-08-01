import React from "react";
import ReactDOM from "react-dom/client";
import App from "./comps/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import ScrollToTop from "./contexts/ScrollToTop.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { NotificationProvider } from "./contexts/NotificationContext.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <LanguageProvider>
                <AuthProvider>
                    <NotificationProvider>
                        <App />
                    </NotificationProvider>
                </AuthProvider>
            </LanguageProvider>
        </BrowserRouter>
    </React.StrictMode>
);