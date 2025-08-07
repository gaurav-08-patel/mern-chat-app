import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateTokenAndSaveCookie } from "../utils/generateToken.js";

export const signup = async (req, res) => {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword)
        return res.status(400).json({ error: "Password did not match." });

    let user = await User.findOne({ username });

    if (user) {
        return res.status(400).json({ error: "Username already exist." });
    }

    let hashpwd = await bcrypt.hash(password, 10);

    let boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    let girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    let newUser = new User({
        fullName,
        username,
        password: hashpwd,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
        generateTokenAndSaveCookie(newUser._id, res);
        await newUser.save();
        res.status(201).json({
            id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            password: newUser.password,
            gender: newUser.gender,
            profilePic: newUser.profilePic,
        });
    } else {
        res.status(400).json({ error: "Invalid User data " });
    }
};

export const login = async (req, res) => {
    let { username, password } = req.body;

    let user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json({ error: "User not found" });
    }

    let isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        return res
            .status(400)
            .json({ error: "Invalid username or password ." });
    }

    generateTokenAndSaveCookie(user._id, res);

    res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
    });
};

export const logout = (req, res) => {
    res.cookie("jwt", "", {
        maxAge: 0,
    });
    res.status(200).json({ message: "Logged out successfully !" });
};
