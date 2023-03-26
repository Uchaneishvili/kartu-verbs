/** @format */

export default class FormatData {
	static slicedData(val) {
		if (val) {
			return val.slice(3);
		}
		return '';
	}

	static divideWord(val) {
		if (val) {
			return val.slice(3).replace(/-/g, '');
		}
		return '';
	}
}
