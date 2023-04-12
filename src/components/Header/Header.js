/** @format */

import React, { useState } from 'react';
import styles from './Header.module.css';
import { MenuOutlined } from '@ant-design/icons';
import { SearchBarIcon } from '../../icons/searchBarIcon';
import { Form } from 'antd';
import { Logo } from '../../icons/logo';

import { useNavigate } from 'react-router-dom';

function Header(props) {
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();
	return (
		<div className={styles.nav}>
			<div
				className={styles.logoContainer}
				onClick={() => {
					navigate('/');
				}}>
				<div>
					<Logo />
				</div>
			</div>
			<ul className={styles.navUl}>
				<li>Home</li>
				<li>Link</li>
				<li>Disabled</li>
			</ul>

			{props.search && (
				<div className={styles.searchBarContainer}>
					<Form className={styles.searchForm}>
						<input
							className={styles.searchInput}
							type='text'
							defaultValue={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							placeholder='Search any word'
						/>

						<button
							type='submit'
							className={styles.searchButton}>
							<SearchBarIcon />
						</button>
					</Form>
				</div>
			)}
			<div className={styles.menuContainer}>
				<MenuOutlined />
			</div>
		</div>
	);
}

export default Header;
