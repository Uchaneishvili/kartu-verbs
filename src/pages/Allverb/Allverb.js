/** @format */

import { React, useState } from 'react';
import { Table, Card, Divider, Radio, Select, Input } from 'antd';
import { useList } from '../../hooks/TableDataLoader.js';
import Page from '../../components/page';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FormatData from '../../utils/FormatData';
const { Option } = Select;

const Allverb = () => {
	const [value, setValue] = useState('3sg');

	const radioHandler = (e) => {
		setValue(e.target.value);
	};

	const tenses = [
		'aorist ',
		'optative ',
		'imperfect ',
		'perfect ',
		'present ',
		'conditional',
		'future ',
		'conj-perfect',
		'conj-present ',
		'pluperfect ',
		'conj-future',
	];
	const [curTense, setCurTense] = useState(tenses[4]);
	const tensesHandler = (e) => {
		setCurTense(e);
	};

	const [list] = useList(
		`PREFIX n1: <file:///home/achiko/clarino/2022/>
SELECT DISTINCT ?inflected_verb_1 ?vn2_103 ?tense_in_paradigm_251 ?person_288 ?number_325
WHERE { ?inflected_verb_1 a n1:inflected_verb .
        ?inflected_verb_1 n1:vn2 ?vn2_103 .
        ?inflected_verb_1 n1:tense_in_paradigm ?tense_in_paradigm_251 .
        ?inflected_verb_1 n1:person ?person_288 .
        ?inflected_verb_1 n1:number ?number_325 .
		FILTER ( ?person_288 = n1:${value[0]}_person )
		?inflected_verb_1 n1:number n1:${value[1] + value[2]} .
		?inflected_verb_1 n1:tense_in_paradigm n1:${curTense} . 
	 }
LIMIT 200`
	);

	/*  
FILTER ( ?person_288 = n1:1_person )

        ?inflected_verb_1 n1:person n1:1_person .


  ?inflected_verb_1 n1:number n1:pl .

?inflected_verb_1 n1:tense_in_paradigm <file:///home/achiko/clarino/2022/conj-perfect> . 

*/

	const columns = [
		{
			title: 'Georgian Infinitive',
			dataIndex: 'vn2_103',
			key: 'geo',
			width: '200px',
			render: (val) => {
				return FormatData.convertLatinToGeorgian(val?.slice(3));
			},
		},

		{
			title: 'Latin',
			dataIndex: 'vn2_103',
			key: 'eng',
			width: '200px',

			render: (val) => {
				return val?.slice(3);
			},
		},
		{
			title: 'Tense',
			dataIndex: 'tense_in_paradigm_251',
			key: 'tense',
			width: '200px',

			render: (val) => {
				return val?.slice(3);
			},
		},

		{
			title: 'Number',
			dataIndex: 'number_325',
			key: 'number',
			width: '200px',

			render: (val) => {
				if (val === 'n1:sg') {
					return 'Singular';
				} else {
					return 'Plural';
				}
			},
		},

		{
			title: 'Person',
			dataIndex: 'person_288',
			key: 'Person',
			width: '200px',

			render: (val) => {
				if (val === 'n1:1_person') {
					return 'I';
				} else if (val === 'n1:2_person') {
					return 'II';
				} else {
					return 'III';
				}
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
					<div
						style={{
							width: '300px',
							backgroundColor: '#ececed',
							marginBottom: '30px',
						}}>
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
									title={'Person & Number'}
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										justifyContent: 'center',
										flexDirection: 'row',
										width: '100%',
									}}>
									<Radio.Group
										defaultValue={'3sg'}
										onChange={radioHandler}
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											justifyContent: 'center',
											flexDirection: 'row',
											width: '100%',
										}}>
										<div
											style={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'flex-start',
												flexDirection: 'column',
											}}>
											<Radio value={'1sg'}>1S</Radio>
											<Radio value='1pl'>1PL</Radio>
										</div>
										<div
											style={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'flex-start',
												flexDirection: 'column',
											}}>
											<Radio value='2sg'>2S</Radio>
											<Radio value='2pl'>2PL</Radio>
										</div>
										<div
											style={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'flex-start',
												flexDirection: 'column',
											}}>
											<Radio value='3sg'>3S</Radio>
											<Radio value='3pl'>3PL</Radio>
										</div>
									</Radio.Group>
								</Card>

								<Divider />
								<Card>
									<Select
										style={{ width: '100%' }}
										defaultValue={tenses[4]}
										// mode="multiple"
										placeholder='Please select'
										onChange={tensesHandler}>
										{tenses.map((tense, index) => {
											return (
												<Option
													key={index}
													value={tense}>
													{tense}
												</Option>
											);
										})}
									</Select>
								</Card>
								{/* <Divider /> */}
								{/* <Card title={"+ ROOT"}>
                  <Input
                    style={{ margin: "5px" }}
                    placeholder={"Starts with..."}
                  />
                  <Input
                    style={{ margin: "5px" }}
                    placeholder={"End with..."}
                  />
                  <Input style={{ margin: "5px" }} placeholder={"Contains.."} />
                </Card> */}
							</div>
						</Card>
					</div>
					<div
						style={{
							display: 'flex',
							height: '100%',
							justifyContent: 'center',
							backgroundColor: '#ececed',
							marginBottom: '30px',
						}}>
						<Card
							style={{
								width: '100%',
								backgroundColor: '#ececed',
							}}>
							<Table
								width={'100%'}
								bordered={false}
								columns={columns}
								dataSource={list}
								pagination={true}
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
