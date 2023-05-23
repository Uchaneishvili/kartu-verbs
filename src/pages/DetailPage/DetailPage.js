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
		return `PREFIX n1: <file:///home/achiko/clarino/2022/>
	SELECT DISTINCT ?inflected_verb_1 ?pre2_38 ?preverb_75 ?root_112 ?sf2_149 ?number_186 ?person_223 ?tense_in_paradigm_260
	WHERE { ?inflected_verb_1 a n1:inflected_verb .
	        ?inflected_verb_1 n1:vn2 n1:${id} .
	        ?inflected_verb_1 n1:pre2 ?pre2_38 .
	        ?inflected_verb_1 n1:preverb ?preverb_75 .
	        ?inflected_verb_1 n1:root ?root_112 .
	        ?inflected_verb_1 n1:sf2 ?sf2_149 .
	        ?inflected_verb_1 n1:number ?number_186 .
	        ?inflected_verb_1 n1:person ?person_223 .
	        ?inflected_verb_1 n1:tense_in_paradigm ?${prop} . }
	LIMIT 10`;
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
		switch (record.person_223.slice(3)) {
			case '1_person':
				if (record.number_186.slice(3) === 'pl') {
					return '1pl';
				} else {
					return '1s';
				}
			case '2_person':
				if (record.number_186.slice(3) === 'pl') {
					return '2pl';
				} else {
					return '2s';
				}
			case '3_person':
				if (record.number_186.slice(3) === 'pl') {
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
			key: 'Person and number',
			render: (val) => {
				return <>{generatePersonAndNumber(val)}</>;
			},
		},
		{
			key: 'Latin',
			render: (val) => {
				let word = `${val.pre2_38.slice(3)}-${val.preverb_75.slice(
					3
				)}-${val.root_112.slice(3)}-${val.sf2_149.slice(3)}`;

				if (val.preverb_75.includes('preverb')) {
					word = `${val.pre2_38.slice(3)}-${val.root_112.slice(
						3
					)}-${val.sf2_149.slice(3)}`;
				}

				return word;
			},
		},
		{
			key: 'Georgian',
			render: (record) => {
				if (record.preverb_75.includes('preverb')) {
					return (
						<div style={{ overflow: 'hidden' }}>
							<span style={{ color: '#fe7ef3' }}>
								{FormatData.convertLatinToGeorgian(record.pre2_38.slice(3))}
								<span style={{ color: '#000000' }}>-</span>
							</span>
							<span style={{ color: '#ff1d25' }}>
								{FormatData.convertLatinToGeorgian(record.root_112.slice(3))}
								<span style={{ color: '#000000' }}>-</span>
							</span>
							<span style={{ color: '#0001eb' }}>
								{FormatData.convertLatinToGeorgian(record.sf2_149.slice(3))}
							</span>
						</div>
					);
				} else {
					return (
						<div style={{ overflow: 'hidden' }}>
							<span style={{ color: '#fe7ef3' }}>
								{FormatData.convertLatinToGeorgian(record.pre2_38.slice(3))}
								<span style={{ color: '#000000' }}>-</span>
							</span>
							<span style={{ color: '#000000' }}>
								{FormatData.convertLatinToGeorgian(record.preverb_75.slice(3))}
								<span style={{ color: '#000000' }}>-</span>
							</span>
							<span style={{ color: '#ff1d25' }}>
								{FormatData.convertLatinToGeorgian(record.root_112.slice(3))}
								<span style={{ color: '#000000' }}>-</span>
							</span>
							<span style={{ color: '#0001eb' }}>
								{FormatData.convertLatinToGeorgian(record.sf2_149.slice(3))}
							</span>
						</div>
					);
				}
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
												width: 350,
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
												width: 350,
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
												width: 350,
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
