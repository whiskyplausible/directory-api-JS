"use strict";

require('../utils/ArrayFunctions.js');


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
	
	if (init.data && init.data.constructor === Array)
	{
		this.fields = init.data.toObjectBy();
	}
	else if (typeof init.data == "object")
	{
		this.fields = init.data;
	}

	Object.defineProperty(this, 'address',
	{
		get: function()
		{
			if (this.fields.addresses
			&&  this.fields.addresses.value
			&&  this.fields.addresses.value.length > 0
			)
			{
				return this.fields.addresses.value[0];
			}
		}
	});

	Object.defineProperty(this, 'categories',
	{
		get: function()
		{
			const categories = [];
			
			if (this.fields.businesscategory && this.fields.businesscategory.value)
			{
				const catValues = this.fields.businesscategory.value;

				for (var i = 0; i < catValues.length; i++)
				{
					categories[i] = catValues[i].category.label +" - " + catValues[i].label;
				}
			}
			
			return categories;
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

