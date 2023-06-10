import React, { useEffect, useState } from "react";
import { Table, Collapse, Row, Card } from "antd";
import { useList } from "../../hooks/TableDataLoader.js";
import Page from "../../components/page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FormatData from "../../utils/FormatData";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar.js";

const DetailPage = () => {
	const { id } = useParams();
	const { Panel } = Collapse;

	const [loader, setLoader] = useState(true);

	const query = (prop) => {
		return `PREFIX n1: <file:///home/achiko/clarino/2023/f12/>
SELECT DISTINCT ?inflected_verb_1 ?vn2_104 ?preverb_143 ?pre2_183 ?root_220 ?sf2_257 ?tense_295 ?person_333 ?number_374 ?ending_486
WHERE { ?inflected_verb_1 a n1:inflected_verb .
        ?inflected_verb_1 n1:vn2 n1:${id}_vn2 .
        ?inflected_verb_1 n1:preverb ?preverb_143 .
        ?inflected_verb_1 n1:pre2 ?pre2_183 .
        ?inflected_verb_1 n1:root ?root_220 .
        ?inflected_verb_1 n1:sf2 ?sf2_257 .
        ?inflected_verb_1 n1:tense n1:${prop} .
        ?inflected_verb_1 n1:person ?person_333 .
        ?inflected_verb_1 n1:number ?number_374 .
		?inflected_verb_1 n1:ending ?ending_486 . }
LIMIT 6`;
	};

	//PRESENT SUBSERIES
	const [present] = useList(query("present"));
	const [presentConjunctive] = useList(query("conj-present"));
	const [presentPerfect] = useList(query("perfect"));

	//FUTURE SUBSERIES
	const [future] = useList(query("future"));
	const [conditional] = useList(query("conditional"));
	const [futureConjunctive] = useList(query("conj-future"));

	///AORIST SERIES
	const [aorist] = useList(query("aorist"));
	const [optative] = useList(query("optative"));

	//PERFECTIVE SERIES
	const [imperfect] = useList(query("imperfect"));
	const [pastPerfect] = useList(query("pluperfect"));

	useEffect(() => {
		if (
			present.length > 0 &&
			presentConjunctive.length > 0 &&
			presentPerfect.length > 0
		) {
			setLoader(false);
		}
	}, [present, presentConjunctive, presentPerfect]);

	const generatePersonAndNumber = (record) => {
		switch (FormatData.parsing(record.person_333.value)) {
			case "1":
				if (FormatData.parsing(record.number_374.value) === "pl") {
					return "1pl";
				} else {
					return "1s";
				}
			case "2":
				if (FormatData.parsing(record.number_374.value) === "pl") {
					return "2pl";
				} else {
					return "2s";
				}
			case "3":
				if (FormatData.parsing(record.number_374.value) === "pl") {
					return "3pl";
				} else {
					return "3s";
				}
			default:
				return "1";
		}
	};
	const columns = [
		{
			key: "Person and number",
			render: (val) => {
				return <>{generatePersonAndNumber(val)}</>;
			},
		},
		{
			width: "500px",
			key: "Georgian",
			render: (record) => {
				return (
					<span style={{ overflow: "hidden", display: "flex" }}>
						<span style={{ color: "#fe7ef3" }}>
							{FormatData.convertLatinToGeorgian(
								FormatData.parsing(record.pre2_183.value)
							)}
						</span>
						<span style={{ color: "#000000" }}>
							{FormatData.convertLatinToGeorgian(
								FormatData.parsing(record.preverb_143.value)
							)}
						</span>
						<span style={{ color: "#ff1d25" }}>
							{FormatData.convertLatinToGeorgian(
								FormatData.parsing(record.root_220.value)
							)}
						</span>
						<span style={{ color: "#0001eb" }}>
							{FormatData.convertLatinToGeorgian(
								FormatData.parsing(record.sf2_257.value)
							)}
						</span>
						<span style={{ color: "#804008" }}>
							{FormatData.convertLatinToGeorgian(
								FormatData.parsing(record.ending_486.value)
							)}
						</span>
					</span>
				);
			},
		},

		{
			width: "500px",
			key: "Latin",
			render: (record) => {
				return (
					<span style={{ overflow: "hidden", display: "flex" }}>
						<span style={{ color: "#fe7ef3" }}>
							{FormatData.parsing(record.pre2_183.value)}
						</span>
						<span style={{ color: "#000000" }}>
							{FormatData.parsing(record.preverb_143.value)}
						</span>

						<span style={{ color: "#ff1d25" }}>
							{FormatData.parsing(record.root_220.value)}
						</span>
						<span style={{ color: "#0001eb" }}>
							{FormatData.parsing(record.sf2_257.value)}
						</span>
						<span style={{ color: "#804008" }}>
							{FormatData.parsing(record.ending_486.value)}
						</span>
					</span>
				);
			},
		},
	];

	return (
		<>
			<Header />
			<main>
				<Page>
					<div className="page-container">
						<div className="inner-container">
							<div style={{ paddingBottom: "1%", paddingTop: "1%" }}>
								<SearchBar verb={FormatData.convertLatinToGeorgian(id)} />
							</div>
							<div
								style={{
									width: "100%",
								}}>
								<div
									style={{
										height: "100%",
										backgroundColor: "rgb(236, 236, 237)",
										padding: "10px	",
									}}>
									<div style={{ height: "100%" }}>
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												alignContent: "center",
												flexWrap: "nowrap",
												borderRadius: "5px",
												justifyContent: "center",
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
														width: "30px",
														height: "30px",
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
														width: "30px",
														height: "30px",
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
														width: "30px",
														height: "30px",
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
														width: "30px",
														height: "30px",
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
														width: "30px",
														height: "30px",
													}}
												/>
												<div style={{ fontSize: "10px" }}>Ending</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<Collapse
								defaultActiveKey={["1"]}
								style={{ width: "100%" }}>
								<Panel
									header="Present Subseries"
									key="1">
									<Row style={{ justifyContent: "space-between" }}>
										<Card
											title="Present indicative"
											bordered={false}
											style={{
												width: 380,
											}}>
											<Table
												loading={loader}
												size="small"
												bordered={false}
												columns={columns}
												dataSource={present}
												pagination={false}
												rowKey={(record) => record.inflected_verb_1.value}
											/>
										</Card>
										<Card
											title="Present Conjunctive"
											bordered={false}
											style={{
												width: 380,
											}}>
											<Table
												size="small"
												loading={loader}
												bordered={false}
												columns={columns}
												dataSource={presentConjunctive}
												pagination={false}
												rowKey={(record) => record.inflected_verb_1.value}
											/>
										</Card>
										<Card
											title="Present Perfect"
											bordered={false}
											style={{
												width: 380,
											}}>
											<Table
												size="small"
												loading={loader}
												bordered={false}
												columns={columns}
												dataSource={presentPerfect}
												pagination={false}
												rowKey={(record) => record.inflected_verb_1.value}
											/>
										</Card>
									</Row>
								</Panel>

								<Panel
									header=" Future Subseries "
									key="2">
									<Row style={{ justifyContent: "space-between" }}>
										<Card
											title="Future"
											bordered={false}
											style={{
												width: 380,
											}}>
											<Table
												size="small"
												bordered={false}
												columns={columns}
												dataSource={future}
												pagination={false}
												rowKey={(record) => record.inflected_verb_1.value}
											/>
										</Card>
										<Card
											title="conditional"
											bordered={false}
											style={{
												width: 380,
											}}>
											<Table
												size="small"
												bordered={false}
												columns={columns}
												dataSource={conditional}
												pagination={false}
												rowKey={(record) => record.inflected_verb_1.value}
											/>
										</Card>
										<Card
											title="Future Conjuctive"
											bordered={false}
											style={{
												width: 380,
											}}>
											<Table
												size="small"
												bordered={false}
												columns={columns}
												dataSource={futureConjunctive}
												pagination={false}
												rowKey={(record) => record.inflected_verb_1.value}
											/>
										</Card>
									</Row>
								</Panel>

								<Panel
									header="Aorist Series"
									key="3">
									<Row style={{ justifyContent: "space-between" }}>
										<Card
											title="Aorist"
											bordered={false}
											style={{
												width: 380,
											}}>
											<Table
												size="small"
												bordered={false}
												columns={columns}
												dataSource={aorist}
												pagination={false}
												rowKey={(record) => record.inflected_verb_1.value}
											/>
										</Card>
										<Card
											title="Optative"
											bordered={false}
											style={{
												width: 380,
											}}>
											<Table
												size="small"
												bordered={false}
												columns={columns}
												dataSource={optative}
												pagination={false}
												rowKey={(record) => record.inflected_verb_1.value}
											/>
										</Card>
									</Row>
								</Panel>

								<Panel
									header="Perfect Indicative"
									key="4">
									<Row style={{ justifyContent: "space-between" }}>
										<Card
											title="Imperfect"
											bordered={false}
											style={{
												width: 380,
											}}>
											<Table
												size="small"
												bordered={false}
												columns={columns}
												dataSource={imperfect}
												pagination={false}
												rowKey={(record) => record.inflected_verb_1.value}
											/>
										</Card>
										<Card
											title="Past Perfect"
											bordered={false}
											style={{
												width: 380,
											}}>
											<Table
												size="small"
												bordered={false}
												columns={columns}
												dataSource={pastPerfect}
												pagination={false}
												rowKey={(record) => record.inflected_verb_1.value}
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
