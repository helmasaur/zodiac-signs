const zodiac = require('..')();
const assert = require('assert');

describe('zodiac.getSignByDate()', function() {
	it('should get the zodiac sign\'s information based on a date', function() {
		// assert.deepEqual(zodiac.getSignByDate(), zodiac.getSignByDate());

	it('should get the zodiac sign\'s information based on a date (French override)', function() {
		// assert.deepEqual(zodiac.getSignByDate(undefined, 'fr'), zodiac.getSignByDate(), 'fr');
		// assert.deepEqual(zodiac.getSignByDate(undefined, 'fr-FR'), zodiac.getSignByDate(), 'fr-FR');
	});
});

describe('zodiac.getSignByDate(signDate)', function() {
		assert.deepEqual(zodiac.getSignByDate({ day: 22, month: 6 }),  { "name": "Cancer", "element": "water", "stone": "emerald", "symbol": "♋", "dateMin": "2000-06-22", "dateMax": "2000-07-22" });
	});

	it('should get the zodiac sign\'s information based on a date (French override)', function() {
		assert.deepEqual(zodiac.getSignByDate({ day: 22, month: 6 }, 'fr'),  { "name": "Cancer", "element": "eau", "stone": "émeraude", "symbol": "♋", "dateMin": "2000-06-22", "dateMax": "2000-07-22" });
	});

	it('should return the error code -1 when the date is invalid', function() {
		assert.deepEqual(zodiac.getSignByDate({ day: 35, month: 1}), -1);
		assert.deepEqual(zodiac.getSignByDate({ day: 1, month: 15}), -1);
		assert.deepEqual(zodiac.getSignByDate({ day: 35, month: 15}), -1);
	});
});

describe('zodiac.getSignByName(signName)', function() {
	it('should get the zodiac sign\'s information based on a name', function() {
		//assert.deepEqual(zodiac.getSignByName('cancer'),  { "name": "Cancer", "element": "water", "stone": "emerald", "symbol": "♋", "dateMin": "2000-06-22", "dateMax": "2000-07-22" });
	});

	it('should get the zodiac sign\'s information based on a date (French override)', function() {
		// assert.deepEqual(zodiac.getSignByName('cancer', 'fr'), { "name": "Cancer", "element": "eau", "stone": "émeraude", "symbol": "♋", "dateMin": "2000-06-22", "dateMax": "2000-07-22" });
		// assert.deepEqual(zodiac.getSignByName('cancer', 'fr-FR'),  { "name": "Cancer", "element": "eau", "stone": "émeraude", "symbol": "♋", "dateMin": "2000-06-22", "dateMax": "2000-07-22" }));
	});

	it('should return the error code -1 when the name is invalid', function() {
		assert.deepEqual(zodiac.getSignByName('ophiuchus'), -2);
		assert.deepEqual(zodiac.getSignByName(-1), -2);
		assert.deepEqual(zodiac.getSignByName(0), -2);
		assert.deepEqual(zodiac.getSignByName(13), -2);
		assert.deepEqual(zodiac.getSignByName(1.5), -2);
		assert.deepEqual(zodiac.getSignByName(null), -2);
	});

});

describe('zodiac.getSignBySymbol(signSymbol)', function() {
	// it('should get the zodiac sign\'s information based on a symbol', function() {
	// 	assert.deepEqual(zodiac.getSignBySymbol('♋'),  { "name": "Cancer", "element": "water", "stone": "emerald", "symbol": "♋", "dateMin": "2000-06-22", "dateMax": "2000-07-22" });
	// });

	it('should return the error code -1 when the symbol is invalid', function() {
		assert.deepEqual(zodiac.getSignBySymbol('♾'), -2);
		assert.deepEqual(zodiac.getSignBySymbol(-1), -2);
		assert.deepEqual(zodiac.getSignBySymbol(0), -2);
		assert.deepEqual(zodiac.getSignBySymbol(13), -2);
		assert.deepEqual(zodiac.getSignBySymbol(1.5), -2);
		assert.deepEqual(zodiac.getSignBySymbol(null), -2);
	});
});

describe('zodiac.getNames()', function() {
	it('should get the list of zodiac names', function() {
		assert.deepEqual(zodiac.getNames(),['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']);
	});
});

describe('zodiac.getSymbols()', function() {
	it('should get the list of zodiac symbols', function() {
		assert.deepEqual(zodiac.getSymbols(),['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓']);
	});
});

describe('zodiac.getElements()', function() {
	it('should get the list of zodiac elements', function() {
		assert.deepEqual(zodiac.getElements(),['fire', 'earth', 'air', 'water']);
	});
});