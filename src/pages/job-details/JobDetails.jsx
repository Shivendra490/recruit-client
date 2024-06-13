import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleJob } from "../../services/job";

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (jobId) {
      try {
        (async (jobId) => {
          const data = await fetchSingleJob(jobId);
          
          if (!data?.status || data.status !== 200) {
            alert(data?.response?.data?.message);
            
            navigate("/");

            return;
          }
          // alert(data?.data?.message);

          

          setJob(data?.data?.data);
        })(jobId);
      } catch (err) {
        alert("this job does not exist");
      }
    }
  }, []);
  return (
    <div>
      <p>{job?._id}</p>
      <h1>{job?.companyName}</h1>
      <h2>{job?.title}</h2>
      <ul>
        {job?.skills?.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <p>{job?.salary}</p>
      <p>{job?.jobType}</p>
      <p>{job?.location}</p>
      <p>{job?.locationType}</p>
      <p>{job?.aboutCompany}</p>
    </div>
  );
};

export default JobDetails;
