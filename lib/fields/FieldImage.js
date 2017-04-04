"use strict";

const Type				= "IMAGE";
const Parent			= require('./Field.js');
const Field				= Parent.Field;

const Self				= Field.Types[Type]
						= Field[Type.toCamelCase()]
						= Parent.extend
(
	/**
	 * FieldImage class for fields of type IMAGE
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
	function FieldImage(init)
	{
		this.type = this.type || Type;
		
		Parent.apply(this, arguments);
	}
	,undefined
	,{
		Field: Field
	}
);


//Static Properties
//


//Static Functions
//


//Member Properties
//


//Member Functions
//
Self.prototype.convertToStatic = function(value)
{
	console.log(value);
	return {
		url: value ? ((this.options.baseUrl ? this.options.baseUrl : "") + value.name) : undefined,
	};
}

Object.defineProperty(Self.prototype, 'convertToStatic',
{
	enumerable: false,
	writable: true
});


module.exports			= Self;
