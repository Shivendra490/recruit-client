import styles from "./AllJobs.module.css";
import searchIcon from "../../assets/searchIcon.png";
import crossIcon from "../../assets/crossIcon.png";

import employeesIcon from "../../assets/employeesIcon.png";
import flag from "../../assets/flag.png";

// import companyImg1 from "../../assets/rhImg1.png";
import { useEffect, useState } from "react";
import { fetchAllJobs } from "../../services/job";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../services/localStorage";
const skillArr = [
  "frontend",
  "css",
  "javascript",
  "frontend",
  "css",
  "javascript",
  "frontend",
  "css",
  "javascript",
];

const AllJobs = () => {
  const navigate = useNavigate();
  const [allJobs, setAllJobs] = useState([]);
  const { token } = getUserInfo();

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
      <div className={styles.filterContainer}>
        <div className={styles.inputWrapper}>
          <img src={searchIcon} className={styles.searchIcon} />
          <input type="text" placeholder="Type any job title" />
        </div>
        <div className={styles.filterWrapper}>
          <div>
            <select className={styles.select}>
              <option value="">skills</option>
              <option value="javascript">Javascript</option>
              <option value="react">React</option>
              <option value="html">HTML</option>
              <option value="node">Node</option>
              <option value="css">CSS</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="C++">C++</option>
            </select>
          </div>
          <div className={styles.skillsWrapper}>
            {skillArr?.map((skill, index) => {
              return (
                <div key={index} className={styles.singleSkill}>
                  <div className={styles.skillName}>{skill}</div>
                  <div className={styles.cross}>
                    <img src={crossIcon} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.actionWrapper}>
            <button className={styles.primaryBtn}>Apply Filter</button>
            <button
              onClick={() => navigate("/add-edit-job")}
              className={styles.primaryBtn}
            >
              Add Job
            </button>
            <span style={{ color: "#ED5353" }}>Clear</span>
          </div>
        </div>
      </div>

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
                  {token && (
                    <button
                      className={styles.editJobBtn}
                      onClick={() => navigate(`/add-edit-job/${job._id}`)}
                    >
                      Edit Job
                    </button>
                  )}
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
