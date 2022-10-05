import { useState, createContext, useEffect } from "react";    

export const AuthContext = createContext({'isLoginned':'false'})
const AuthProvider = ({ children }) => {
    const [isLoginned,setIsLoginned] = useState("false")
    return <AuthContext.Provider 
        value={{
            isLoginned,
            setIsLoginned
        }}>
        {children}
        </AuthContext.Provider>
}

export default AuthProvider