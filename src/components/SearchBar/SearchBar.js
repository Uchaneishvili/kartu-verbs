/** @format */

import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { Form } from 'antd';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`Searching for: ${searchTerm}`);
	};

	return (
		<div className={styles.searchContainer}>
			<Form
				onSubmit={handleSubmit}
				className={styles.searchForm}>
				<input
					className={styles.searchInput}
					type='text'
					value={searchTerm}
					onChange={handleChange}
					placeholder='Search any word'
					autoFocus
				/>

				<button
					type='submit'
					className={styles.searchButton}>
					Search
				</button>
			</Form>
		</div>
	);
};

export default SearchBar;
