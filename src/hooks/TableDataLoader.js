/** @format */

import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

export function useList(query) {
	const [list, setList] = useState([]);

	const getData = useCallback(async () => {
		try {
			const url = 'http://kvdb.tsu.ge:3030/t10/sparql';
			const response = await axios.get(url, {
				params: {
					query: query,
				},
			});

			// split the table string into rows
			let rows = response.data.split('\n');

			// extract headers from the second row
			let headers = rows[1]
				.split('|')
				.slice(1, -1)
				.map((header) => header.trim());

			// create an array of objects for the table data
			let tableData = [];
			for (let i = 3; i < rows.length - 2; i++) {
				let rowData = rows[i]
					.split('|')
					.slice(1, -1)
					.map((cell) => cell.trim());
				let obj = {};
				for (let j = 0; j < headers.length; j++) {
					obj[headers[j]] = rowData[j];
				}
				tableData.push(obj);
				setList(tableData);
			}
		} catch (error) {
			console.error(error);
		}
	}, [query]);

	useEffect(() => {
		getData();
	}, [getData]);

	return [list];
}
