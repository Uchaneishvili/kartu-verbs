/** @format */

import React from 'react';
import styles from './SuggestionItem.module.css';
import FormatData from '../../utils/FormatData';

const SuggestionItem = (props) => {
	return (
		<div className={styles.container}>
			<div
				className={styles.description}
				onClick={() => console.log('Here should be redirecting')}>
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
