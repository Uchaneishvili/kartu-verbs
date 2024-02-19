/** @format */

import React from "react";
import styles from "./Header.module.css";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Logo } from "../../icons/logo";

import { useNavigate } from "react-router-dom";

function Header(props) {
	const navigate = useNavigate();
	return (
		<div className={styles.nav}>
			<div
				className={styles.logoContainer}
				onClick={() => {
					navigate("/");
				}}>
				<div>
					<Logo />
				</div>
			</div>
			<ul className={styles.navUl}>
				<li
					onClick={() => {
						navigate("/publications");
					}}>
					PUBLICATIONS
				</li>
				<li
					onClick={() => {
						navigate("/project-description");
					}}>
					PROJECT DESCRIPTION
				</li>
				<li
					onClick={() => {
						navigate("/transliteration-table");
					}}>
					TRANSLITERATION TABLE
				</li>
			</ul>

			<div className={styles.menuContainer}>
				{window.location.pathname.includes("allVerb") && (
					<button
						style={{
							background: "#8E0727",
							color: "inherit",
							cursor: "pointer",
							outline: "none",
							boxShadow: "false",
							height: "40px",
							width: "120px",
							border: "1px solid #FFFFFF",
							borderRadius: "10px",
						}}
						onClick={() => navigate("/detailPage/sauzmoba")}>
						<DoubleLeftOutlined />
						{"One Verb"}
					</button>
				)}

				{window.location.pathname.includes("detailPage") && (
					<button
						style={{
							background: "#8E0727",
							color: "inherit",
							cursor: "pointer",
							outline: "none",
							boxShadow: "false",
							height: "40px",
							width: "120px",
							border: "1px solid #FFFFFF",
							borderRadius: "10px",
						}}
						onClick={() => navigate("/allVerb")}>
						{"All Verbs"} <DoubleRightOutlined />
					</button>
				)}
			</div>
		</div>
	);
}

export default Header;
