import styles from "./AllJobs.module.css";
import searchIcon from "../../assets/searchIcon.png";
import crossIcon from "../../assets/crossIcon.png";

import employeesIcon from "../../assets/employeesIcon.png";
import flag from "../../assets/flag.png";

import companyImg1 from "../../assets/rhImg1.png";
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
            <span style={{ color: "#ED5353" }}>Clear</span>
          </div>
        </div>
      </div>

      <section className={styles.allJobsContainer}>
        <div className={styles.singleJobContainer}>
          <div className={styles.left}>
            <div className={styles.companyImg}>
              <img src={companyImg1} />
            </div>
            <div className={styles.jobComanyDetails}>
              <span className={styles.position}>Frontend Developer</span>
              <div className={styles.detailsWrapper}>
                <div className={styles.employeesDetails}>
                  <img src={employeesIcon} />
                  
                  <p>11-50</p>
                </div>
                <div className={styles.salary}>&#8377;50,000</div>
                <div className={styles.location}>
                  <img src={flag} /> <span>India</span>
                </div>
              </div>
              <div className={styles.jobTypeWrapper}>
                <div>Office</div>
                <div>Full Time</div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.skillListWrpper}>
              <div className={styles.unitSkillWrapper}>HTML</div>
              <div className={styles.unitSkillWrapper}>Javascript</div>
              <div className={styles.unitSkillWrapper}>CSS</div>
            </div>
            <div className={styles.buttonActions}>
                <button className={styles.editJobBtn}>Edit Job</button>
                <button className={styles.viewDetailsBtn}>View Details</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllJobs;
