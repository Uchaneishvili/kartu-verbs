/** @format */

import React from "react";
import styles from "./page.module.css";

function Page({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Page;
