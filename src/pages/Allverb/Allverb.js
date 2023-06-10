import { React, useState, useEffect } from "react";
import { Table, Card, Divider, Radio, Select } from "antd";
import { useList } from "../../hooks/TableDataLoader.js";
import Page from "../../components/page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FormatData from "../../utils/FormatData";
import { Link } from "react-router-dom";
const { Option } = Select;

const Allverb = () => {
	const [value, setValue] = useState("3sg");
	const [loader, setLoader] = useState(true);

	const radioHandler = (e) => {
		setValue(e.target.value);
	};

	const generatePersonAndNumber = (record) => {
		switch (FormatData.parsing(record.person_217.value)) {
			case "1":
				if (FormatData.parsing(record.number_216.value) === "pl") {
					return "1PL";
				} else {
					return "1S";
				}
			case "2":
				if (FormatData.parsing(record.number_216.value) === "pl") {
					return "2PL";
				} else {
					return "2S";
				}
			case "3":
				if (FormatData.parsing(record.number_216.value) === "pl") {
					return "3PL";
				} else {
					return "3S";
				}
			default:
				return "-";
		}
	};
	const tenses = [
		"aorist ",
		"optative ",
		"imperfect ",
		"perfect ",
		"present ",
		"conditional",
		"future ",
		"conj-perfect",
		"conj-present ",
		"pluperfect ",
		"conj-future",
	];
	const [curTense, setCurTense] = useState(tenses[4]);
	const tensesHandler = (e) => {
		setCurTense(e);
	};

	const [list] = useList(
		`PREFIX n1: <file:///home/achiko/clarino/2023/f12/>
SELECT DISTINCT ?inflected_verb_1 ?vn2_140 ?preverb_178 ?pre2_221 ?root_220 ?sf2_219 ?tense_218 ?person_217 ?number_216 ?ending_215
WHERE { ?inflected_verb_1 a n1:inflected_verb .
        ?inflected_verb_1 n1:vn2 ?vn2_140 .
        ?inflected_verb_1 n1:preverb ?preverb_178 .
        ?inflected_verb_1 n1:pre2 ?pre2_221 .
        ?inflected_verb_1 n1:root ?root_220 .
        ?inflected_verb_1 n1:sf2 ?sf2_219 .
        ?inflected_verb_1 n1:ending ?ending_215 .
        ?inflected_verb_1 n1:person ?person_217 .
        ?inflected_verb_1 n1:number ?number_216 .
        ?inflected_verb_1 n1:tense ?tense_218 .
      	?inflected_verb_1 n1:number n1:${value[1] + value[2]}.
		    ?inflected_verb_1 n1:person n1:${value[0]} .
		    ?inflected_verb_1 n1:tense n1:${curTense} .}
LIMIT 200`
	);

	useEffect(() => {
		if (list.length > 0) {
			setLoader(false);
		}
	}, [list]);

	const columns = [
		{
			title: "VERBAL NOUN (GEO)",
			width: "200px",
			key: "VERBAL NOUN (GEO)",
			sorter: (a, b) => {
				const verbalNounA = FormatData.parsing(a.vn2_140.value);
				const verbalNounB = FormatData.parsing(b.vn2_140.value);

				if (verbalNounA < verbalNounB) {
					return -1;
				}
				if (verbalNounA > verbalNounB) {
					return 1;
				}

				return 0;
			},
			render: (record) => {
				return (
					<Link to={`/detailPage/${FormatData.parsing(record.vn2_140.value)}`}>
						{FormatData.convertLatinToGeorgian(
							FormatData.parsing(record.vn2_140.value)
						)}
					</Link>
				);
			},
		},
		{
			title: "VERBAL NOUN (ENG)",
			width: "200px",
			key: "VERBAL NOUN (ENG)",
			render: (record) => {
				return FormatData.parsing(record.vn2_140.value);
			},
		},
		{
			title: "VERBAL FORM (GEO)",
			width: "200px",
			key: "VERBAL FORM (GEO)",
			render: (record) => {
				return (
					<span
						style={{
							overflow: "hidden",
							display: "flex",
							width: "100%",
							justifyContent: "center",
						}}>
						<span style={{ color: "#fe7ef3" }}>
							{FormatData.convertLatinToGeorgian(
								FormatData.parsing(record.pre2_221.value)
							)}
						</span>
						<span style={{ color: "#000000" }}>
							{FormatData.convertLatinToGeorgian(
								FormatData.parsing(record.preverb_178.value)
							)}
						</span>

						<span style={{ color: "#ff1d25" }}>
							{FormatData.convertLatinToGeorgian(
								FormatData.parsing(record.root_220.value)
							)}
						</span>
						<span style={{ color: "#0001eb" }}>
							{FormatData.convertLatinToGeorgian(
								FormatData.parsing(record.sf2_219.value)
							)}
						</span>
						<span style={{ color: "#804008" }}>
							{FormatData.convertLatinToGeorgian(
								FormatData.parsing(record.ending_215.value)
							)}
						</span>
					</span>
				);
			},
		},
		{
			title: "VERBAL FORM (ENG)",
			width: "200px",
			key: "VERBAL FORM (ENG)",
			render: (record) => {
				return (
					<span
						style={{
							overflow: "hidden",
							display: "flex",
							width: "100%",
							justifyContent: "center",
						}}>
						<span style={{ color: "#fe7ef3" }}>
							{FormatData.parsing(record.pre2_221.value)}
						</span>
						<span style={{ color: "#000000" }}>
							{FormatData.parsing(record.preverb_178.value)}
						</span>

						<span style={{ color: "#ff1d25" }}>
							{FormatData.parsing(record.root_220.value)}
						</span>
						<span style={{ color: "#0001eb" }}>
							{FormatData.parsing(record.sf2_219.value)}
						</span>
						<span style={{ color: "#804008" }}>
							{FormatData.parsing(record.ending_215.value)}
						</span>
					</span>
				);
			},
		},
		{
			title: "PERSON AND NUMBER",
			width: "200px",
			key: "PERSON AND NUMBER",
			render: (record) => {
				return <>{generatePersonAndNumber(record)}</>;
			},
		},

		{
			title: "Tense",
			width: "200px",
			key: "Tense",
			render: (record) => {
				return FormatData.parsing(record.tense_218.value);
			},
		},
	];

	return (
		<div>
			<Page>
				<Header />

				<div
					style={{
						height: "100%",
						display: "flex",
						paddingTop: "20px",
						flexDirection: "row",
						flexWrap: "nowrap",
						justifyContent: "space-around",
					}}>
					<div
						style={{
							width: "300px",
							backgroundColor: "#ececed",
							marginBottom: "30px",
						}}>
						<Card style={{ height: "100%", backgroundColor: "#ececed" }}>
							<div style={{ height: "100%" }}>
								<div
									style={{
										backgroundColor: "white",
										display: "flex",
										flexDirection: "row",
										alignContent: "center",
										flexWrap: "nowrap",
										justifyContent: "space-around",
										borderRadius: "5px",
									}}>
									<div
										style={{
											display: "flex",
											flexWrap: "nowrap",
											flexDirection: "column",
											alignItems: "center",
											width: "50px",
										}}>
										<Card
											size="small"
											style={{
												marginTop: "5px",
												marginBottom: "5px",
												backgroundColor: "#fe7ef3",
												width: "25px",
											}}
										/>
										<div style={{ fontSize: "10px" }}>Preradical</div>
									</div>

									<div
										style={{
											display: "flex",
											flexWrap: "nowrap",
											flexDirection: "column",
											alignItems: "center",
											width: "50px",
										}}>
										<Card
											size="small"
											style={{
												marginTop: "5px",
												marginBottom: "5px",
												backgroundColor: "#000000",
												width: "25px",
											}}
										/>
										<div style={{ fontSize: "10px" }}>Preverb</div>
									</div>

									<div
										style={{
											display: "flex",
											flexWrap: "nowrap",
											flexDirection: "column",
											alignItems: "center",
											width: "50px",
										}}>
										<Card
											size="small"
											style={{
												marginTop: "5px",
												marginBottom: "5px",
												backgroundColor: "#ff1d25",
												width: "25px",
											}}
										/>
										<div style={{ fontSize: "10px" }}>ROOT</div>
									</div>

									<div
										style={{
											display: "flex",
											flexWrap: "nowrap",
											flexDirection: "column",
											alignItems: "center",
											width: "50px",
										}}>
										<Card
											size="small"
											style={{
												marginTop: "5px",
												marginBottom: "5px",
												backgroundColor: "#0001eb",
												width: "25px",
											}}
										/>
										<div style={{ fontSize: "10px" }}>Stemformant</div>
									</div>

									<div
										style={{
											display: "flex",
											flexWrap: "nowrap",
											flexDirection: "column",
											alignItems: "center",
											width: "50px",
										}}>
										<Card
											size="small"
											style={{
												marginTop: "5px",
												marginBottom: "5px",
												backgroundColor: "#804008",
												width: "25px",
											}}
										/>
										<div style={{ fontSize: "10px" }}>Ending</div>
									</div>
								</div>
								<Divider />
								<Card
									title={"Person & Number"}
									style={{
										display: "flex",
										flexWrap: "wrap",
										justifyContent: "center",
										flexDirection: "row",
										width: "100%",
									}}>
									<Radio.Group
										defaultValue={"3sg"}
										onChange={radioHandler}
										style={{
											display: "flex",
											flexWrap: "wrap",
											justifyContent: "center",
											flexDirection: "row",
											width: "100%",
										}}>
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "flex-start",
												flexDirection: "column",
											}}>
											<Radio value={"1sg"}>1S</Radio>
											<Radio value="1pl">1PL</Radio>
										</div>
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "flex-start",
												flexDirection: "column",
											}}>
											<Radio value="2sg">2S</Radio>
											<Radio value="2pl">2PL</Radio>
										</div>
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "flex-start",
												flexDirection: "column",
											}}>
											<Radio value="3sg">3S</Radio>
											<Radio value="3pl">3PL</Radio>
										</div>
									</Radio.Group>
								</Card>

								<Divider />
								<Card>
									<Select
										style={{ width: "100%" }}
										defaultValue={tenses[4]}
										// mode="multiple"
										placeholder="Please select"
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
							display: "flex",
							height: "100%",
							justifyContent: "center",
							backgroundColor: "#ececed",
							marginBottom: "30px",
						}}>
						<Card
							style={{
								width: "100%",
								backgroundColor: "#ececed",
							}}>
							<Table
								width={"100%"}
								bordered={false}
								loading={loader}
								columns={columns}
								dataSource={list}
								pagination={true}
								rowKey={(record) => record.inflected_verb_1.value}
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
