import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Try to load user from sessionStorage on initial load
        const stored = sessionStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Dummy login function (replace with real API call)
    const login = async (username, password) => {
        setLoading(true);
        setError(null);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    username === process.env.REACT_APP_LOGIN_EMAIL &&
                    password === process.env.REACT_APP_LOGIN_PASSWORD
                ) {
                    const userObj = { username };
                    setUser(userObj);
                    sessionStorage.setItem("user", JSON.stringify(userObj));
                    setLoading(false);
                    resolve(userObj);
                } else {
                    setError("Invalid credentials, please try again.");
                    setLoading(false);
                    reject("Invalid credentials, please try again.");
                }
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem("user");
    };

    // Optional: keep sessionStorage in sync if user changes elsewhere
    useEffect(() => {
        if (user) {
            sessionStorage.setItem("user", JSON.stringify(user));
        } else {
            sessionStorage.removeItem("user");
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);