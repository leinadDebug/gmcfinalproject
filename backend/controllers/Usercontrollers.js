const asyncHandler = require('express-async-handler')   //installed express-async-handler
const User = require('../models/userModel')
const generateToken = require("../config/generateToken")

const registerUser = asyncHandler( async(req,res)=>{ 
    const {name,email,password, pic} = req.body

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Enter all the fields")
    }

    const UserExist = await User.findOne({email});

    if (UserExist) {
        res.status(400);
        throw new Error("User already exist");
      }

      const User = await User.create({
        name,
        email,
        password,
        pic,
      });

      if(User){
         res.status(201).json({
            _id: User._id,
            name: User.name,
            email: User.email,
            pic: User.pic,
            token: generateToken(User._id)
         });
      } else{
        res.status(400);
        throw new Error('Failed to create user');
      };

});

module.exports={registerUser}