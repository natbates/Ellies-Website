import React, { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext();

import "../styles/Notifications.css"; // Import your styles for notifications

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const notify = useCallback((message, type = "info", duration = 3000) => {
        const id = Date.now() + Math.random();
        setNotifications(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, duration);
    }, []);

    return (
        <NotificationContext.Provider value={{ notifications, notify }}>
            {children}
            <div className="notification-container">
                {notifications.map(n => (
                    <div key={n.id} className={`notification-toast ${n.type}`}>
                        {n.message}
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);