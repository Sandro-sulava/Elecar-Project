import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.HeaderBox}>
        <a href="/">
          <img src={logo} alt={logo} className={styles.Headerlogo} />
        </a>
      </div>
      <Navbar />
      <div className={styles.burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
