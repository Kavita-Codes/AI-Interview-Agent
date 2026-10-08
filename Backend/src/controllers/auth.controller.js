import generateToken from "../config/token.js"
import User from "../models/user.model.js"

export const googleAuth =async(req,res)=>{
    try {
        const {name , email} = req.body
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name, email
            })
        }

        let token = generateToken(user._id)

        res.cookie("token", token, {
            secure:false,
            http:true,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })

        return res.status(500).json({
            message:"User created successfully"
        })

    } catch (error) {
        console.log(error)
    }
}


export const logout = async(req,res)=>{
 try {
    await res.clearCookie("token")
    return res.status(200).json({
        message:"successfully logout"
    })
 } catch (error) {
    console.log(error)
 }
}

