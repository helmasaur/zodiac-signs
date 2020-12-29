[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/npm/v/zodiac-signs.svg)](https://www.npmjs.com/package/zodiac-signs)

# Zodiac-signs

Provides a zodiac sign depending a birthday and much more.

*This is based on Micah Akpan's [package](https://github.com/micah-akpan/sign-teller).*

It's for example also possible to get:
- a zodiac's emoji
- a zodiac birthstone

## Installation

```bash
$ npm install zodiac-signs
```

## Example

### Importing the module

```js
const zodiac = require('zodiac-signs')('en');
// Require with a language (format xx-YY sets (format xx)
const zodiac = require('zodiac-signs')('en-US')
// Require without an argument sets 'en'
const zodiac = require('zodiac-signs')();
```

### Getting a zodiac sign from a date

```js
// Returns the zodiac sign's information of the actual day
console.log(zodiac.getSignByDate());
// Returns the zodiac sign's information of the 22 of June
console.log(zodiac.getSignByDate({ day: 22, month: 6 }));
// Overload the default language (format xx-YY sets (format xx)
console.log(zodiac.getSignByDate({ day: 22, month: 6 }, 'fr'));
```
### Getting a zodiac sign from a name or symbol

```js
// Returns the Cancer sign's information
console.log(zodiac.getSignByName('cancer');
console.log(zodiac.getSignBySymbol('♋️');
// Overload the default language (format xx-YY sets (format xx)
console.log(zodiac.getSignByName('cancer', 'fr'));
console.log(zodiac.getSignBySymbol('♋️', 'fr');
```

### Others

```js
// Returns an array of all zodiac symbols
console.log(zodiac.getSymbols());
// Returns an array of all the zodiac names
console.log(zodiac.getNames());
// Overload the default language (format xx-YY sets (format xx)
console.log(zodiac.getNames('fr'));
```

## Error management

An integer is returned if the given parameter is wrong:

| Type    | Values                      | Error code |
|---------|-----------------------------|------------|
| Day*    | [1;31] or [1;30] or [1;29]  | -1         |
| Month   | [1;12]                      | -1         |
| Name    | zodiac signs' names         | -2         |
| Symbol  | zodiac signs' symbols       | -2         |

**Depending on the month, the day's numbers interval can change.*

## Translation

For the moment, the only avaible languages are English and French.

Obviously, you are free to participate to the translation in any other language.

### Available languages

- English
- French
- Russian

## Thanks

- The Programming Discussion and the Coding Den Discord servers;
- Micah Akpan for the original package: [sign-teller](https://github.com/micah-akpan/sign-teller).

## License

- My source code is published under [MIT License](https://github.com/Helmasaur/birthgem/blob/master/LICENSE).
- The original package is published under [MIT License](https://github.com/micah-akpan/sign-teller/blob/develop/LICENSE).