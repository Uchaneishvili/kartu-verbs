/** @format */

export default class FormatData {
	static slicedData(val) {
		if (val) {
			return val.slice(3);
		}
		return "";
	}

	static parsing(val) {
		const pathParts = val.split("/"); // Split the path by '/'
		const fileName = pathParts[pathParts.length - 1]; // Get the last part of the split path

		// Extract the desired string by splitting the file name by '_'
		const desiredString = fileName.split("_")[0];

		return desiredString;
	}

	static divideWord(val) {
		if (val) {
			return val.slice(3).replace(/-/g, "");
		}
		return "";
	}

	static getSearchSuggestion(val) {
		if (val) {
			const components = val.split("_");
			return components[1].replace(/-/g, "");
		}
		return "";
	}

	static convertGeorgianToLatin(georgianText) {
		var georgianToLatinMap = {
			ა: "a",
			ბ: "b",
			გ: "g",
			დ: "d",
			ე: "e",
			ვ: "v",
			ზ: "z",
			თ: "t",
			ი: "i",
			კ: "k",
			ლ: "l",
			მ: "m",
			ნ: "n",
			ო: "o",
			პ: "p",
			ჟ: "j",
			რ: "r",
			ს: "s",
			ტ: "t",
			უ: "u",
			ფ: "f",
			ქ: "k",
			ღ: "g",
			ყ: "q",
			შ: "sh",
			ჩ: "ch",
			ც: "c",
			ძ: "dz",
			წ: "w",
			ჭ: "ch",
			ხ: "x",
			ჯ: "j",
			ჰ: "h",
		};

		var latinText = georgianText.replace(/./g, function (char) {
			return georgianToLatinMap[char] || char;
		});

		return latinText;
	}

	static convertLatinToGeorgian(latinText) {
		var latinToGeorgianMap = {
			a: "ა",
			b: "ბ",
			g: "გ",
			d: "დ",
			e: "ე",
			v: "ვ",
			z: "ზ",
			t: "თ",
			i: "ი",
			"k'": "კ",
			l: "ლ",
			m: "მ",
			n: "ნ",
			o: "ო",
			"p'": "პ",
			zh: "ჟ",
			r: "რ",
			s: "ს",
			"t'": "ტ",
			u: "უ",
			p: "ფ",
			k: "ქ",
			gh: "ღ",
			"q'": "ყ",
			sh: "შ",
			ch: "ჩ",
			ts: "ც",
			dz: "ძ",
			"ts'": "წ",
			"ch'": "ჭ",
			kh: "ხ",
			j: "ჯ",
			h: "ჰ",
		};

		var georgianText = latinText.replace(
			/ch|zh|gh|sh|ts|dz|kh|./g,
			function (match) {
				switch (match) {
					case "zh":
						return "ჟ";
					case "gh":
						return "ღ";
					case "sh":
						return "შ";
					case "ch":
						return "ჩ";
					case "ts":
						return "ც";
					case "dz":
						return "ძ";
					case "kh":
						return "ხ";
					case "-":
						return "-";
					default:
						return latinToGeorgianMap[match] || match;
				}
			}
		);

		return georgianText;
	}
}
