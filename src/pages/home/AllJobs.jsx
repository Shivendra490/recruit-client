import styles from "./AllJobs.module.css";
import searchIcon from "../../assets/searchIcon.png"

const AllJobs = () => {
  return (
    <>
      <div className={styles.filterContainer}>
        <div className={styles.inputWrapper}>
            <img src={searchIcon} className={styles.searchIcon}/>
            <input type="text" placeholder="Type any job title"/>
        </div>
        <div className={styles.filterWrapper}>
            
        </div>
      </div>
    </>
  );
};

export default AllJobs;
