/** @format */

import React from 'react';
import { Table, Row } from 'antd';
import { useList } from '../../hooks/TableDataLoader.js';
import Page from '../../components/page';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Allverb = () => {
	const [list] = useList(
		`PREFIX n1: <file:///home/ferre/data/ontologies/Kartu-verbs/>
    SELECT DISTINCT ?Georgian_infinitive_105 ?English_infinitive_1
    WHERE { ?thing_4 n1:English_infinitive ?English_infinitive_1 .
            ?thing_4 n1:Georgian_infinitive ?Georgian_infinitive_105 . }
    LIMIT 6`
	);

	const columns = [
		{
			title: 'Georgian Infinitive',
			dataIndex: 'Georgian_infinitive_105',
			key: 'geo',
			render: (val) => {
				return val?.slice(3);
			},
		},
		{
			title: 'English Infinitive',
			dataIndex: 'English_infinitive_1',
			key: 'eng',
			render: (val) => {
				return val?.slice(3);
			},
		},
	];

	return (
		<Page>
			<Header />
			<Row style={{ justifyContent: 'center' }}>
				<Table
					size='medium'
					bordered={false}
					columns={columns}
					dataSource={list}
					pagination={false}
					rowKey={(record) => record.verb_1}
				/>
			</Row>
			<Footer />
		</Page>
	);
};

export default Allverb;
