import axios from "axios"
import { DOMAIN } from "../constants"
import { getUserInfo } from "./localStorage"

export const fetchAllJobs=async()=>{
    try{
        const response=await axios.get(`${DOMAIN}/api/job/alljobs`)
        return response
        
    }catch(err){
        return err.response
    }
}

export const fetchAllMyJobs=async(userId)=>{
    try{
        const {token}=getUserInfo()
        const response=await axios.get(`${DOMAIN}/api/job/allmyjobs/`+userId,{headers:{authorization:token}})
        return response
        
    }catch(err){
        return err.response
    }
}



export const fetchSingleJob=async(jobId)=>{
    try{
        const response=await axios.get(`${DOMAIN}/api/job/${jobId}`)
        console.log('response',response)
        return response
        
    }catch(err){
        console.log('error',err)
        return err.response
    }
}

export const createJob=async(newJob)=>{
    try{
        const {token}=getUserInfo()
        
        
        const headers={
            "authorization":token,
            "Content-Type":"application/json"
        }
       
        
        const response=await axios.post(`${DOMAIN}/api/job/create`,newJob,{headers})
        return response
    }catch(err){
        return err.response
    }
}

export const updateJob=async(job)=>{
    try{
        const {token}=getUserInfo()
        
        
        const headers={
            "authorization":token,
            "Content-Type":"application/json"
        }
       
        
        const response=await axios.patch(`${DOMAIN}/api/job/update/${job._id}`,job,{headers})
        return response
    }catch(err){
        return err.response
    }
}

export const deleteJob=async(jobId)=>{
    try{
        const {token}=getUserInfo()
        const response=await axios.delete(`${DOMAIN}/api/job/`+jobId,{headers:{authorization:token}})
        return response
        
    }catch(err){
        return err.response
    }
}