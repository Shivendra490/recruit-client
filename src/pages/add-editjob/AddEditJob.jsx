import styles from "./AddEditJob.module.css";
import createJob from "../../assets/createJob.png";

const AddEditJob = () => {
  return (
    <main>
      <div className={styles.createJobContainer}>
        <section className={styles.left}>
          <h1 className={styles.heading}>Add Job description</h1>
          <form className={styles.form}>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Company Name</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter your company name here"
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Add logo URL</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter the link"
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Job position</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter job position"
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Monthly salary</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter Amount in rupees"
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Job Type</label>
              <div className={styles.inputSelectWrapper}>
                <select className={styles.inputSelect}>
                  <option value="">Select</option>
                  <option value="Internship">Internship</option>
                  <option value="Full time">Full Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Remote/office</label>
              <div className={styles.inputSelectWrapper}>
                <select className={styles.inputSelect}>
                  <option value="">Select</option>
                  <option value="Remote">Remote</option>
                  <option value="Office">Office</option>
                </select>
              </div>
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Location</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter Location"
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Job Description</label>
              <textarea
                className={styles.textarea}
                placeholder="Type the job description"
              ></textarea>
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>About Company</label>
              <textarea
                className={styles.textarea}
                placeholder="Type about your company"
              ></textarea>
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Skills Required</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter the must have skills"
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Information</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter the additional information"
              />
            </div>
            <div className={styles.buttonActionWrapper}>
              <button className={styles.cancelBtn}>Cancel</button>
              <button className={styles.addJobBtn}>+ Add Job</button>
             
            </div>
          </form>
        </section>
        <section className={styles.right}>
          <h2 className={styles.imgHeading}>
            <p className={styles.imgHeadingText}>
              Recruiter add job details here
            </p>
          </h2>
          <img src={createJob} />
        </section>
      </div>
    </main>
  );
};

export default AddEditJob;
