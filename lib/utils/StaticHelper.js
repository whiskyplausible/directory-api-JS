"use strict";

const StaticHelper = {};


StaticHelper.getStatic = function()
{
	if (typeof this != 'object')
		return this;

	if (typeof this.getStatic == 'function' && this.getStatic !== StaticHelper.getStatic)
	{
		// use native caller
		return this.getStatic();
	}

	var o = {};

	for (var property in this)
	{
		if (typeof this[property] == 'function')
		{
			console.log(property+"")//
		}
		else
		if (typeof this[property]			== 'object'
		&&  typeof this[property].getStatic == 'function'
		)
		{
			o[property] = this[property].getStatic();
		}
		else
		{
			o[property] = this[property];
		}
	}

	return o;
}


module.exports = StaticHelper;