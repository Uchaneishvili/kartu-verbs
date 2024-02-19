/** @format */

import React from "react";
import styles from "./SuggestionItem.module.css";
import FormatData from "../../utils/FormatData";
import { useNavigate } from "react-router";

const SuggestionItem = (props) => {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div
				className={styles.description}
				onClick={() => {
					props.onNavigate();
					navigate(
						`/detailPage/${FormatData.parsing(props.suggestion.vn2_234.value)}`
					);
				}}>
				<div className={styles.description__title}>
					{FormatData.convertLatinToGeorgian(
						FormatData.parsing(props.suggestion.surface_form_197.value)
					)}{" "}
					/ {FormatData.parsing(props.suggestion.surface_form_197.value)}
				</div>
				<div className={styles.description__properties}>
					<span className={styles.description__properties__unit}></span>
				</div>
			</div>
		</div>
	);
};

export default SuggestionItem;
