import styles from "./Home.module.css"
import Navbar from '../navbar/Navbar'
import searchIcon from "../../assets/searchIcon.png";
import crossIcon from "../../assets/crossIcon.png";
import { Outlet } from 'react-router-dom'

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

const Home = () => {
  

 
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
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
            
            <span style={{ color: "#1679ab" }}>Clear</span>
          </div>
        </div>
      </div>
        <Outlet/>
    </main>
    </>
  )
}

export default Home
