const User = require("../models/userModel");
const { hashPassword,comparePasswords } = require("../utils/hashPassword");
const generateAuthToken = require("../utils/generateAuthToken")

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select("-password");
    return res.json(users);
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { name, lastName, email, password } = req.body;
    if (!(name && lastName && email && password)) {
      return res.status(400).send("all inputs are required");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send("user exists");
    } else {
      const hashedPassword = hashPassword(password);
      const user = await User.create({
        name,
        lastName,
        email: email.toLowerCase(),
        password: hashedPassword,
      });
      res
      .cookie("access_token", generateAuthToken(user._id,user.name,user.lastName,user.email,user.isAdmin),{
        httpOnly: true,
        secure: process.env.NODE_ENV==="production",
        sameSite:"strict"
      })
        .status(201)
        .json({
          success: "user created",
          userCreated: {
            _id: user._id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
          },
        });
    }
  } catch (error) {
    next(error);
  }
};

const loginUser =  async ( req,res,next)=>{
try{
    const {email, password,doNotLogout}= req.body
    if(!(email && password)){
        return res.status(400).send("All inputs are required")
    }
    const user = await User.findOne({email})
    if(user && comparePasswords(password,user.password)){
        //to do compare password


        let cookieParams = {
            httpOnly :true,
            secure: process.env.NODE_ENV==="production",
            sameSite:"strict"
        }
        if(doNotLogout){
            cookieParams = { ...cookieParams, maxAge:1000*60*60*24*7}
        }    
    return res.cookie("access_token", generateAuthToken(user._id,user.name,user.lastName,user.email,user.isAdmin), cookieParams).json({
       success  : "user logged in",
       userLoggedIn: {_id:user._id, name: user.name, lastName:user.lastName, email: user.email, isAdmin: user.isAdmin, doNotLogout}

    })
    }else{
      return  res.status(401).send("wrong credentials")
    }
}catch(error){
    next(error)
}
}
module.exports = { getUsers, registerUser,loginUser};
