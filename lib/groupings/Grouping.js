"use strict";

require('../utils/FunctionFunctions.js');
require('../utils/StringFunctions.js');

/**
 * Grouping class as an abstract class for field objects
 * 
 * @constructor
 * @param {Object} [init={}] - Object to initialise the newly created instance
 * @param {string} [init.id] - id of the field type
 * @param {string} [init.label=] - Label for the Grouping
 * @param {string} [init.description=] - Discription of the Grouping
 * @param {string} [init.options={}] - Grouping options
 * @param {string} [init.possibleValues=] - Grouping possible values
 * 
 * @version 0.0.1
 * @author Martin Rüegg <martin.rueegg@bristolpound.org>
 */

var Grouping = function(init)
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

Grouping.Grouping = Grouping;
Grouping.Types = {};

Grouping.prototype.Grouping = Grouping

Grouping.create = function(init, source)
{
	return new Grouping(init);	
}

Grouping.load = function(type, source)
{
	if (!Object.prototype.hasOwnProperty.call(Grouping.Types, type))
	{
		if (type.match(/_SELECTION$/))
		{
			type = "SELECTION_" + type.replace("_SELECTION", "");
		}
		type = type.toCamelCase();
		
		source = source || './Grouping'+ type;
		console.log("loading ", type, source);
		
		require(source);
	}
}


/*
Grouping.subType = function(type)
{
	if (Object.prototype.hasOwnProperty.call(Grouping, type))
	{
		return Grouping[type];
	}

	type = type.substring(0,1).toUpperCase() + type.substring(1);
	console.log(type);

	if (Object.prototype.hasOwnProperty.call(Grouping, type))
	{
		return Grouping[type];
	}
}
 */

module.exports = Grouping;

