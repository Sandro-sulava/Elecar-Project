import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav_container}>
        <ul className={styles.UL_Box}>
          <li>
            <NavLink to="/" className={styles.Homebutton}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/popular"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/featured"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Featured
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
