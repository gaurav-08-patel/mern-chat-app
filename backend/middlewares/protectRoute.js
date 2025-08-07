import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
   
    let token = req.cookies?.jwt;

    if (!token) {
        return res
            .status(401)
            .json({ error: "Unauthorized ! token not found" });
    }

    let verify = jwt.verify(token, process.env.JWT_SECRET);

    if (!verify) {
        return res
            .status(401)
            .json({ error: "Unauthorized ! Invalid token  " });
    }

    let userID = verify.userID;
     
    let user = await User.findById(userID).select("-password");

    req.user = user;

    next();
};

export default protectRoute;
