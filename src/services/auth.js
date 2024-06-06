import axios from "axios"
import { DOMAIN } from "../constants"

const registerUser=async(user)=>{
   try{
    const data= await axios.post(`${DOMAIN}/api/auth/signup`,user)
    return data
   }
   catch(err){
    console.log("err",err)
   }

}

const loginUser=async(user)=>{
    try{
     const data= await axios.post(`${DOMAIN}/api/auth/login`,user)
     return data
    }
    catch(err){
     return err
    }
 
 }


export {registerUser,loginUser}