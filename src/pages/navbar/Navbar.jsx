import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>JobFinder</div>
        <div className={styles.navLinks}>
            <div>Logout</div>
            <div>Hello Recruitment</div>
            <div className={styles.avatar}>
                S
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
