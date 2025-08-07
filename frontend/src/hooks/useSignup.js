import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignup = () => {
    let {setAuthUser} = useAuthContext();
    let [loading, setLoading] = useState(false);

    const signup = async ({
        fullName,
        username,
        password,
        confirmPassword,
        gender,
    }) => {
        let success = handleErrors({
            fullName,
            username,
            password,
            confirmPassword,
            gender,
        });
        if (!success) return;

        setLoading(true);
        try {
            let response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    username,
                    password,
                    confirmPassword,
                    gender,
                }),
            });

            let data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            //save user data to localstorage
            localStorage.setItem("user-info", JSON.stringify(data));
            setAuthUser(data);

             
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

let handleErrors = ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
}) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords did not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be atleast 6 characters");
        return false;
    }

    return true;
};
