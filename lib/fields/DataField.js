"use strict";

const StaticHelper = require('../utils/StaticHelper.js');

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
}

//Static Properties
//


// Static Functions
//

DataField.create = function(init)
{
	return new DataField(init);	
}
Object.defineProperty(DataField, 'create',
{
	enumerable: false,
	writable: true
});


//Member Properties
//


// Member Functions
//
DataField.prototype.toString = function()
{
	return this.field.FormatAsString(this.value);
}
Object.defineProperty(DataField, 'toString',
{
	enumerable: false,
	writable: true
});


function getStatic()
{
	return this.field.convertToStatic(this.value);
}
Object.defineProperty(DataField.prototype, 'getStatic',
{
	value: getStatic,
	enumerable: false,
	writable: true
});


module.exports = DataField;

