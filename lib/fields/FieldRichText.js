"use strict";

const Type				= "RICH_TEXT";
const Parent			= require('./FieldText.js');
const Field				= Parent.Field;

const Self				= Field.Types[Type]
						= Field[Type.toCamelCase()]
						= Parent.extend
(
	/**
	 * FieldRichText class for fields of type RICH_TEXT
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
	function FieldRichText(init)
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
