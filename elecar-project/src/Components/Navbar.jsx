import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/featured">Featured</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
