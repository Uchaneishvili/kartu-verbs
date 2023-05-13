/** @format */

import React from 'react';
import styles from './SuggestionItem.module.css';
import FormatData from '../../utils/FormatData';
import { useNavigate } from 'react-router';

const SuggestionItem = (props) => {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div
				className={styles.description}
				onClick={() =>
					navigate(
						`detailPage/${FormatData.getSearchSuggestion(
							props.suggestion.verb_1
						)}`
					)
				}>
				<div className={styles.description__title}>
					{FormatData.slicedData(props.suggestion.Georgian_form_103)}
				</div>
				<div className={styles.description__properties}>
					<span className={styles.description__properties__unit}></span>
				</div>
			</div>
		</div>
	);
};

export default SuggestionItem;
