"use strict";

const Type				= "MULTI_SELECTION";
const Parent			= require('./FieldSelection.js');
const Field				= Parent.Field;

const Self				= Field.Types[Type]
						= Field[Type.toCamelCase()]
						= Parent.extend
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
		
		Parent.apply(this, arguments);
	}
	,undefined
	,{
		Field: Field
	}
);

module.exports			= Self;
