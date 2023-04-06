import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.StyledContainer}>
      <div className={styles.StyledWrapper}>
        <ul>
          <li>About us</li>
          <li>Authorization</li>
          <li>Terms and Conditions</li>
        </ul>
        <ul>
          <li>Contact & FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
