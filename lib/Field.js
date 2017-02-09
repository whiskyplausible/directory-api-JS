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
	
	// Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
	if (typeof init.id == "string") {
		this.id = init.id;
	}


}

Field.Field = Field;

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

