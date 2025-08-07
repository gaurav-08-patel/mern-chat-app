import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

let useLogout = () => {
    let { setAuthUser } = useAuthContext();
    let [loading, setLoading] = useState(false);

    let logout = async () => {
        setLoading(true);
        try {
            let response = await fetch("api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            localStorage.removeItem("user-info");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};

export default useLogout;
