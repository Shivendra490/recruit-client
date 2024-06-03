import styles from "./Home.module.css"
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
        <Outlet/>
    </main>
    </>
  )
}

export default Home
