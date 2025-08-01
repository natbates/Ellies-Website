import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/LogIn.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const LogIn = () => {
    const { t } = useTranslation();
    const { user, login, loading, error, logout, clearError } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
        } catch (err) {
            console.error(err);
        }
    };

    if (user) {
        return (
            <div className='logged-in'>
                <h2>{t("login_logged_in_title")}</h2>
                <p>{t("login_logged_in_message")}</p>
                <div className='button-container push-left'>
                    <button onClick={() => navigate("/gallery")}>{t("login_goto_gallery")}</button>
                    <button onClick={logout}>{t("login_logout")}</button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2>{t("login_title")}</h2>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className='input-container'>
                    <label>{t("login_email")}:</label>
                    <input
                        type="email"
                        value={username}
                        placeholder={t("login_email_placeholder")}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='input-container'>
                    <label>{t("login_password")}:</label>
                    <input
                        type="password"
                        value={password}
                        placeholder={t("login_password_placeholder")}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='error-button-container'>
                    {error ? <p className='error-message'>{error}</p> : <p></p>}
                    <div className='button-container push-right'>
                        <button type="submit" disabled={loading || !username || !password} className='login-button'>
                            {loading ? t("login_logging_in") : t("login_button")}
                        </button>
                        <button type="reset" onClick={() => { setUsername(''); setPassword(''); clearError();}} disabled={loading || (!username && !password)}>
                            {t("login_reset")}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LogIn;