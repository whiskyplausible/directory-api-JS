"use strict";

const StaticHelper = {};


StaticHelper.getStatic = function(self)
{
	if (self === undefined)
		self = this;

	if (self === null
	||  self === undefined
	|| (self.constructor !== Array && typeof self != 'object'))
		return self;

	if (typeof self.getStatic == 'function' && self.getStatic !== StaticHelper.getStatic)
	{
		// use native caller
		return self.getStatic();
	}

	function processElement(property, newSelf)
	{
		if (self[property] === null || self[property] === undefined)
		{
			return self;
		}
		else if (typeof self[property] == 'function')
		{
			//don't copy any functions
			//console.log(self+":"+property+"")
		}
		else
		if (typeof self[property]			== 'object'
		&&  typeof self[property].getStatic == 'function'
		)
		{
			newSelf[property] = self[property].getStatic();
		}
		else
		{
			newSelf[property] = StaticHelper.getStatic(self[property]);
		}
	}

	if (self.constructor === Array)
	{
		const a = [];

		for (var i = 0; i < self.length; i++)
		{
			processElement(i, a);
		}

		return a;
	}
	else
	{
		const o = {};

		for (var property in self)
		{
			processElement(property, o);
		}

		return o;
	}
}


module.exports = StaticHelper;