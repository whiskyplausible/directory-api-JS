"use strict";

Array.prototype.toObjectBy = function(proprety = 'id')
{
	var tempObj = {};
	var allWithId = true;
	
	for (var i = 0; allWithId && i < this.length; i++)
	{
		var o;
		var id;

		if ((o = this[i])
			&& typeof o === 'object'
			&& (
				(	Object.prototype.hasOwnProperty.call(o, proprety)
				&&	(id = o[proprety])				// save the id
				)
			)
		)
		{
			tempObj[id] = o;
		}
		else
		{
			allWithId = false;
		}
	}

	if (allWithId)
	{
		return tempObj;
	}

	return undefined;
}
