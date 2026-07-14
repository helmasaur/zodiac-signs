## Functions

<dl>
<dt><a href="#getSignByDate">getSignByDate(date, language)</a> ⇒ <code>object</code></dt>
<dd><p>Retrieves the zodiac sign based on a given date and language.</p>
</dd>
<dt><a href="#getSignByName">getSignByName(signName, language)</a> ⇒ <code>number</code></dt>
<dd><p>Retrieves the sign object based on the given sign name and language.</p>
</dd>
<dt><a href="#getSignBySymbol">getSignBySymbol(signSymbol, language)</a> ⇒ <code>number</code></dt>
<dd><p>Retrieves the sign by its symbol.</p>
</dd>
<dt><a href="#getSymbols">getSymbols()</a> ⇒ <code>Array</code></dt>
<dd><p>Retrieves the symbols of the zodiac signs from the zodiac data.</p>
</dd>
<dt><a href="#getNames">getNames(language)</a> ⇒ <code>Array</code></dt>
<dd><p>Retrieves a list of names from the zodiac.json file based on the provided language.</p>
</dd>
<dt><a href="#getElements">getElements(language)</a> ⇒ <code>Array</code></dt>
<dd><p>Retrieves the elements data based on the specified language.</p>
</dd>
<dt><a href="#getSignByIndex">getSignByIndex(index, language)</a> ⇒ <code>string</code></dt>
<dd><p>Retrieves the sign by its index in the zodiac.json file.</p>
</dd>
<dt><a href="#getListValue">getListValue(key, data)</a> ⇒ <code>array</code></dt>
<dd><p>Returns an array of values from the given data object, based on the specified key.</p>
</dd>
<dt><a href="#getElement">getElement(sign, language)</a> ⇒ <code>Object</code></dt>
<dd><p>Retrieves the element data for a given sign and language.</p>
</dd>
</dl>

<a name="getSignByDate"></a>

## getSignByDate(date, language) ⇒ <code>object</code>
Retrieves the zodiac sign based on a given date and language.

**Kind**: global function  
**Returns**: <code>object</code> - The zodiac sign corresponding to the given date and language.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>object</code> | An object containing the day and month of the date. |
| language | <code>string</code> | The language of the zodiac sign to be retrieved. |

<a name="getSignByName"></a>

## getSignByName(signName, language) ⇒ <code>number</code>
Retrieves the sign object based on the given sign name and language.

**Kind**: global function  
**Returns**: <code>number</code> - The sign object corresponding to the given name and language. Returns -2 if the signName is null or not a string.  

| Param | Type | Description |
| --- | --- | --- |
| signName | <code>string</code> | The name of the sign to retrieve. |
| language | <code>string</code> | The language in which to retrieve the sign. |

<a name="getSignBySymbol"></a>

## getSignBySymbol(signSymbol, language) ⇒ <code>number</code>
Retrieves the sign by its symbol.

**Kind**: global function  
**Returns**: <code>number</code> - The sign corresponding to the given symbol and language.  

| Param | Type | Description |
| --- | --- | --- |
| signSymbol | <code>string</code> | The symbol of the sign to retrieve. |
| language | <code>string</code> | The language to use for retrieving the sign. |

<a name="getSymbols"></a>

## getSymbols() ⇒ <code>Array</code>
Retrieves the symbols of the zodiac signs from the zodiac data.

**Kind**: global function  
**Returns**: <code>Array</code> - An array of symbols representing each zodiac sign.  
<a name="getNames"></a>

## getNames(language) ⇒ <code>Array</code>
Retrieves a list of names from the zodiac.json file based on the provided language.

**Kind**: global function  
**Returns**: <code>Array</code> - An array of names from the zodiac.json file.  

| Param | Type | Description |
| --- | --- | --- |
| language | <code>string</code> | The language code specifying the desired language. |

<a name="getElements"></a>

## getElements(language) ⇒ <code>Array</code>
Retrieves the elements data based on the specified language.

**Kind**: global function  
**Returns**: <code>Array</code> - An array containing the elements data.  

| Param | Type | Description |
| --- | --- | --- |
| language | <code>string</code> | The language code for the desired elements data. |

<a name="getSignByIndex"></a>

## getSignByIndex(index, language) ⇒ <code>string</code>
Retrieves the sign by its index in the zodiac.json file.

**Kind**: global function  
**Returns**: <code>string</code> - The sign corresponding to the given index and language.  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the sign. |
| language | <code>string</code> | The language to use for localization. |

<a name="getListValue"></a>

## getListValue(key, data) ⇒ <code>array</code>
Returns an array of values from the given data object, based on the specified key.

**Kind**: global function  
**Returns**: <code>array</code> - An array of values extracted from the data object.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key to extract values from the data object. |
| data | <code>object</code> | The data object to extract values from. |

<a name="getElement"></a>

## getElement(sign, language) ⇒ <code>Object</code>
Retrieves the element data for a given sign and language.

**Kind**: global function  
**Returns**: <code>Object</code> - The sign object with the element data.  

| Param | Type | Description |
| --- | --- | --- |
| sign | <code>Object</code> | The sign object. |
| language | <code>string</code> | The language code. |

