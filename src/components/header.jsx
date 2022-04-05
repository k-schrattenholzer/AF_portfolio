import { Link } from "react-router-dom"
import homeIcon from '../icons/home.png'
import smileIcon from '../icons/smile.png'
import icon from '../icons/orangeBlub.PNG'
import planeIcon from '../icons/plane.png'
import styles from '../App.module.css'

export default function header() {
  return (
    <>
      <header >
        <img src={icon} alt="home navigation icon" className={styles.logo} />      
        <h1>Ashley Fisher</h1>
        <div className={styles.headerContainer}>
            <Link to="/" className={styles.navLink}>
              <img src={homeIcon} alt="home navigation icon" />           
            </Link>
          <br />
          <Link to="/about" className={styles.navLink}>
            <img src={smileIcon} alt="about navigation icon" />
          </Link>
          <br />
          <Link to="/contact" className={styles.navLink}>
            <img src={planeIcon} alt="contact navigation icon" />
          </Link>
        </div>
      </header>
    </>
  )
}
