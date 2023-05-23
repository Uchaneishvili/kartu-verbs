/** @format */

import React from 'react';

import styles from './Footer.module.css';
import { Tsu } from '../../icons/tsu';
import { UniRennes } from '../../icons/uniRennes';
import { Irisa } from '../../icons/irisa';

const Footer = () => {
	return (
		<footer className={styles.StyledContainer}>
			<div className={styles.StyledWrapper}>
				<div className={styles.container}>
					<ul>
						<li>About us</li>
						<li>Authorization</li>
						<li>Terms and Conditions</li>
					</ul>
					<div className={styles.logosContainer}>
						<Irisa />
						<UniRennes />
						<Tsu />
					</div>
				</div>

				<ul>
					<li>Contact & FAQ</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
