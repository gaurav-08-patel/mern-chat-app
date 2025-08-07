import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {
    let [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "male",
    });

    let { loading, signup } = useSignup();

    let handleSubmit = async (e) => {
        e.preventDefault();

        await signup(inputs);
    };

    return (
        <div
            className="min-w-110 p-4 bg-frost flex flex-col items-center text-slate-100 text-3xl rounded-2xl shadow-2xl
    "
        >
            <h1>
                Signup
                <span className="text-blue-500"> ChatApp</span>
            </h1>
            <form
                className="flex-col flex gap-3 mt-5 w-full p-2"
                onSubmit={handleSubmit}
            >
                <div className="grid w-full   items-center gap-2">
                    <Label htmlFor="fullname" className="font-medium text-xl">
                        Full Name
                    </Label>
                    <Input
                        type="text"
                        id="fullname"
                        placeholder="Enter fullname"
                        className="w-full bg-gray-200  text-black border-gray-400 "
                        value={inputs.fullName}
                        onChange={(e) =>
                            setInputs({ ...inputs, fullName: e.target.value })
                        }
                    />
                </div>
                <div className="grid w-full   items-center gap-2">
                    <Label htmlFor="Username" className="font-medium text-xl">
                        Username
                    </Label>
                    <Input
                        type="text"
                        id="Username"
                        placeholder="Enter username"
                        className="w-full bg-gray-200  text-black border-gray-400 "
                        value={inputs.username}
                        onChange={(e) =>
                            setInputs({ ...inputs, username: e.target.value })
                        }
                    />
                </div>
                <div className="grid w-full   items-center gap-2">
                    <Label htmlFor="Password" className="font-medium text-xl">
                        Password
                    </Label>
                    <Input
                        type="password"
                        id="Password"
                        placeholder="Enter password"
                        className="w-full bg-gray-200  text-black border-gray-400 "
                        value={inputs.password}
                        onChange={(e) =>
                            setInputs({ ...inputs, password: e.target.value })
                        }
                    />
                </div>
                <div className="grid w-full   items-center gap-2">
                    <Label
                        htmlFor="Confirm Password"
                        className="font-medium text-xl"
                    >
                        Confirm Password
                    </Label>
                    <Input
                        type="password"
                        id="Confirm Password"
                        placeholder="Confirm password"
                        className="w-full bg-gray-200  text-black border-gray-400 "
                        value={inputs.confirmPassword}
                        onChange={(e) =>
                            setInputs({
                                ...inputs,
                                confirmPassword: e.target.value,
                            })
                        }
                    />
                </div>

                <GenderCheckbox inputs={inputs} setInputs={setInputs} />

                <Link
                    to="/login"
                    className="w-fit text-gray-300 text-[16px] hover:text-purple-400 transition-all underline"
                >
                    Already have an account ?
                </Link>

                <Button
                    className="cursor-pointer  text-lg py-5"
                    disabled={loading}
                >
                    {loading ? (
                        <span className="loading loading-spinner"></span>
                    ) : (
                        "Signup"
                    )}
                </Button>
            </form>
        </div>
    );
};

export default Signup;
