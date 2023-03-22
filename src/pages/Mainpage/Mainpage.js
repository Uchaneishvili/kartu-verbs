/** @format */

import React from 'react';
import Page from '../../components/page';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Table, Collapse, Row } from 'antd';
import { useList } from '../../hooks/TableDataLoader.js';

function Mainpage() {
	const { Panel } = Collapse;

	const vars = ['1s', '2s', '3s', '1pl', '2pl', '3pl'];
	const [list] = useList(
		'http://servolis.irisa.fr:3737/kartuverbs/sparql',
		'PREFIX n1: <file:///home/ferre/data/ontologies/Kartu-verbs/> SELECT DISTINCT ?verb_1 ?Georgian_form_38 ?pFSF_75 WHERE { ?verb_1 a n1:verb . ?verb_1 n1:Georgian_form ?Georgian_form_38 . ?verb_1 n1:pFSF ?pFSF_75 . } LIMIT 6'
	);

	const columns = [
		{
			render: (record, value, index) => {
				return vars[index];
			},
		},
		{
			dataIndex: 'verb_1',
			render: (val) => {
				const myArray = val?.slice(3).split('_');
				return myArray[0];
			},
		},
		{
			dataIndex: 'Georgian_form_38',
			render: (val) => {
				return val?.slice(3);
			},
		},
	];

	return (
		<>
			<Header search={true} />
			<div className='page-container'>
				<div className='inner-container'>
					<Page>
						{/* <SearchBar /> */}

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
										rowKey={(record) => record.u}
									/>

									<Table
										size='small'
										bordered={false}
										columns={columns}
										dataSource={list}
										pagination={false}
										rowKey={(record) => record.u}
									/>
									<Table
										size='small'
										bordered={false}
										columns={columns}
										dataSource={list}
										pagination={false}
										rowKey={(record) => record.u}
										x
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
					</Page>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Mainpage;
