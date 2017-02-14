"use strict";

/*
 * @see {@link http://www.devcurry.com/2011/07/javascript-convert-camelcase-to-dashes.html}
 */
String.prototype.toMixedCase = function()
{
	return this
	.toLowerCase()
	.replace(/_/g, "-")
	.replace(/\W+(.)/g, function (match, submatch1, offset, string) {
		return submatch1.toUpperCase();
	})
}


String.prototype.toFirstUpperCase = function ()
{
	return this
	.replace(/\w/, function (match, offset, string)
	{
		return match.toUpperCase();
	})
}

String.prototype.toCamelCase = function()
{
	return this.toMixedCase().toFirstUpperCase();
}
