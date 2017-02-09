"use strict";

const Field = require('./Field.js');

Field.Address = Field.extend
(
	/**
	 * FieldAddress class for fields of type ADDRESS
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
	function FieldAddress()
	{
		this.type = this.type || "ADDRESS";
		
		Field.apply(this, arguments);
	}
);

module.exports = Field.Address;

