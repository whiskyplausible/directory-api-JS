"use strict";

/**
 * Extend the Function prototype in order to create Object inheritance
 */

if (Function.prototype.extend === undefined)
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
	Function.prototype.extend = function(
			constructor
			, methods
			, statics
	) {

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
		function extend(o,p)
		{
			for (var prop in p) {
				o[prop] = p[prop];
			}
			return o;
		}

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
			constructor.prototype				= Object.create(superclass.prototype);
			constructor.prototype.constructor	= constructor;
			
			extend(constructor, superclass);

			if (methods)
				extend(constructor.prototype, methods);

			if (statics)
				extend(constructor, statics);

			return constructor;
		}

		return defineSubclass(this, constructor, methods, statics);
	};
}

