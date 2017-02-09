"use strict";

const FieldText = require('./FieldText.js');

FieldText.Field.String = FieldText.extend
(
	/**
	 * FieldString class for fields of type STRING
	 * 
	 * @constructor
	 * @extends FieldText
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
	function FieldString()
	{
		this.type = this.type || "STRING";
		
		FieldText.apply(this, arguments);
	}
);

module.exports = FieldText.Field.String;

