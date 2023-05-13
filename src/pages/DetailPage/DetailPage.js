/** @format */

import React from 'react';
import { Table, Collapse, Row, Card } from 'antd';
import { useList } from '../../hooks/TableDataLoader.js';
import Page from '../../components/page';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FormatData from '../../utils/FormatData';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
	const { id } = useParams();
	const { Panel } = Collapse;

	const query = (prop) => {
		return `PREFIX n1: <file:///home/ferre/data/ontologies/Kartu-verbs/>
	SELECT DISTINCT ?verb_1 ?person_42 ?number_46 ?preverb_54 ?preradical_58 ?root_62 ?postradical_66 ?pFSF_70 ?ending_74 ?English_infinitive_78 ?Georgian_form_115
	WHERE { ?verb_1 a n1:verb .
			?verb_1 n1:person ?person_42 .
			?verb_1 n1:number ?number_46 .
			?verb_1 n1:tense n1:${prop} .
			?verb_1 n1:preverb ?preverb_54 .
			?verb_1 n1:preradical ?preradical_58 .
			?verb_1 n1:root ?root_62 .
			?verb_1 n1:postradical ?postradical_66 .
			?verb_1 n1:pFSF ?pFSF_70 .
			?verb_1 n1:ending ?ending_74 .
			?verb_1 n1:Georgian_form ?Georgian_form_115 .
			?verb_1 n1:Georgian_infinitive n1:${id} .
		 }
	LIMIT 6`;
	};

	//PRESENT SUBSERIES
	const [present] = useList(query('present'));
	const [presentConjunctive] = useList(query('presentConjunctive'));
	const [presentPerfect] = useList(query('presentPerfect'));

	//FUTURE SUBSERIES
	const [future] = useList(query('future'));
	const [conditional] = useList(query('conditional'));
	const [futureConjunctive] = useList(query('futureConjunctive'));

	///AORIST SERIES
	const [aorist] = useList(query('aorist'));
	const [optative] = useList(query('optative'));

	//PERFECTIVE SERIES
	const [imperfect] = useList(query('imperfect'));
	const [pastPerfect] = useList(query('pastPerfect'));

	const generatePersonAndNumber = (record) => {
		switch (record.person_42.slice(3)) {
			case 'first':
				if (record.number_46.slice(3) === 'plural') {
					return '1pl';
				} else {
					return '1s';
				}
			case 'second':
				if (record.number_46.slice(3) === 'plural') {
					return '2pl';
				} else {
					return '2s';
				}
			case 'third':
				if (record.number_46.slice(3) === 'plural') {
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
			render: (record) => {
				return <>{generatePersonAndNumber(record)}</>;
			},
		},

		{
			dataIndex: 'Georgian_form_115',
			render: (val) => {
				return val?.slice(3);
			},
		},

		{
			render: (record) => {
				return (
					<div style={{ overflow: 'hidden' }}>
						<span style={{ color: '#000' }}>
							{FormatData.divideWord(record.preverb_54)}
						</span>
						<span style={{ color: '#FF0000' }}>
							{FormatData.divideWord(record.preradical_58)}
						</span>
						<span style={{ color: '#FF7F00' }}>
							{FormatData.divideWord(record.root_62)}
						</span>
						<span style={{ color: '#FFFF00' }}>
							{FormatData.divideWord(record.postradical_66)}
						</span>
						<span style={{ color: '#00FF00' }}>
							{FormatData.divideWord(record.pFSF_70)}
						</span>
						<span style={{ color: '#0000FF' }}>
							{FormatData.divideWord(record.ending_74)}
						</span>
					</div>
				);
			},
		},
	];

	return (
		<>
			<Header search={true} />
			<main>
				<Page>
					<div className='page-container'>
						<div className='inner-container'>
							<Collapse
								accordion
								defaultActiveKey={['1']}
								style={{ width: '100%' }}>
								<Panel
									header='Present Subseries'
									key='1'>
									<Row style={{ justifyContent: 'space-between' }}>
										<Card
											title='Present indicative'
											bordered={false}
											style={{
												width: 300,
											}}>
											<Table
												size='small'
												bordered={false}
												columns={columns}
												dataSource={present}
												pagination={false}
												rowKey={(record) => record.verb_1}
											/>
										</Card>
										<Card
											title='Present Conjunctive'
											bordered={false}
											style={{
												width: 300,
											}}>
											<Table
												size='small'
												bordered={false}
												columns={columns}
												dataSource={presentConjunctive}
												pagination={false}
												rowKey={(record) => record.verb_1}
											/>
										</Card>
										<Card
											title='Present Perfect'
											bordered={false}
											style={{
												width: 300,
											}}>
											<Table
												size='small'
												bordered={false}
												columns={columns}
												dataSource={presentPerfect}
												pagination={false}
												rowKey={(record) => record.verb_1}
											/>
										</Card>
									</Row>
								</Panel>

								<Panel
									header=' Future Subseries '
									key='2'>
									<Row style={{ justifyContent: 'space-between' }}>
										<Card
											title='Future'
											bordered={false}
											style={{
												width: 300,
											}}>
											<Table
												size='small'
												bordered={false}
												columns={columns}
												dataSource={future}
												pagination={false}
												rowKey={(record) => record.verb_1}
											/>
										</Card>
										<Card
											title='conditional'
											bordered={false}
											style={{
												width: 300,
											}}>
											<Table
												size='small'
												bordered={false}
												columns={columns}
												dataSource={conditional}
												pagination={false}
												rowKey={(record) => record.verb_1}
											/>
										</Card>
										<Card
											title='Future Conjuctive'
											bordered={false}
											style={{
												width: 300,
											}}>
											<Table
												size='small'
												bordered={false}
												columns={columns}
												dataSource={futureConjunctive}
												pagination={false}
												rowKey={(record) => record.verb_1}
											/>
										</Card>
									</Row>
								</Panel>

								<Panel
									header='Aoris Series'
									key='3'>
									<Row style={{ justifyContent: 'space-between' }}>
										<Card
											title='Aorist'
											bordered={false}
											style={{
												width: 300,
											}}>
											<Table
												size='small'
												bordered={false}
												columns={columns}
												dataSource={aorist}
												pagination={false}
												rowKey={(record) => record.verb_1}
											/>
										</Card>
										<Card
											title='Optative'
											bordered={false}
											style={{
												width: 300,
											}}>
											<Table
												size='small'
												bordered={false}
												columns={columns}
												dataSource={optative}
												pagination={false}
												rowKey={(record) => record.verb_1}
											/>
										</Card>
									</Row>
								</Panel>

								<Panel
									header='Perfect Indicative'
									key='4'>
									<Row style={{ justifyContent: 'space-between' }}>
										<Card
											title='Imperfect'
											bordered={false}
											style={{
												width: 300,
											}}>
											<Table
												size='small'
												bordered={false}
												columns={columns}
												dataSource={imperfect}
												pagination={false}
												rowKey={(record) => record.verb_1}
											/>
										</Card>
										<Card
											title='Past Perfect'
											bordered={false}
											style={{
												width: 300,
											}}>
											<Table
												size='small'
												bordered={false}
												columns={columns}
												dataSource={pastPerfect}
												pagination={false}
												rowKey={(record) => record.verb_1}
											/>
										</Card>
									</Row>
								</Panel>
							</Collapse>
						</div>
					</div>
				</Page>
			</main>

			<Footer />
		</>
	);
};

export default DetailPage;
