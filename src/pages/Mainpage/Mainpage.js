/** @format */

import React from "react";
import Page from "../../components/page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Abgd } from "../../icons/abgd";
import styles from "./MainPage.module.css";
import { useNavigate } from "react-router-dom";
import { Qartu } from "../../icons/qartu";

function Mainpage() {
	const navigate = useNavigate();

	return (
		<>
			<Header search={false} />

			<Page>
				<div>
					<div className={styles.mainTitleContainer}>
						<Qartu />
					</div>
				</div>
				<div className={styles.searchContainer}>
					<div className={styles.searchTitleContainer}>
						<h2>Search For A Verb</h2>
					</div>
					<SearchBar />
					<div className={styles.buttonContainer}>
						<button
							onClick={() => {
								navigate("/detailPage/sauzmoba");
							}}>
							One Verb
						</button>

						<button
							onClick={() => {
								navigate("/allVerb");
							}}>
							All Verb
						</button>
					</div>
				</div>
				<div style={{ padding: "20px" }}>
					<Abgd />
				</div>
			</Page>
			<Footer />
		</>
	);
}

export default Mainpage;
