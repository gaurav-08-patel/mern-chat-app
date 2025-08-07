import User from "../models/user.model.js";

const getUsersForSidebar = async (req, res) => {
    let loggedInUser = req.user._id;

    let filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
        "-password"
    );

    res.status(200).json(filteredUsers);
};

export default getUsersForSidebar;
