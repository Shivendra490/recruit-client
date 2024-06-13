import styles from "./AllJobs.module.css";

import employeesIcon from "../../assets/employeesIcon.png";
import flag from "../../assets/flag.png";

import { useEffect, useState } from "react";
import { deleteJob, fetchAllMyJobs } from "../../services/job";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../services/localStorage";
import { RiDeleteBinLine } from "react-icons/ri";

const MyJobs = () => {
  const navigate = useNavigate();
  const [allMyJobs, setAllMyJobs] = useState([]);
  const { token, userId } = getUserInfo();

  useEffect(() => {
    if (userId) {
      fetchJobs(userId);
    }
  }, []);

  const fetchJobs = async (userId) => {
    try {
      const response = await fetchAllMyJobs(userId);

      if (response?.status === 200) {
        setAllMyJobs(response?.data?.data);
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.log(err);
      alert("something went wrong");
    }
  };

  const deleteJobHandler = async (jobId) => {
    try {
      const response = await deleteJob(jobId);
      console.log("deleteresponse", response);
      if (response?.status === 200) {
        const id = response?.data?.data?._id;
        const updatedJobList = allMyJobs?.filter((job) => {
          return job._id.toString() !== id.toString();
        });
        setAllMyJobs(updatedJobList);
        alert(response?.data?.message);
      } else {
        alert(response?.data?.message);
      }
    } catch (err) {
      alert("something went wrong");
    }
  };
  return (
    <>
      <h2>Jobs Created By Me</h2>
      <section className={styles.allJobsContainer}>
        {allMyJobs?.length === 0 && <div>No job created yet</div>}
        {allMyJobs?.map((job) => {
          return (
            <div key={job?._id} className={styles.singleJobContainer}>
              <div className={styles.left}>
                <div className={styles.companyImg}>
                  <img src={job?.companyLogo} />
                </div>
                <div className={styles.jobComanyDetails}>
                  <span className={styles.position}>{job?.title}</span>
                  <div className={styles.detailsWrapper}>
                    <div className={styles.employeesDetails}>
                      <img src={employeesIcon} />

                      <p>11-50</p>
                    </div>
                    <div className={styles.salary}>&#8377;{job?.salary}</div>
                    <div className={styles.location}>
                      <img src={flag} /> <span>{job?.location}</span>
                    </div>
                  </div>
                  <div className={styles.jobTypeWrapper}>
                    <div>{job?.locationType}</div>
                    <div>{job?.jobType}</div>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.skillListWrpper}>
                  <div className={styles.unitSkillWrapper}>
                    {job?.skills[0]}
                  </div>
                  <div className={styles.unitSkillWrapper}>
                    {job?.skills[1]}
                  </div>
                  <div className={styles.unitSkillWrapper}>
                    {job?.skills[2]}
                  </div>
                </div>
                <div className={styles.buttonActions}>
                  {token && userId === job.refUserId && (
                    <button
                      className={styles.editJobBtn}
                      onClick={() => navigate(`/add-edit-job/${job._id}`)}
                    >
                      Edit Job
                    </button>
                  )}
                  <button
                    className={styles.viewDetailsBtn}
                    onClick={() => navigate(`/job-details/${job._id}`)}
                  >
                    View Details
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => deleteJobHandler(job._id)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MyJobs;
