"use strict";

require('./extend.js');

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

var Field = function(init)
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

Field.prototype.Field = Field

Field.create = function(type, init)
{
	if (!Object.prototype.hasOwnProperty.call(Field.Types, type))
	{
		Field.load(type);
	}
	
	return new Field.Types[type](init);	
}

Field.load = function(type)
{
	if (!Object.prototype.hasOwnProperty.call(Field.Types, type))
	{
		if (type.match(/_SELECTION$/))
		{
			type = "SELECTION_" + type.replace("_SELECTION", "");
		}
		type = type.toCamelCase().firstToUpperCase();
		
		console.log("loading ", type);
		
		require('./Field'+ type);
	}
}

String.prototype.toCamelCase = function()
{
	return this
	.toLowerCase()
	.replace(/_/g, "-")
	.replace(/\W+(.)/g, function (x, chr) {
		return chr.toUpperCase();
	})
}
String.prototype.firstToUpperCase = function () {
	return this
	.replace(/\w/, function (x, chr)
	{
		return x.toUpperCase();
	})
}

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

module.exports = Field;

