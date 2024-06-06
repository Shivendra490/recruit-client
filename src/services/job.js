import axios from "axios"
import { DOMAIN } from "../constants"

export const fetchAllJobs=async()=>{
    try{
        const data=await axios.get(`${DOMAIN}/api/job/alljobs`)
        return data
        
    }catch(err){
        return err
    }
}