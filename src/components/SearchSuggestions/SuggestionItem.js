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
						`detailPage/${FormatData.slicedData(props.suggestion.vn2_103)}`
					)
				}>
				<div className={styles.description__title}>
					{FormatData.convertLatinToGeorgian(
						FormatData.slicedData(props.suggestion.surface_form_140)
					)}{' '}
					/ {FormatData.slicedData(props.suggestion.surface_form_140)}
				</div>
				<div className={styles.description__properties}>
					<span className={styles.description__properties__unit}></span>
				</div>
			</div>
		</div>
	);
};

export default SuggestionItem;
