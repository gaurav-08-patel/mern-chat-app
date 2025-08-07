import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

let useLogin = () => {
    let { setAuthUser } = useAuthContext();
    let [loading, setLoading] = useState(false);

    let login = async ({ username, password }) => {
        setLoading(true);
        try {
            let success = handleError({ username, password });
            if (!success) return;

            let response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            let data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("user-info", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

export default useLogin;

let handleError = ({ username, password }) => {
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be atleast 6 characters");
        return false;
    }

    return true;
};
