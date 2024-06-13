import styles from "./AllJobs.module.css";

import employeesIcon from "../../assets/employeesIcon.png";
import flag from "../../assets/flag.png";

import { useEffect, useState } from "react";
import { fetchAllJobs } from "../../services/job";
import { useNavigate } from "react-router-dom";

const AllJobs = () => {
  const navigate = useNavigate();
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await fetchAllJobs();
      if (data.status !== 200) {
        alert(data.response.data.message);
      }
      setAllJobs(data.data.data);
    } catch (err) {
      alert("something went wrong");
    }
  };
  return (
    <>
      
      <h2>All Jobs</h2>
      <section className={styles.allJobsContainer}>
        {allJobs?.map((job) => {
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
                  <button
                    className={styles.viewDetailsBtn}
                    onClick={() => navigate(`job-details/${job._id}`)}
                  >
                    View Details
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

export default AllJobs;
