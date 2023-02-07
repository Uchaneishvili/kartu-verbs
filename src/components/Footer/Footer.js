import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.StyledContainer}>
      <div className={styles.StyledWrapper}>
        <ul>
          <li>about us</li>
          <li>Authorization</li>
        </ul>

        <ul>
          <li>Terms and Conditions</li>
          <li>Contracts</li>
        </ul>

        <ul>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
