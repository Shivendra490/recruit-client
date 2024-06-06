import styles from "./SignupLogin.module.css";
import signLoginImg from "../../assets/signLogin.png";
import { useState } from "react";
import { loginUser } from "../../services/auth";
import { Link, useNavigate } from "react-router-dom";
import { storeUserInfo } from "../../services/localStorage";

const initialUserCred={email:"",password:""}

const Login = () => {
  const [user,setUser]=useState(initialUserCred)
  const navigate=useNavigate()

  const handleChange=(e)=>{
    const {name,value}=e.target 
    setUser({...user,[name]:value})
  }


  const handleSubmit=async(e)=>{
   try{
    e.preventDefault()
    const data=await loginUser(user)
    console.log("dataa",data)
    if(data?.status!==200){
      console.log("err heeeeeeeere",data)
      alert(data.response.data.message)
      return
    }
    const {token,userId,email}=data.data
    storeUserInfo(token,userId,email)
    navigate('/')
    alert(data.data.message)

   }catch(err){
    console.log('ERROR inside login.jsx',err)
   }



  }
  return (
    <div className={styles.signupContainer}>
      <section className={styles.left}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              className={styles.inputField}
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className={styles.formFooter}>
            <button type="submit" className={styles.button}>Sign in</button>
            <p className={styles.haveAccount}>Don t have an account? <Link to={"/signup"} className={styles.linkText}>Sign Up</Link></p>
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
