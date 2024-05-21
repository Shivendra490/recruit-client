import styles from "./SignupLogin.module.css";
import signLoginImg from "../../assets/signLogin.png";

const Login = () => {
  return (
    <div className={styles.signupContainer}>
      <section className={styles.left}>
        <form className={styles.form}>
          <div className={styles.formHead}>
            <h1 className={styles.mainHeading}>Already have an account</h1>
            <h2 className={styles.subHeading}>
              Your personal job finder is here
            </h2>
          </div>
          <div className={styles.formBody}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Email"
            />
            <input
              type="password"
              className={styles.inputField}
              placeholder="Password"
            />
          </div>
          <div className={styles.formFooter}>
            <button type="submit" className={styles.button}>Sign in</button>
            <p className={styles.haveAccount}>Don t have an account? <span className={styles.linkText}>Sign Up</span></p>
          </div>
        </form>
      </section>
      <section className={styles.right}>
        <h2 className={styles.imgHeading}>
          <p className={styles.imgHeadingText}>Your Personal Job Finder</p>
        </h2>
        <img src={signLoginImg} />
      </section>
    </div>
  );
};

export default Login;
