"use strict";

require('./ObjectFunctions.js');

/**
 * Extend the Function prototype in order to create Object inheritance
 */
if (!Object.prototype.hasOwnProperty.call(Function.prototype, "extend"))
{
	/**
	 * Extend the Function prototype in order to create Object inheritance
	 * 
	 * @param {function} constructor - Constructor of our new subclass
	 * @param {object} methods - Instance methods
	 * @param {object} statics - Class properties
	 * 
	 * @author GMeister {@link http://stackoverflow.com/users/3204277/gmeister}
	 * @author Martin Rüegg <martin.rueegg@bristolpound.org>
	 * @see {@link http://stackoverflow.com/a/26287627/3102305}
	 */
	Object.defineProperty(Function.prototype, 'extend',
	{
	writable: true,
	configurable: true,
	enumerable: false,
	value: function extend(
			constructor
			, methods
			, statics
	) {

		/**
		 * Extend the Function prototype in order to create Object inheritance
		 * 
		 * @param {function} superclass - Constructor of our superclass
		 * @param {function} constructor - Constructor of our new subclass
		 * @param {object} methods - Instance methods
		 * @param {object} statics - Class properties
		 * 
		 * @author GMeister {@link http://stackoverflow.com/users/3204277/gmeister}
		 * @author Martin Rüegg <martin.rueegg@bristolpound.org>
		 * @see {@link http://stackoverflow.com/a/26287627/3102305}
		 */
		function defineSubclass(
				  superclass
				, constructor
				, methods
				, statics
		) {
			// Set up the prototype object of the subclass
			Object.defineProperty(constructor, 'prototype',
			{
				value:		Object.create(superclass.prototype),
				enumerable: false
			});

			Object.defineProperty(constructor.prototype, 'constructor',
			{
				value:		constructor,
				enumerable: false
			});

			//	extend(constructor, superclass);

			if (methods)
				Object.prototype.extend.call(constructor.prototype, methods);

			if (statics)
				Object.prototype.extend.call(constructor, statics);

			return constructor;
		}

		return defineSubclass(this, constructor, methods, statics);
	}});
}

