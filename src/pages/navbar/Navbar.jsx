import { useNavigate } from "react-router-dom";
import { getUserInfo, removeUserInfo } from "../../services/localStorage";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, email, userId } = getUserInfo();
  const logoutHandler = () => {
    removeUserInfo();
    navigate("/login");
    return;
  };
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>JobFinder</div>
        <div className={styles.navLinks}>
          {token && email && userId ? (
            <>
              <div onClick={logoutHandler}>Logout</div>
              <div>Hello Recruitment</div>
              <div className={styles.avatar}>S</div>
            </>
          ): <div onClick={()=>navigate("/login")}>Login</div>}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
