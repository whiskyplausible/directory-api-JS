"use strict";

require('../utils/ArrayFunctions.js');
require('../utils/ObjectFunctions.js');

const StaticHelper = require('../utils/StaticHelper.js');


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
	var     id;

	if (typeof init.id == "string") {
		this.id = init.id;
	}

	const   fields          = this.fields           = {};

	if (init.data && init.data.constructor === Array)
	{
		this.fields.extend(init.data.toObjectBy());
	}
	else if (typeof init.data == "object")
	{
		this.fields.extend(init.data);
	}

	var     name            = this.name             = "";
	const   address         = this.address          = {};

	if (this.fields.addresses
	&&  this.fields.addresses.value
	&&  this.fields.addresses.value.length > 0
	)
	{
		this.address = this.fields.addresses.value[0];

		this.name = this.address.name;
	};

	const   categories      = this.categories       = {};
	const   subCategories   = this.subCategories    = {};

	if (this.fields.businesscategory && this.fields.businesscategory.value)
	{
		const catValues = this.fields.businesscategory.value;

		for (var i = 0; i < catValues.length; i++)
		{
			if (catValues[i] && catValues[i].category)
			{
				categories[catValues[i].category.id] = catValues[i].category.label;
				subCategories[catValues[i].id] = catValues[i].label;
			}
		}
	}

	const   mainCategories  = this.mainCategories   = categories.getKeys();

	const   image           = this.image            = {};

	if (this.fields.image && this.fields.image.value)
	{
		this.image = this.fields.image;
	}
}

// Static Properties
//


// Static Functions
//

Business.create = function(init)
{
	return new Business(init);
}
Object.defineProperty(Business, 'create',
{
	enumerable: false,
	writable: true
});


//Member Properties
//

// Member Functions
//
function getStatic()
{
	const o = {
			id: this.id,
			name: StaticHelper.getStatic(this.name),
			address: StaticHelper.getStatic(this.address),
			categories: StaticHelper.getStatic(this.categories),
			subCategories: StaticHelper.getStatic(this.subCategories),
			mainCategories: StaticHelper.getStatic(this.mainCategories),
			image: StaticHelper.getStatic(this.image),
			fields: StaticHelper.getStatic(this.fields)
		};
	return o;
}
Object.defineProperty(Business.prototype, 'getStatic',
{
	value: getStatic,
	enumerable: false,
	writable: true
});


module.exports = Business;

