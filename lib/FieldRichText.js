"use strict";

const FieldText = require('./FieldText.js');
const Type		= "RICH_TEXT";

module.exports	= FieldText.Field.Types[Type]
				= FieldText.Field.RichText
				= FieldText.Field.extend
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
		
		FieldText.apply(this, arguments);
	}
);
