// backend api for feeding the initial users into the database
import User from "./models/User.js";
import bcrypt from "bcryptjs";
const registerUser = async (req,res) =>{
      try{
         const {name,email,password,role} = req.body;
         //validation for required fields
         if(!name || !email || !password)
         {
            return res.status(400).json({message:"All fields are required"});
         }
         //check if user already exists
         const existingUser = await User.findOne({email});
         if(existingUser)
         {
            return res.status(409).json({message:"User already exists"});
         }
         //hashing the password
         const hashPassword = await bcrypt.hash(password,10);
         //creating new user 
         const newUser = await User.create({
            name,email,password:hashPassword,role
         });
         return res.status(201).json({message:"User registered successfully"});

      }catch(err)
      {
         return res.status(500).json({message:"Internal Server Error"});
      }
}

export default registerUser;



