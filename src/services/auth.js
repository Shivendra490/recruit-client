import axios from "axios"

const registerUser=async(user)=>{
   try{
    const data= await axios.post("http://localhost:8080/api/auth/signup",user)
    return data
   }
   catch(err){
    console.log("err",err)
   }

}

const loginUser=async(user)=>{
    try{
     const data= await axios.post("http://localhost:8080/api/auth/login",user)
     return data
    }
    catch(err){
     console.log("err",err)
    }
 
 }


export {registerUser,loginUser}