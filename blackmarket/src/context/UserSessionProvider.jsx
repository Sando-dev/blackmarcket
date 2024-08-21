import { createContext, useEffect, useState } from "react";
import { AUTH_TOKEN } from "../axios";

export const UserSessionContext = createContext();

export const UserSessionProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
     

    useEffect(() => {
        const token = localStorage.getItem(AUTH_TOKEN);
        setIsLoggedIn(!!token);
    })

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <UserSessionContext.Provider
            value={{
                isLoggedIn,
                handleLogin 
            }}
        >
            {children}
        </UserSessionContext.Provider>
    )
}