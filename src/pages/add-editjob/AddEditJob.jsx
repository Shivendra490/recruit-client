import { createJob, fetchSingleJob, updateJob } from "../../services/job";
import styles from "./AddEditJob.module.css";
import createJobImage from "../../assets/createJob.png";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const initialJob = {
  companyName: "",
  companyLogo: "",
  title: "",
  salary: "",
  jobType: "",
  location: "",
  locationType: "",
  description: "",
  aboutCompany: "",
  skills: "",
  information: "",
};
const AddEditJob = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [job, setJob] = useState(initialJob);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (jobId) {
        const response = await updateJob(job);

        if (response.status === 200) {
          alert(response?.data?.message);
        } else {
          alert(response?.data?.message);
        }
        navigate("/");
        return;
      }
      const response = await createJob(job);

      if (response.status === 201) {
        alert(response?.data?.message);
      } else {
        alert(response?.data?.message);
      }

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    if (jobId) {
      try {
        (async (jobId) => {
          const response = await fetchSingleJob(jobId);

          if (response?.status === 200) {
            alert(response?.data?.message);
            setJob({
              ...response?.data?.data,
              skills: response?.data?.data?.skills?.join(","),
            });
            return;
          } else {
            alert(response?.data?.message);
            navigate("/");
          }
        })(jobId);
      } catch (err) {
        alert("this job does not exist");
      }
    }
  }, []);

  return (
    <main>
      <div className={styles.createJobContainer}>
        <section className={styles.left}>
          <h1 className={styles.heading}>Add Job description</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Company Name</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter your company name here"
                name="companyName"
                value={job?.companyName}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Add logo URL</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter the link"
                name="companyLogo"
                value={job?.companyLogo}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Job position</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter job position"
                name="title"
                value={job?.title}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Monthly salary</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter Amount in rupees"
                name="salary"
                value={job?.salary}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Job Type</label>
              <div className={styles.inputSelectWrapper}>
                <select
                  className={styles.inputSelect}
                  name="jobType"
                  value={job?.jobType}
                  onChange={onChangeHandler}
                >
                  <option value="">Select</option>
                  <option value="Internship">Internship</option>
                  <option value="Fulltime">Fulltime</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Remote/office</label>
              <div className={styles.inputSelectWrapper}>
                <select
                  className={styles.inputSelect}
                  name="locationType"
                  value={job?.locationType}
                  onChange={onChangeHandler}
                >
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
                name="location"
                value={job?.location}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Job Description</label>
              <textarea
                className={styles.textarea}
                placeholder="Type the job description"
                name="description"
                value={job?.description}
                onChange={onChangeHandler}
              ></textarea>
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>About Company</label>
              <textarea
                className={styles.textarea}
                placeholder="Type about your company"
                name="aboutCompany"
                value={job?.aboutCompany}
                onChange={onChangeHandler}
              ></textarea>
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Skills Required</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter the must have skills"
                name="skills"
                value={job?.skills}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Information</label>
              <input
                type="text"
                className={styles.inputText}
                placeholder="Enter the additional information"
                name="information"
                value={job?.information}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.buttonActionWrapper}>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button className={styles.addJobBtn} type="submit">
                {jobId ? "Update Job" : "+ Add Job"}
              </button>
            </div>
          </form>
        </section>
        <section className={styles.right}>
          <h2 className={styles.imgHeading}>
            <p className={styles.imgHeadingText}>
              Recruiter add job details here
            </p>
          </h2>
          <img src={createJobImage} />
        </section>
      </div>
    </main>
  );
};

export default AddEditJob;
