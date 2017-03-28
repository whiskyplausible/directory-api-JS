"use strict";

Object.prototype.getKeys = function()
{
	const keys = [];
	
	for(var key in this)
	{
		keys.push(key);
	}

	return keys;
}
