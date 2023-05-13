/** @format */

import React from 'react';
import { Table, Card, Divider, Radio, Select, Input } from 'antd';
import { useList } from '../../hooks/TableDataLoader.js';
import Page from '../../components/page';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FormatData from '../../utils/FormatData.js';
const { Option } = Select;

const Allverb = () => {
	const [list] = useList(
		`PREFIX p: <http://www.wikidata.org/prop/>
PREFIX n1: <file:///home/ferre/data/ontologies/Kartu-verbs/>
SELECT * WHERE { SERVICE
<http://servolis.irisa.fr:3737/kartuverbs/sparql> { SELECT DISTINCT
?verb_1 ?Georgian_form_38 ?tense_50 ?preverb_54 ?preradical_58 ?root_62
?postradical_66 ?pFSF_70 ?ending_74 ?English_infinitive_78
?French_infinitive_82 ?Georgian_infinitive_90
WHERE { ?verb_1 a n1:verb .
         ?verb_1 n1:Georgian_form ?Georgian_form_38 .
         ?verb_1 n1:person n1:third .
         ?verb_1 n1:number n1:singular .
         ?verb_1 n1:tense ?tense_50 .
         ?verb_1 n1:preverb ?preverb_54 .
         ?verb_1 n1:preradical ?preradical_58 .
         ?verb_1 n1:root ?root_62 .
         ?verb_1 n1:postradical ?postradical_66 .
         ?verb_1 n1:pFSF ?pFSF_70 .
         ?verb_1 n1:ending ?ending_74 .
         ?verb_1 n1:English_infinitive ?English_infinitive_78 .
         ?verb_1 n1:French_infinitive ?French_infinitive_82 .
         ?verb_1 n1:Georgian_infinitive ?Georgian_infinitive_90 . }
LIMIT 20}}`
	);

	console.log(list);

	const columns = [
		{
			title: 'Georgian Infinitive',
			dataIndex: 'Georgian_form_38',
			key: 'geo',
			render: (val) => {
				return val?.slice(3);
			},
		},
		{
			title: 'Georgian Infinitive',
			dataIndex: 'verb_1',
			key: 'geo',
			render: (val) => {
				return FormatData.divideWord(val);
			},
		},
		{
			title: 'English Infinitive',
			dataIndex: 'tense_50',
			key: 'eng',
			render: (val) => {
				return val?.slice(3);
			},
		},
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
		<div>
			<Page>
				<Header />

				<div
					style={{
						height: '100%',
						display: 'flex',
						paddingTop: '20px',
						flexDirection: 'row',
						flexWrap: 'nowrap',
						justifyContent: 'space-around',
					}}>
					<div style={{ width: '300px', backgroundColor: '#ececed' }}>
						<Card style={{ height: '100%', backgroundColor: '#ececed' }}>
							<div style={{ height: '100%' }}>
								<div
									style={{
										backgroundColor: 'white',
										display: 'flex',
										flexDirection: 'row',
										alignContent: 'center',
										flexWrap: 'nowrap',
										justifyContent: 'space-around',
										borderRadius: '5px',
									}}>
									<div
										style={{
											display: 'flex',
											flexWrap: 'nowrap',
											flexDirection: 'column',
											alignItems: 'center',
											width: '50px',
										}}>
										<Card
											size='small'
											style={{
												marginTop: '5px',
												marginBottom: '5px',
												backgroundColor: '#fe7ef3',
												width: '25px',
											}}
										/>
										<div style={{ fontSize: '10px' }}>Preradical</div>
									</div>

									<div
										style={{
											display: 'flex',
											flexWrap: 'nowrap',
											flexDirection: 'column',
											alignItems: 'center',
											width: '50px',
										}}>
										<Card
											size='small'
											style={{
												marginTop: '5px',
												marginBottom: '5px',
												backgroundColor: '#000000',
												width: '25px',
											}}
										/>
										<div style={{ fontSize: '10px' }}>Preverb</div>
									</div>

									<div
										style={{
											display: 'flex',
											flexWrap: 'nowrap',
											flexDirection: 'column',
											alignItems: 'center',
											width: '50px',
										}}>
										<Card
											size='small'
											style={{
												marginTop: '5px',
												marginBottom: '5px',
												backgroundColor: '#ff1d25',
												width: '25px',
											}}
										/>
										<div style={{ fontSize: '10px' }}>ROOT</div>
									</div>

									<div
										style={{
											display: 'flex',
											flexWrap: 'nowrap',
											flexDirection: 'column',
											alignItems: 'center',
											width: '50px',
										}}>
										<Card
											size='small'
											style={{
												marginTop: '5px',
												marginBottom: '5px',
												backgroundColor: '#0001eb',
												width: '25px',
											}}
										/>
										<div style={{ fontSize: '10px' }}>Stemformant</div>
									</div>

									<div
										style={{
											display: 'flex',
											flexWrap: 'nowrap',
											flexDirection: 'column',
											alignItems: 'center',
											width: '50px',
										}}>
										<Card
											size='small'
											style={{
												marginTop: '5px',
												marginBottom: '5px',
												backgroundColor: '#804008',
												width: '25px',
											}}
										/>
										<div style={{ fontSize: '10px' }}>Ending</div>
									</div>
								</div>
								<Divider />
								<Card
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										justifyContent: 'space-between',
										flexDirection: 'row',
									}}>
									<Radio.Group>
										<Radio
											style={{ display: 'block', marginBottom: '10px' }}
											value={6}>
											1S
										</Radio>
									</Radio.Group>
									<Radio.Group>
										<Radio
											style={{ display: 'block', marginBottom: '10px' }}
											value={6}>
											2S
										</Radio>
									</Radio.Group>
									<Radio.Group>
										<Radio
											style={{ display: 'block', marginBottom: '10px' }}
											value={6}>
											3S
										</Radio>
									</Radio.Group>
									<Radio.Group>
										<Radio
											style={{ display: 'block', marginBottom: '10px' }}
											value={6}>
											1PL
										</Radio>
									</Radio.Group>

									<Radio.Group>
										<Radio
											style={{ display: 'block', marginBottom: '10px' }}
											value={6}>
											2PL
										</Radio>
									</Radio.Group>
									<Radio.Group>
										<Radio
											style={{ display: 'block', marginBottom: '10px' }}
											value={6}>
											3PL
										</Radio>
									</Radio.Group>
								</Card>

								<Divider />
								<Card>
									<Select
										style={{ width: '100%' }}
										defaultValue={1}>
										<Option value={1}>Present Indicative</Option>
										<Option value={2}>Past Indicative</Option>
										<Option value={3}>Future Indicative</Option>
									</Select>
								</Card>
								<Divider />
								<Card title={'+ ROOT'}>
									<Input
										style={{ margin: '5px' }}
										placeholder={'Starts with...'}
									/>
									<Input
										style={{ margin: '5px' }}
										placeholder={'End with...'}
									/>
									<Input
										style={{ margin: '5px' }}
										placeholder={'Contains..'}
									/>
								</Card>
							</div>
						</Card>
					</div>
					<div
						style={{
							display: 'flex',
							height: '100%',
							justifyContent: 'center',
							backgroundColor: '#ececed',
						}}>
						<Card style={{ width: '100%', backgroundColor: '#ececed' }}>
							<Table
								width={'100%'}
								bordered={false}
								columns={columns}
								dataSource={list}
								pagination={false}
								rowKey={(record) => record.verb_1}
							/>
						</Card>
					</div>
				</div>

				<Footer />
			</Page>
		</div>
	);
};

export default Allverb;
