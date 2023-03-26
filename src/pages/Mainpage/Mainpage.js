/** @format */

import React from 'react';
import Page from '../../components/page';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';

function Mainpage() {
	return (
		<>
			<Header search={false} />

			<Page>
				<div>
					<SearchBar />
				</div>
			</Page>
			<Footer />
		</>
	);
}

export default Mainpage;
