/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    let userInfos = {
        name: "Matheus",
        email: "matheus@email.com",
        isAdm: true,
    };

    userInfos = null;

    return (
        <AuthContext.Provider value={{ userInfos }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

