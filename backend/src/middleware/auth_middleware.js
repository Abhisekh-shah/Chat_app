import jwt from "jsonwebtoken"
import User from "../models/user_model.js"

export const protectRoute = async (req,res,next) => {
    try {
       const token = req.cookies.jwt
       if (!token) {
       return res.status(401).json({message:"Unauthorized - No Token Provider"})
       } 
       const decode = jwt.verify(token,process.env.JWT_SECRET)
       if (!decode) {
        return res.status(401).json({message:"Unauthorized - Invalid Token"})

       }
       const user = await User.findById(decode.userId).select("-password")

       req.user =user;
       next()
    } catch (error) {
        console.error("Error in protectRoute:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
}