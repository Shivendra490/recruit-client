import axios from "axios"
import { DOMAIN } from "../constants"
import { getUserInfo } from "./localStorage"

export const fetchAllJobs=async()=>{
    try{
        const data=await axios.get(`${DOMAIN}/api/job/alljobs`)
        return data
        
    }catch(err){
        return err
    }
}

export const fetchSingleJob=async(jobId)=>{
    try{
        const data=await axios.get(`${DOMAIN}/api/job/${jobId}`)
        return data
        
    }catch(err){
        return err
    }
}

export const createJob=async(newJob)=>{
    try{
        const {token}=getUserInfo()
        
        
        const headers={
            "authorization":token,
            "Content-Type":"application/json"
        }
       
        
        const data=await axios.post(`${DOMAIN}/api/job/create`,newJob,{headers})
        return data
    }catch(err){
        return err
    }
}

export const updateJob=async(job)=>{
    try{
        const {token}=getUserInfo()
        
        
        const headers={
            "authorization":token,
            "Content-Type":"application/json"
        }
       
        
        const data=await axios.patch(`${DOMAIN}/api/job/update/${job._id}`,job,{headers})
        console.log('updatejob',data)
        return data
    }catch(err){
        return err
    }
}