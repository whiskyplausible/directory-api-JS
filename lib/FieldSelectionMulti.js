"use strict";

const FieldSelection = require('./FieldSelection.js');

FieldSelection.Field.SelectionMulti = FieldText.extend
(
	/**
	 * FieldSelectionSingle class for fields of type SINGLE_SELECTION
	 * 
	 * @constructor
	 * @extends FieldSelection
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
	function FieldSelectionMulti()
	{
		this.type = this.type || "MULTI_SELECTION";
		
		FieldText.apply(this, arguments);
	}
);

module.exports = FieldSelection.Field.SelectionMulti;
