import { NavLink, useNavigate } from "react-router-dom";
import { getUserInfo, removeUserInfo } from "../../services/localStorage";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  console.log('hey nav')
  const { token, email, userId } = getUserInfo();
  const recruiterName=email?.split('@')[0]
  const logoutHandler = () => {
    removeUserInfo();
    navigate("/login");
    return;
  };

  
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo} onClick={()=>navigate("/")}>Recruit</div>
        <div className={styles.navLinks}>
          {token && email && userId ? (
            <>
              <div onClick={logoutHandler}>Logout</div>
              <NavLink to={"/"} className={({isActive})=>isActive ? styles.active : undefined}>Home</NavLink>
              <NavLink to={"/myjobs"} className={({isActive})=> isActive ? styles.active : undefined}>MyJobs</NavLink>
              <NavLink to={"/add-edit-job"} className={({isActive})=>isActive ? styles.active : undefined}>Add Job</NavLink>
              <div>Hello {recruiterName}</div>
              <div className={styles.avatar}>{email[0]?.toUpperCase()}</div>
            </>
          ): <div onClick={()=>navigate("/login")}>Login</div>}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
