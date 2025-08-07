import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
    let { loading, login } = useLogin();
    let [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    let handleSubmit = async (e) => {
        e.preventDefault();
        await login(inputs);
    };
    return (
        <div
            className="min-w-110 p-4 bg-frost flex flex-col items-center text-slate-100 text-3xl rounded-2xl shadow-2xl
"
        >
            <h1>
                Login
                <span className="text-blue-500"> ChatApp</span>
            </h1>
            <form
                className="flex-col flex gap-3 mt-5 w-full p-2"
                onSubmit={handleSubmit}
            >
                <div className="grid w-full   items-center gap-3">
                    <Label htmlFor="username" className="font-medium text-xl">
                        Username
                    </Label>
                    <Input
                        type="text"
                        id="username"
                        placeholder="Enter username"
                        className="w-full bg-gray-200  text-black border-gray-400 "
                        value={inputs.username}
                        onChange={(e) =>
                            setInputs({ ...inputs, username: e.target.value })
                        }
                    />
                </div>
                <div className="grid w-full   items-center gap-3">
                    <Label htmlFor="password" className="font-medium text-xl">
                        Password
                    </Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Enter passowrd"
                        className="w-full bg-gray-200  text-black border-gray-400 "
                        value={inputs.password}
                        onChange={(e) =>
                            setInputs({ ...inputs, password: e.target.value })
                        }
                    />
                </div>

                <Link
                    to="/signup"
                    className="w-fit text-gray-300 text-[16px] hover:text-purple-400 transition-all underline"
                >
                    Don't have an account ?
                </Link>

                <Button
                    className="cursor-pointer  text-lg py-5"
                    disabled={loading}
                >
                    {loading ? (
                        <span className="loading loading-spinner"></span>
                    ) : (
                        "Login"
                    )}
                </Button>
            </form>
        </div>
    );
};

export default Login;
