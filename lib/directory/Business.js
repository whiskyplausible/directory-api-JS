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

	Object.defineProperty(this, 'address',
	{
		get: function()
		{
			if (this.fields.addresses && this.fields.addresses.value)
			{
				for (var addressId in this.fields.addresses.value)
				{
					return this.fields.addresses.value[addressId];
				}
			}
		}
	});

	Object.defineProperty(this, 'category',
	{
		get: function()
		{
			return "shop";
		}
	});

	Object.defineProperty(this, 'image',
	{
		get: function()
		{
			if (this.fields.image && this.fields.image.value)
			{
				return this.fields.image.value;
			}
		}
	});

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

}

Business.create = function(init)
{
	return new Business(init);	
}

module.exports = Business;

