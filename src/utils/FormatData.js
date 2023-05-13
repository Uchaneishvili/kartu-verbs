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
			return val.slice(12).replace(/-/g, '');
		}
		return '';
	}

	static getSearchSuggestion(val) {
		if (val) {
			const components = val.split('_'); // split the string into an array of components
			return components[1].replace(/-/g, ''); // return the second component without hyphens
		}
		return '';
	}

	static convertGeorgianToLatin(georgianText) {
		var georgianToLatinMap = {
			ა: 'a',
			ბ: 'b',
			გ: 'g',
			დ: 'd',
			ე: 'e',
			ვ: 'v',
			ზ: 'z',
			თ: 't',
			ი: 'i',
			კ: 'k',
			ლ: 'l',
			მ: 'm',
			ნ: 'n',
			ო: 'o',
			პ: 'p',
			ჟ: 'j',
			რ: 'r',
			ს: 's',
			ტ: 't',
			უ: 'u',
			ფ: 'f',
			ქ: 'k',
			ღ: 'g',
			ყ: 'q',
			შ: 'sh',
			ჩ: 'ch',
			ც: 'c',
			ძ: 'dz',
			წ: 'w',
			ჭ: 'ch',
			ხ: 'x',
			ჯ: 'j',
			ჰ: 'h',
		};

		var latinText = georgianText.replace(/./g, function (char) {
			return georgianToLatinMap[char] || char;
		});

		return latinText;
	}
}
