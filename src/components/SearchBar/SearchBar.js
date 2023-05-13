/** @format */

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';
import { Form } from 'antd';
import { useList } from '../../hooks/TableDataLoader';
import SearchSuggestion from '../SearchSuggestions/SearchSuggestions';
import { useCallback } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import FormatData from '../../utils/FormatData';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [suggestionsOpen, setSuggestionsOpen] = useState(false);
	const [suggestions, setSuggestions] = useState([]);

	const navigate = useNavigate();
	const inputRef = useRef(null);

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
		getSuggestions(event.target.value);
		if (event.target.value) {
			setSuggestionsOpen(true);
		} else {
			setSuggestionsOpen(false);
		}
	};

	const query = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX n1: <file:///home/ferre/data/ontologies/Kartu-verbs/>
SELECT DISTINCT ?verb_1 ?Georgian_form_103
WHERE { ?verb_1 rdfs:label ?constr_label3 .
        FILTER ( REGEX(str(?constr_label3), "${FormatData.convertGeorgianToLatin(
					searchTerm
				)}", 'i') )
        ?verb_1 a n1:verb .
        ?verb_1 n1:Georgian_form ?Georgian_form_103 . }
LIMIT 10`;

	const [list] = useList(query);

	const getSuggestions = useCallback(
		async (searchText) => {
			if (!searchText || searchText.length < 2) {
				return;
			}
			setSuggestions(list);
		},

		[list]
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`detailPage/${FormatData.getSearchSuggestion(list[0].verb_1)}`);
	};

	const resetValues = () => {
		setSuggestions([]);
		document.getElementsByTagName('body')[0].style.cssText =
			'overflow: auto; padding-inline-end: 0px;';
	};

	return (
		<div className={styles.searchContainer}>
			<Form className={styles.searchForm}>
				<button
					onClick={handleSubmit}
					type='submit'
					className={styles.searchButton}
					style={{
						zIndex: suggestionsOpen ? 102 : 0,
						position: suggestionsOpen ? 'relative' : 'initial',
					}}>
					<SearchOutlined />
				</button>
				<input
					id='search'
					name='searchText'
					style={{
						position: suggestionsOpen ? 'relative' : 'initial',
						zIndex: suggestionsOpen ? 102 : 0,
					}}
					className={styles.searchInput}
					placeholder='Search any word'
					onChange={(value) => (value ? handleChange(value) : resetValues())}
					onFocus={() => {
						setSuggestionsOpen(true);
					}}
				/>

				{suggestionsOpen && (
					<SearchSuggestion
						suggestion={suggestions}
						visible={suggestionsOpen}
						handleSubmit={handleSubmit}
						onClose={() => {
							setSuggestionsOpen(false);
							inputRef.current?.reset();
							setSuggestions([]);
							resetValues();
						}}
					/>
				)}
			</Form>
		</div>
	);
};

export default SearchBar;
