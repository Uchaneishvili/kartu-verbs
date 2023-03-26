/** @format */

import React from 'react';
import { Table, Collapse, Row } from 'antd';
import { useList } from '../../hooks/TableDataLoader.js';
import Page from '../../components/page';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function DetailPage() {
	const { Panel } = Collapse;

	const vars = ['1s', '2s', '3s', '1pl', '2pl', '3pl'];
	const [list] = useList(
		'http://servolis.irisa.fr:3737/kartuverbs/sparql',
		'PREFIX n1: <file:///home/ferre/data/ontologies/Kartu-verbs/> SELECT DISTINCT ?verb_1 ?Georgian_form_38 ?person_42 ?number_46 ?preverb_54 ?preradical_58 ?root_62 ?postradical_66 ?pFSF_70 ?ending_74 WHERE { ?verb_1 a n1:verb .?verb_1 n1:Georgian_form ?Georgian_form_38 .?verb_1 n1:person ?person_42 .?verb_1 n1:number ?number_46 .?verb_1 n1:preverb ?preverb_54 .?verb_1 n1:preradical ?preradical_58 .?verb_1 n1:root ?root_62 .?verb_1 n1:postradical ?postradical_66 .?verb_1 n1:pFSF ?pFSF_70 .?verb_1 n1:ending ?ending_74 . } LIMIT 50'
	);

	const generatePersonAndNumber = (record) => {
		switch (record.person_42.slice(3)) {
			case 'first':
				if (record.number_46.slice(3) == 'plural') {
					return '1pl';
				} else {
					return '1s';
				}
			case 'second':
				if (record.number_46.slice(3) == 'plural') {
					return '2pl';
				} else {
					return '2s';
				}
			case 'third':
				if (record.number_46.slice(3) == 'plural') {
					return '3pl';
				} else {
					return '3s';
				}

			default:
				return '1';
		}
	};
	const columns = [
		{
			render: (record, value, index) => {
				return <>{generatePersonAndNumber(record)}</>;
			},
		},

		{
			dataIndex: 'Georgian_form_38',
			render: (val) => {
				return val?.slice(3);
			},
		},

		{
			render: (record) => {
				return (
					<>
						{record.preverb_54.slice(3).replace(/-/g, '')}
						{record.preradical_58.slice(3).replace(/-/g, '')}
						{record.root_62.slice(3).replace(/-/g, '')}
						{record.postradical_66.slice(3).replace(/-/g, '')}
						{record.pFSF_70.slice(3).replace(/-/g, '')}
						{record.ending_74.slice(3).replace(/-/g, '')}
					</>
				);
			},
		},
	];

	return (
		<>
			<Header />
			<Page>
				<div className='page-container'>
					<div className='inner-container'>
						<Collapse
							defaultActiveKey={['1']}
							style={{ width: '100%' }}>
							<Panel
								header='This is panel header 1'
								key='1'>
								<Row style={{ justifyContent: 'space-between' }}>
									<Table
										size='small'
										bordered={false}
										columns={columns}
										dataSource={list}
										pagination={false}
										rowKey={(record) => record.verb_1}
									/>

									<Table
										size='small'
										bordered={false}
										columns={columns}
										dataSource={[]}
										pagination={false}
										rowKey={(record) => record.u}
									/>
									<Table
										size='small'
										bordered={false}
										columns={columns}
										dataSource={[]}
										pagination={false}
										rowKey={(record) => record.u}
									/>
								</Row>
							</Panel>
							<Panel
								header='This is panel header 2'
								key='2'></Panel>
							<Panel
								header='This is panel header 3'
								key='3'></Panel>
						</Collapse>
					</div>
				</div>
			</Page>
			<Footer />
		</>
	);
}

export default DetailPage;
