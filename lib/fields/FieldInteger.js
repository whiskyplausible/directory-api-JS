"use strict";

const Type				= "INTEGER";
const Parent			= require('./Field.js');
const Field				= Parent.Field;

const Self				= Field.Types[Type]
						= Field[Type.toCamelCase()]
						= Parent.extend
(
	/**
	 * FieldInteger class for fields of type INTEGER
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
	function FieldInteger(init)
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
