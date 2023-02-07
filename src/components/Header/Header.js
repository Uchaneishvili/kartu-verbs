/** @format */

import React from 'react';
import styles from './Header.module.css';
import { MenuOutlined } from '@ant-design/icons';

function Header() {
	return (
		<div className={styles.nav}>
			<div className={styles.logoContainer}>Kartu Verbs</div>
			<div className={styles.menuContainer}>
				<MenuOutlined />
			</div>
		</div>
	);
}

export default Header;
