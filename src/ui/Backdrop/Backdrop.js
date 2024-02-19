/** @format */

import React from 'react';

import styles from './Backdrop.module.css';

const Backdrop = (props) => {
	return (
		<>
			{props.visible ? (
				<div
					style={{
						zIndex: props.zIndex,
						backgroundColor: props.transparent ? 'transparent' : '',
					}}
					onClick={() => (props.onClick ? props.onClick() : null)}
					className={styles.container}></div>
			) : null}
		</>
	);
};

export default Backdrop;
