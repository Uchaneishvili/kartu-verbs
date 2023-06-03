/** @format */

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { Form } from "antd";
import { useList } from "../../hooks/TableDataLoader";
import SearchSuggestion from "../SearchSuggestions/SearchSuggestions";
import { useCallback } from "react";
import { SearchOutlined } from "@ant-design/icons";
import FormatData from "../../utils/FormatData";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
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

	const query = `PREFIX text: <http://jena.apache.org/text#>
PREFIX n1: <file:///home/achiko/clarino/2023/f12/>
SELECT DISTINCT ?inflected_verb_1 ?surface_form_197 ?vn2_234
WHERE { ?inflected_verb_1 text:query "${FormatData.convertGeorgianToLatin(
		searchTerm
	)}*" .
        ?inflected_verb_1 a n1:inflected_verb .
        ?inflected_verb_1 n1:surface_form ?surface_form_197 .
        ?inflected_verb_1 n1:vn2 ?vn2_234 . }
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

		navigate(
			`detailPage/${FormatData.getSearchSuggestion(
				FormatData.parsing(list[0]?.vn2_234.value)
			)}`
		);
	};

	const resetValues = () => {
		setSuggestions([]);
		document.getElementsByTagName("body")[0].style.cssText =
			"overflow: auto; padding-inline-end: 0px;";
	};

	return (
		<div className={styles.searchContainer}>
			<Form className={styles.searchForm}>
				<button
					onClick={handleSubmit}
					type="submit"
					className={styles.searchButton}
					style={{
						zIndex: suggestionsOpen ? 102 : 0,
						position: suggestionsOpen ? "relative" : "initial",
					}}>
					<SearchOutlined />
				</button>
				<input
					id="search"
					name="searchText"
					style={{
						position: suggestionsOpen ? "relative" : "initial",
						zIndex: suggestionsOpen ? 102 : 0,
					}}
					className={styles.searchInput}
					placeholder="Search any verb..."
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
