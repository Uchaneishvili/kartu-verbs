/** @format */

import React from 'react';
import styles from './Header.module.css';
function Header() {
	return (
		<div className={styles.nav}>
			<div
				className={styles.navBtn}
				id='nav-check'></div>

			<div className={styles.navLink}></div>
		</div>
	);
}

export default Header;
