import axios from "axios"
import { DOMAIN } from "../constants"

const registerUser=async(user)=>{
   try{
    const response= await axios.post(`${DOMAIN}/api/auth/signup`,user)
    return {...response.data,status:response.status}
   }
   catch(err){
    console.log("errR",err)
    return {...err.response.data,status:err.response.status}
   }

}

const loginUser=async(user)=>{
    try{
     const response= await axios.post(`${DOMAIN}/api/auth/login`,user)
     return {...response.data,status:response.status}
    }
    catch(err){
     return {...err.response.data,status:err.response.status}
    }
 
 }


export {registerUser,loginUser}