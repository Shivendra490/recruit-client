import styles from "./SignupLogin.module.css";
import signLoginImg from "../../assets/signLogin.png";

const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <section className={styles.left}>
        <form className={styles.form}>
          <div className={styles.formHead}>
            <h1 className={styles.mainHeading}>Create an account</h1>
            <h2 className={styles.subHeading}>
              Your personal job finder is here
            </h2>
          </div>
          <div className={styles.formBody}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Name"
            />
            <input
              type="text"
              className={styles.inputField}
              placeholder="Email"
            />
            <input
              type="text"
              className={styles.inputField}
              placeholder="Mobile"
            />
            <input
              type="text"
              className={styles.inputField}
              placeholder="Password"
            />
            <div className={styles.tncWrapper}>
              <input type="checkbox" className={styles.inputFideld} />
              <p className={styles.tnc}>
                By creating an account, I agree to our terms of use and privacy
                policy
              </p>
            </div>
          </div>
          <div className={styles.formFooter}>
            <button type="submit" className={styles.button}>Create Account</button>
            <p className={styles.haveAccount}>Already have an account? <span className={styles.linkText}>Sign In</span></p>
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

export default Signup;
