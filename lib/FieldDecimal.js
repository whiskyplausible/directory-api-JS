"use strict";

const Field = require('./Field.js');

Field.Decimal = Field.extend
(
	/**
	 * FieldDecimal class for fields of type DECIMAL
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
	function FieldDecimal()
	{
		this.type = this.type || "DECIMAL";
		
		Field.apply(this, arguments);
	}
);

module.exports = Field.Decimal;
