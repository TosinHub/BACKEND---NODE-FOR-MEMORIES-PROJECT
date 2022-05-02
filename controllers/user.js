import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
//import User from '../models/user.js'
import User from "../models/user.js"





export const signin = async (req,res) =>{

  //  console.log(req.body)
    const {email, password} = req.body
    try {
        const result = await User.findOne({email})

     /// console.log(result)
        //if(!result)  res.status(404).json({message:"User does not exist"})

      /// const isPassword = await bcrypt.compare(password, result.password)

        //  if(!isPassword) res.status(404).json({message:"Invalid credentials"})
       // console.log(postMessages)


       const token = jwt.sign({email:result.email, id:result._id}, "test", {expiresIn: "1h"})

        console.log(result)
        res.status(200).json({
            result: result,
            token
        })


    } catch (error) {
        console.log(error.message)
        res.status(404).json({message : error.message})
    }
}


export const signup = async (req,res) =>{
    const {email, password,confirmPassword,firstName,lastName} = req.body
           //  console.log(req.body)
    try {
        
        const result = await  User.find({email})
        console.log(result)
     // if(result)  res.status(400).json({message:"User already exist"})

      // if(password !== confirmPassword) res.status(400).json({message:"Password does not match"})

        const hashPassword = await bcrypt.hash(password, 12)

        const results = await User.create({email,password:hashPassword, name : `${firstName} ${lastName}`})
        const token = jwt.sign({email:results.email, id:results._id}, "test", {expiresIn: "1h"})
     //   console.log(results)
        res.status(200).json({result: results, token})
    } catch (error) {
        console.log(error)
    }
}  