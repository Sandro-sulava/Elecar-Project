import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.HeaderBox}>
          <a href="/">
            <img src="/logo.svg" alt="Logo" className={styles.Headerlogo} />
          </a>
        </div>
        <Navbar />
        <div className={styles.burger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
