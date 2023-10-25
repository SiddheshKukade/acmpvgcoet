import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router-dom";
const Navbar = ({ hamActive, setHamActive }) => {
  const logo = "https://i.ibb.co/nDTH0mW/logo.png";

  const handleClick = () => {
    setHamActive(!hamActive);
  };
  const location = useLocation();
  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className={`${styles.navLeft}`}>
          <a href="/home">
            <img src={logo} alt="logo" className={styles.brand} />
          </a>
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <div className={styles.verticalLine}> </div>
            <a className={`${styles.nav} center`} href="/home">
              Home
            </a>
            <a
              // onClick={() => {
              //   let link = window.location.href;
              //   window.location.href.replace = link + "/events";
              // }}
              href="events"
              // onClick={navigate.push("/events")}
              className={`${styles.nav} center`}
            >
              Events
            </a>
            <a href="about" className={`${styles.nav} center`}>
              About Us
            </a>
            <a href="team" className={`${styles.nav} center`}>
              Our Team
            </a>
          </div>
          <div className={styles.nav_buttons}>
            <a
              href="https://docs.google.com/forms/d/1vCa3Gzku4dQ4HBN3NOIflM6QPtosuAxOu399rwxd2iQ/"
              target="_blank"
              className={styles.login}
            >
              Subscribe to Us
            </a>
            <a href="why">
              <button className={styles.signup}>Why Join ?</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
