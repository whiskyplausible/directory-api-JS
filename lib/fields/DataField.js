"use strict";

/**
 * DataField class as a class for field data objects
 * 
 * @constructor
 * @param {Object} [init={}] - Object to initialise the newly created instance
 * 
 * @version 0.0.1
 * @author Martin Rüegg <martin.rueegg@bristolpound.org>
 */

const DataField = function(init)
{
	this.id = init.field.id
	this.value = init.value
	this.field = init.field

/*
	Object.defineProperty(this, 'name',
	{
		get: function()
		{
			const address = this.address;
			
			if (address)
			{
				return address.name;
			}
			
			return "";
		}
	});
*/

}

DataField.create = function(init)
{
	return new DataField(init);	
}

DataField.prototype.toString = function()
{
	return this.field.FormatAsString(this.value);
}

module.exports = DataField;

