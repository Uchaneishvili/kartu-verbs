/** @format */

import React from 'react';
import Page from '../../components/page';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Table } from 'antd';
import { useList } from '../../hooks/TableDataLoader.js';

function Mainpage() {
	const [list] = useList(
		'http://servolis.irisa.fr:3737/kartuverbs/sparql',
		'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX n1: <file:///home/ferre/data/ontologies/Kartu-verbs/> SELECT ?u ?l ?p WHERE { VALUES ?u { <file:///home/ferre/data/ontologies/Kartu-verbs/დარდობდეთ> <file:///home/ferre/data/ontologies/Kartu-verbs/ვიჩქარებთ> <file:///home/ferre/data/ontologies/Kartu-verbs/თავაზობდით> } }'
	);

	const columns = [
		{
			title: 'erpId',
			sorter: true,
			dataIndex: 'u',
		},
	];

	return (
		<>
			<Header search={true} />

			<Page>
				{/* <SearchBar /> */}

				<Table
					columns={columns}
					dataSource={list}
				/>
			</Page>

			<Footer />
		</>
	);
}

export default Mainpage;
