/** @format */

import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.StyledContainer}>
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
		</footer>
	);
};

export default Footer;
