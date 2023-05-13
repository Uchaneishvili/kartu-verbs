/** @format */

import React from 'react';
import Backdrop from '../../ui/Backdrop/Backdrop';
import styles from './SearchSuggestions.module.css';
import SuggestionItem from './SuggestionItem';

const SearchSuggestions = (props) => {
	return (
		<>
			<Backdrop
				onClick={() => {
					props.onClose();
				}}
				visible={props.visible}
			/>
			{props.visible && props.suggestion.length ? (
				<ul className={styles.SearchSuggestion__result}>
					{props.suggestion.map((suggestion) => (
						<li key={suggestion.verb_1}>
							<SuggestionItem
								handleSubmit={props.handleSubmit}
								suggestion={suggestion}
								onNavigate={() => props.onClose()}
							/>
						</li>
					))}
				</ul>
			) : null}
		</>
	);
};

export default SearchSuggestions;
