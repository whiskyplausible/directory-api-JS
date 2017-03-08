"use strict";

/**
 * User class as an abstract class for field objects
 * 
 * @constructor
 * @param {Object} [init={}] - Object to initialise the newly created instance
 * @param {string} [init.id] - id of the field type
 * @param {string} [init.options={}] - User options
 * 
 * @version 0.0.1
 * @author Martin Rüegg <martin.rueegg@bristolpound.org>
 */

const Business = function(init)
{
	var		id;
	var		fields = {};

	if (typeof init.id == "string") {
		this.id = init.id;
	}
	
	if (typeof init.data == "object")
	{
		this.fields = init.data;
	}
}

Business.create = function(init)
{
	return new Business(init);	
}


Business.prototype.get = function(field)
{
	if (Object.prototype.hasOwnProperty.call(this.fields, field))
	{
		return this.fields[field];
	}
	
	//ToDo
	// throw unexpected field
}

module.exports = Business;

