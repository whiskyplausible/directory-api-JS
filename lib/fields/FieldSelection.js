"use strict";

const Type				= "SELECTION";
const Parent			= require('./Field.js');
const Field				= Parent.Field;

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
			this.possibleValues = init.possibleValues;
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

module.exports			= Self;