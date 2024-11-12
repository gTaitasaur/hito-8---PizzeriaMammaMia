import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true); // Cuando se cambia a false, no accede a /profile al momento de escribirlo en la url directamente

    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ token, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
