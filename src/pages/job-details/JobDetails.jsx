import { useParams } from "react-router-dom"


const JobDetails = () => {
    const {id}=useParams()
  return (
    <div>
      {id }job details
    </div>
  )
}

export default JobDetails
