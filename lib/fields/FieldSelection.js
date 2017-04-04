"use strict";

const Type				= "SELECTION";
const Parent			= require('./Field.js');
const Field				= Parent.Field;
const PossibleValues	= require('./PossibleValues.js');

const Self				= Parent.extend
(
	/**
	 * Abstract class for fields of type SELECTION
	 * 
	 * @constructor
	 * @extends Field
	 * 
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
	function FieldSelection(init)
	{
		this.type = this.type || Type;
		
		Parent.apply(this, arguments);
		
		this.possibleValues = {};
		if (typeof init.possibleValues == "object") {
			this.possibleValues = PossibleValues.create(init.possibleValues);
		}
		
		this.listEntriesOnly = true;
		if (typeof init.listEntriesOnly == "boolean") {
			this.listEntriesOnly = init.listEntriesOnly;
		}
	}
	,undefined
	,{
		Field: Field
	}
);


//Static Properties
//


// Static Functions
//


//Member Properties
//


// Member Functions
//
Self.prototype.convertToStatic = function(value)
{
	const a = [];

	for (var i = 0; i < value.length; i++)
	{
		a.push(value[i].id);
	}

	return a;
}

Object.defineProperty(Self.prototype, 'convertToStatic',
{
	enumerable: false,
	writable: true
});


module.exports			= Self;
