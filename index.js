module.exports = defaultLanguage => {
	return {
		getSignByDate: ({ day, month} = {day: new Date().getDate(), month: new Date().getMonth() + 1 }, language = defaultLanguage) => {
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

const getSignByName = (signName, language) => {
	if (signName === null || !(typeof signName === 'string')) {
		return -2;
	}

	const index = getNames(language).indexOf(signName.charAt(0).toUpperCase() + signName.slice(1));

	return getSignByIndex(index, language);
};

const getSignBySymbol = (signSymbol, language) => {
	if (signSymbol === null || !(typeof signSymbol === 'string')) {
		return -2;
	}

	const index = getSymbols().indexOf(signSymbol);

	return getSignByIndex(index, language);
};

const getSymbols = () => {
	const signsData = require('./data/zodiac.json');

	return getListValue('symbol', signsData);
};

const getNames = (language) => {
	let signsLocale;
	try {
		signsLocale = Object.values(require(`./locales/${language}/zodiac.json`));
	} catch {
		signsLocale = Object.values(require('./locales/en/zodiac.json'));
	}

	return getListValue('name', signsLocale);
};

const getElements = (language) => {
	let elementsData;
	try {
		elementsData = Object.values(require(`./locales/${language}/elements.json`));
	} catch {
		elementsData = Object.values(require('./locales/en/elements.json'));
	}

	return elementsData;
};

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

const getListValue = (key, data) => {
	data = Object.values(data);
	const values = [];
	
	data.forEach(value => {
		values.push(value[key]);
	});

	return values;
};

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