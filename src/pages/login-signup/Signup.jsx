import styles from "./SignupLogin.module.css";
import signLoginImg from "../../assets/signLogin.png";
import { useState } from "react";
import { registerUser } from "../../services/auth";
import { Link, useNavigate } from "react-router-dom";

const initialUserData={name:"",email:"",mobile:"",password:""}

const Signup = () => {
  const navigate=useNavigate()
  const [user,setUser]=useState(initialUserData)
  const [isChecked,setIsChecked]=useState(false)
  const handleChange=(e)=>{
    const {name,value}=e.target 
    setUser({...user,[name]:value})
  }
  const handleCheck=(e)=>{
    setIsChecked(e.target.checked)
  }

  const handleSubmit=async(e)=>{
    try{
      e.preventDefault()
    const result=await registerUser(user)
    if(result?.status===201){
      alert(result.message)
      navigate("/login")
    }else{
      alert(result.message)
      return
    }
    
    }catch(err){
      console.log(err)
     alert("Something went wrong")
    }

  }
  
  return (
    <div className={styles.signupContainer}>
      <section className={styles.left}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formHead}>
            <h1 className={styles.mainHeading}>Create an account</h1>
            <h2 className={styles.subHeading}>
              Your personal job finder is here
            </h2>
          </div>
          <div className={styles.formBody}>
            <input
              type="text"
              name="name"
              className={styles.inputField}
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              className={styles.inputField}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="mobile"
              className={styles.inputField}
              placeholder="Mobile"
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              className={styles.inputField}
              placeholder="Password"
              onChange={handleChange}
            />
            <div className={styles.tncWrapper}>
              <input
                type="checkbox"
                id="tncCheck"
                checked={isChecked}
                className={styles.inputFideld}
                onChange={handleCheck}
              />
              <label className={styles.tnc} htmlFor="tncCheck">
                By creating an account, I agree to our terms of use and privacy
                policy
              </label>
            </div>
          </div>
          <div className={styles.formFooter}>
            <button type="submit" className={styles.button}>
              Create Account
            </button>
            <p className={styles.haveAccount}>
              Already have an account?{" "}
              <Link to={"/login"}className={styles.linkText}>Sign In</Link>
            </p>
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
