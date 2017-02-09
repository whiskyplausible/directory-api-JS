"use strict";

const FieldSelection	= require('./FieldSelection.js');
const Type				= "MULTI_SELECTION";

module.exports			= FieldSelection.Field.Types[Type]
						= FieldSelection.Field.SelectionMulti
						= FieldSelection.Field.extend
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
	function FieldSelectionMulti(init)
	{
		this.type = this.type || Type;
		
		FieldSelection.apply(this, arguments);
	}
);
