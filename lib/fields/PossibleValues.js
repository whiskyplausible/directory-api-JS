"use strict";

/**
 * PossibleValues class as a class for field data objects
 * 
 * @constructor
 * @param {Object} [init={}] - Object to initialise the newly created instance
 * 
 * @version 0.0.1
 * @author Martin Rüegg <martin.rueegg@bristolpound.org>
 */

const PossibleValues = function(init)
{
	this.type = init.type;
	this.categories = init.categories;
	this.values = init.values;
}

PossibleValues.create = function(init)
{
	return new PossibleValues(init);	
}

PossibleValues.prototype.toString = function()
{
	return this.field.FormatAsString(this.value);
}
Object.defineProperty(PossibleValues.prototype, 'toString',
{
	enumerable: false
});

function getStatic()
{
	console.log("PossibleValues.getStatic()");
	var o = {
		type: this.type,
		categories: {},
		values: {}
	};

	for (var category in this.categories)
	{
		const cat = this.categories[category];
		
		const children = [];
		
		for (var child in cat.children)
		{
			children.push(cat.children[child].id);
		};
		
		o.categories[category] =
		{
			id: category,
			label: cat.label,
			children: children
		}
	}

	for (var value in this.values)
	{
		o.values[value] =
		{
			id: value,
			label: this.values[value].label,
			category: this.values[value].category ? this.values[value].category.id : this.values[value].category
		}
	}

	return o;
}
Object.defineProperty(PossibleValues.prototype, 'getStatic',
{
	value: getStatic,
	enumerable: false
});


module.exports = PossibleValues;

