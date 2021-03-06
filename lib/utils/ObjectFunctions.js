"use strict";

if (!Object.prototype.hasOwnProperty.call(Object.prototype, "getKeys"))
{
	Object.defineProperty(Object.prototype, 'getKeys',
	{
		writable: true,
		configurable: true,
		enumerable: false,
		value: function()
		{
			const keys = [];
			
			for(var key in this)
			{
				keys.push(key);
			}
	
			return keys;
		}
	});
}

/**
 * Copying properties from one object to an other
 * 
 * @param {object} o - Destination Object
 * @param {object} p - Source Object
 * 
 * @author GMeister {@link http://stackoverflow.com/users/3204277/gmeister}
 * @author Martin Rüegg <martin.rueegg@bristolpound.org>
 * @see {@link http://stackoverflow.com/a/26287627/3102305}
 */
if (!Object.prototype.hasOwnProperty.call(Object.prototype, "extend"))
{
	Object.defineProperty(Object.prototype, 'extend',
	{
		writable: true,
		configurable: true,
		enumerable: false,
		value: function extend()
		{
			for (var i = 0; i < arguments.length; i++)
			{
				var p = arguments[i];
				for (var prop in p) {
					this[prop] = p[prop];
				}
			}
			return this;
		}
	});
}
