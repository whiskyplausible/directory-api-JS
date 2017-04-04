"use strict";

require('../utils/FunctionFunctions.js');
require('../utils/StringFunctions.js');

/**
 * Field class as an abstract class for field objects
 * 
 * @constructor
 * @param {Object} [init={}] - Object to initialise the newly created instance
 * @param {string} [init.id] - id of the field type
 * @param {string} [init.label=] - Label for the Field
 * @param {string} [init.description=] - Discription of the Field
 * @param {string} [init.options={}] - Field options
 * @param {string} [init.possibleValues=] - Field possible values
 * 
 * @version 0.0.1
 * @author Martin Rüegg <martin.rueegg@bristolpound.org>
 */

const Field = function(init)
{
	const	type = "";

	var		id;

	init = init || {};
	
	if (typeof init.id == "string") {
		this.id = init.id;
	}

	this.label = "";
	if (typeof init.label == "string") {
		this.label = init.label;
	}
	
	this.description = "";
	if (typeof init.description == "string") {
		this.description = init.description;
	}
	
	this.options = {};
	if (typeof init.options == "object") {
		this.options = init.options;
	}

}

Field.Field = Field;
Field.Types = {};

Field.create = function(type, init, source)
{
	if (!Object.prototype.hasOwnProperty.call(Field.Types, type))
	{
		Field.load(type, source);
	}
	
	return new Field.Types[type](init);	
}
Object.defineProperty(Field, 'create',
{
	enumerable: false,
	writable: true
});

Field.load = function(type, source)
{
	if (!Object.prototype.hasOwnProperty.call(Field.Types, type))
	{
		if (type.match(/_SELECTION$/))
		{
			type = "SELECTION_" + type.replace("_SELECTION", "");
		}
		type = type.toCamelCase();
		
		source = source || './Field'+type+'.js';
		console.log("loading ", type, source);
		
		require(source);
	}
}
Object.defineProperty(Field, 'load',
{
	enumerable: false,
	writable: true
});

/*
Field.subType = function(type)
{
	if (Object.prototype.hasOwnProperty.call(Field, type))
	{
		return Field[type];
	}

	type = type.substring(0,1).toUpperCase() + type.substring(1);
	console.log(type);

	if (Object.prototype.hasOwnProperty.call(Field, type))
	{
		return Field[type];
	}
}
 */

const getStatic = require('../utils/StaticHelper.js').getStatic;

Object.defineProperty(Field.prototype, 'getStatic',
{
	value: getStatic,
	enumerable: false,
	writable: true
});


Field.prototype.convertToStatic = function(value)
{
	return getStatic(value);
}

Object.defineProperty(Field.prototype, 'convertToStatic',
{
	enumerable: false,
	writable: true
});


function FormatAs(value, format, options)
{
	if (format)
	{
		const f = 'FormatAs'+ format.toString().toCamelCase();

		if (typeof this[f] == 'function')
		{
			return this[f](value, options);
		}
	}

	return this.FormatAsString(value, options);
}

Object.defineProperty(Field.prototype, 'FormatAs',
{
	value: FormatAs,
	enumerable: false,
	writable: true
});


Field.prototype.FormatAsString = function(value, format, options)
{
	return value.toString();
}

Object.defineProperty(Field.prototype, 'FormatAsString',
{
	enumerable: false,
	writable: true
});


module.exports = Field;

