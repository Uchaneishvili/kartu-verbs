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
		`PREFIX n1: <file:///home/achiko/clarino/2022/>
SELECT DISTINCT ?inflected_verb_1 ?vn2_103 ?surface_form_140 ?number_177 ?person_214 ?tense_in_paradigm_251
WHERE { ?inflected_verb_1 a n1:inflected_verb .
        ?inflected_verb_1 n1:vn2 ?vn2_103 .
        ?inflected_verb_1 n1:surface_form ?surface_form_140 .
        ?inflected_verb_1 n1:number ?number_177 .
        ?inflected_verb_1 n1:person ?person_214 .
        ?inflected_verb_1 n1:tense_in_paradigm ?tense_in_paradigm_251 . }
LIMIT 200`
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
