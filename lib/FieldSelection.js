"use strict";

const Field = require('./Field.js');
const Type		= "SELECTION";

module.exports	= Field.extend
(
	/**
	 * FieldSelection abstract class for fields with SELECTION
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
		
		Field.apply(this, arguments);

		this.possibleValues = {};
		if (typeof init.possibleValues == "object") {
			this.possibleValues = init.possibleValues;
		}

		this.listEntriesOnly = true;
		if (typeof init.listEntriesOnly == "boolean") {
			this.listEntriesOnly = init.listEntriesOnly;
		}
	}
);
