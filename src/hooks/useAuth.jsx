import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    let userInfos = {
        name: "Matheus",
        email: "matheus@email.com",
        isAdm: false,
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

