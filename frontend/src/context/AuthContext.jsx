import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export let authContext = createContext();

export let AuthContextProvider = ({ children }) => {
    let [authUser, setAuthUser] = useState(
        JSON.parse(localStorage.getItem("user-info")) || null
    );

    return (
        <authContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </authContext.Provider>
    );
};

export let useAuthContext = () => {
    return useContext(authContext);
};

// export { authContextProvider, authContext, useAuthContext };
