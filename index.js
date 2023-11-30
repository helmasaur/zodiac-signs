module.exports = defaultLanguage => {
	return {
		getSignByDate: ({ day, month } = { day: new Date().getDate(), month: new Date().getMonth() + 1 }, language = defaultLanguage) => {
			return getSignByDate({ day, month }, language);
		},
		getSignByName: (signName, language = defaultLanguage) => {
			return getSignByName(signName, language);
		},
		getSignBySymbol: (signSymbol, language = defaultLanguage) => {
			return getSignBySymbol(signSymbol, language);
		},
		getSymbols: () => {
			return getSymbols();
		},
		getNames: (language = defaultLanguage) => {
			return getNames(language);
		},
		getElements: (language = defaultLanguage) => {
			return getElements(language);
		}
	}
};

/**
 * Retrieves the zodiac sign based on a given date and language.
 *
 * @param {object} date - An object containing the day and month of the date.
 * @param {string} language - The language of the zodiac sign to be retrieved.
 * @return {object} The zodiac sign corresponding to the given date and language.
 */
const getSignByDate = ({ day, month }, language) => {
	const date = new Date(`2000-${month}-${day}`);
	if (date.toString() === 'Invalid Date') {
		return -1;
	}

	const signsData = Object.values(require('./data/zodiac.json'));
	let signsLocale;
	try {
		signsLocale = Object.values(require(`./locales/${language}/zodiac.json`));
	} catch {
		signsLocale = Object.values(require('./locales/en/zodiac.json'));
	}

	let dateMin;
	let dateMax;
	const i = signsData.findIndex(sign => {
		dateMin = new Date(sign.dateMin);
		dateMax = new Date(sign.dateMax);

		return date.getDate() >= dateMin.getDate() && date.getMonth() == dateMin.getMonth() || date.getDate() <= dateMax.getDate() && date.getMonth() === dateMax.getMonth();
	});

	let sign = Object.assign(signsLocale[i], signsData[i]);
	sign = getElement(sign, language);
	
	return sign;
};

/**
 * Retrieves the sign object based on the given sign name and language.
 *
 * @param {string} signName - The name of the sign to retrieve.
 * @param {string} language - The language in which to retrieve the sign.
 * @return {number} The sign object corresponding to the given name and language. Returns -2 if the signName is null or not a string.
 */
const getSignByName = (signName, language) => {
  if (signName === null || typeof signName !== 'string') {
		return -2;
	}

  const index = getNames(language)
    .map(name => name.charAt(0).toUpperCase() + name.slice(1))
    .indexOf(signName.charAt(0).toUpperCase() + signName.slice(1));

	return getSignByIndex(index, language);
};

/**
 * Retrieves the sign by its symbol.
 *
 * @param {string} signSymbol - The symbol of the sign to retrieve.
 * @param {string} language - The language to use for retrieving the sign.
 * @return {number} The sign corresponding to the given symbol and language.
 */
const getSignBySymbol = (signSymbol, language) => {
	if (signSymbol === null || !(typeof signSymbol === 'string')) {
		return -2;
	}

	const index = getSymbols().indexOf(signSymbol);

	return getSignByIndex(index, language);
};

/**
 * Retrieves the symbols of the zodiac signs from the zodiac data.
 *
 * @return {Array} An array of symbols representing each zodiac sign.
 */
const getSymbols = () => {
	const signsData = require('./data/zodiac.json');

	return getListValue('symbol', signsData);
};

/**
 * Retrieves a list of names from the zodiac.json file based on the provided language.
 *
 * @param {string} language - The language code specifying the desired language.
 * @return {Array} An array of names from the zodiac.json file.
 */
const getNames = (language) => {
	let signsLocale;
	try {
		signsLocale = Object.values(require(`./locales/${language}/zodiac.json`));
	} catch {
		signsLocale = Object.values(require('./locales/en/zodiac.json'));
	}

	return getListValue('name', signsLocale);
};

/**
 * Retrieves the elements data based on the specified language.
 *
 * @param {string} language - The language code for the desired elements data.
 * @return {Array} An array containing the elements data.
 */
const getElements = (language) => {
	let elementsData;
	try {
		elementsData = Object.values(require(`./locales/${language}/elements.json`));
	} catch {
		elementsData = Object.values(require('./locales/en/elements.json'));
	}

	return elementsData;
};

/**
 * Retrieves the sign by its index in the zodiac.json file.
 *
 * @param {number} index - The index of the sign.
 * @param {string} language - The language to use for localization.
 * @return {string} The sign corresponding to the given index and language.
 */
const getSignByIndex = (index, language) => {
	if (index === -1) {
		return -2;
	}

	const signsData = Object.values(require('./data/zodiac.json'));
	let signsLocale;
	try {
		signsLocale = Object.values(require(`./locales/${language}/zodiac.json`));
	} catch {
		signsLocale = Object.values(require('./locales/en/zodiac.json'));
	}

	let sign = Object.assign(signsLocale[index], signsData[index]);
	sign = getElement(sign, language);

	return sign;
};

/**
 * Returns an array of values from the given data object, based on the specified key.
 *
 * @param {string} key - The key to extract values from the data object.
 * @param {object} data - The data object to extract values from.
 * @return {array} An array of values extracted from the data object.
 */
const getListValue = (key, data) => {
	data = Object.values(data);
	const values = [];
	
	data.forEach(value => {
		values.push(value[key]);
	});

	return values;
};

/**
 * Retrieves the element data for a given sign and language.
 *
 * @param {Object} sign - The sign object.
 * @param {string} language - The language code.
 * @return {Object} The sign object with the element data.
 */
const getElement = (sign, language) => {
	let elementsData;
	try {
		elementsData = require(`./locales/${language}/elements.json`);
	} catch {
		elementsData = require('./locales/en/elements.json');
	}

	sign.element = elementsData[sign.element];

	return sign;
};

const parseDate = (language) => {
};