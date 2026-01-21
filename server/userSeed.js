




import User from "./models/User.js";
import bcrypt from "bcryptjs";

const registerUser = async (req,res) =>{
     try{  
         const {name,email,password,role} = req.body;

         if(!name || !email || !password)
         {
            return res.status(400).json({message:"All fields are required"});
         }
         //check if existing user
         
         const existingUser = User.findOne({email});
         if(existingUser)
         {
            return res.status(409);
         }
         if(existingUser)
         {
            return res.status(409).json({message:"User already exists"});
         }
         
     }catch(err)
     {
      return res.status(500).json({message:"Internal Server Error"});
     }
}


//  writing code to register new user into the database
const registerUserr = async(res,req) =>{
 try{
   const {name,email,password,role} = req.body;
   //validating email and checking email
   if(!name || !email || !password)
   {
      return res.status(400).json({
         message:"All fields are required"
      })
   }
   //check existing user
   const existingUser = User.findOne({email});
   if(existingUser)
   {
      return res.status(409).json({
         message:"User already exists"
      })
   }
//   hashing the password
const hashPassword = await bcrypt.hash(password,10);
//saving the new user to the database

 }catch(err)
 {
   return res.status(500).json({
      message:"Internal Server Error"
   })
 }
}

























