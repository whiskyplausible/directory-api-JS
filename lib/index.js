"use strict";

const jp = require('@f5io/jsonpath');
const JSPON4JavaScript = require('JSPON-For-JavaScript');

//const Fields = require.context("./", false, /^\.\/.*\.js$/);
require('./fields');

/**
 * Directory Class to return objects from the Bristol Pound Cyclos Custom Web Service
 * 
 * @constructor
 * @param {Object} [config={}] - Configuration object for the new created instance
 * @param {string} [config.protocol=https] - protocol to be used to connect to the 'host': [http|https]
 * @param {string} [config.host=localhost] - Cyclos host [or compatible] 
 * @param {integer} [config.host=] - Port
 * @param {string} [config.cyclosPrefix=/cyclos] - Url prefix to the Cyclos instance
 * @param {string} [config.network=] - Cyclos Network name
 * @param {string} [config.wsPrefix=run] - Prefix to access the Custom Web Service (Should usually not be changed, as defined by Cyclos)
 * @param {string} [config.wsName=directory] - Name of the Custom Web Service
 * @param {string} [config.apiVersion=0.0.1] - API version of the Custom Web Service
 * 
 * @version 0.0.1
 * @author Martin Rüegg <martin.rueegg@bristolpound.org>
 * @see {@link https://code.bristolpound.org/cyclos-scripts/directory-api-JS}
 */

const Directory = module.exports = function(config)
{
	if (!(this instanceof Directory))
	{
		return new Directory(config);
	}

	config = config || {}
	
	this.config = config;

	var protocol = "https";
	// Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
	if (typeof config.protocol == "string") {
		protocol = "/" + config.protocol.replace(/([:\/]+$)/g, "");
	}
	this.config.protocol = protocol;

	var host	= (typeof config.host == "string")
					? config.host
					: "localhost"
	;
	this.config.host = host;

	var port = "";
	// Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
	if (typeof config.port == "string") {
		port = "" + config.port.replace(/(^[:]|[\/]+$)/g, "");
	}
	else if (typeof config.port == "integer") {
		port = "" + config.port;
	}
	this.config.port = port;

	var cyclosPrefix = "/cyclos";
	// Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
	if (typeof config.cyclosPrefix == "string") {
		cyclosPrefix = "/" + config.cyclosPrefix.replace(/(^[\/]+|[\/]+$)/g, "");
	}
	this.config.cyclosPrefix = cyclosPrefix;

	var network = "";
	// Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
	if (typeof config.network == "string") {
		network = config.network.replace(/(^[\/]+|[\/]+$)/g, "");
	}
	this.config.network = network;

	var wsPrefix = "run";
	// Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
	if (typeof config.wsPrefix == "string") {
		wsName = config.wsPrefix.replace(/(^[\/]+|[\/]+$)/g, "");
	}
	this.config.wsPrefix = wsPrefix;

	var wsName = "directory";
	// Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
	if (typeof config.wsName == "string") {
		wsName = config.wsName.replace(/(^[\/]+|[\/]+$)/g, "");
	}
	this.config.wsName = wsName;

	var apiVersion = "0.0.1";
	// Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
	if (typeof config.apiVersion == "string") {
		apiVersion = config.apiVersion.replace(/(^[\/]+|[\/]+$)/g, "");
	}
	this.config.apiVersion = apiVersion;

//	var fetch = "0.0.1";
//	// Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
//	if (typeof config.fetch == "string") {
//		fetch = config.fetch;
//	}
};


(function() {

	try {
		if (typeof fetch === "function")
		{
			this.fetch = fetch;
		}
		else
		{
			throw "no fetch";
		};
	}
	catch(e)
	{
		try
		{
			this.fetch	= typeof window !== 'undefined' && typeof window.fetch != "function"
						? window.fetch
						: require((typeof module !== 'undefined' && module.exports) ? 'node-fetch' : "no fetch");

			if (typeof this.fetch != "function")
			{
				throw "no fetch";
			};
		}
		catch(e)
		{
			console.log("fetch: n/a");
			throw e;
		}
	}

	this.jp = jp;

	this.url = function()
	{
		return	  this.config.protocol + "://"
				+ this.config.host
				+ (this.config.port ? ":"+this.config.port : "")
				+ this.config.cyclosPrefix
				+ (this.config.network ? "/" + this.config.network : "") 
				+ "/" + this.config.wsPrefix
				+ "/" + this.config.wsName
				+ "/" + this.config.apiVersion
	};
	
	const isBusiness	= /^\$\.directory\[\d+\]$/;
	const Business		= require('./directory/Business.js');

	const isField		= /^\$\.fields\[\d+\]$/;
	const Field			= require('./fields/Field.js');

	const isGrouping	= /^\$\.groupings\[\d+\]$/;
	const Grouping		= require('./groupings/Grouping.js');
	
	const JSPON	= this.JSPON
				= new JSPON4JavaScript({
					
					 onBeforeWalk: function(e)
					{
						//console.log("in onBeforeWalk function");
						//console.log(e.params.id);

						if (typeof e.params.obj != "object")
							return;

						if (e.params.id.match(isField))
						{
							//console.log(e.params.id);
							e.params.obj = Field.create(e.params.obj.type, e.params.obj);
							return;
						}

						if (e.params.id.match(isGrouping))
						{
							//console.log(e.params.id);
							e.params.obj = Grouping.create(e.params.obj);
							return;
						}
					}

					,onAfterWalk: function(e)
					{
						if (typeof e.params.obj != "object")
							return;

						if (e.params.id.match(isBusiness))
						{
							//console.log(e.params.id);
							e.params.obj = Business.create(e.params.obj);
							return;
						}
					}

					,onBeforeWalkArray: function(e)
					{
						e.params.tempObj = {};
						e.params.allWithId = true;
					}

					,onAfterWalkArrayElement: function(e)
					{
						//console.log("in onAfterWalkArrayElement function (id: "+e.params.id+"; i: "+e.params.i+"; allWithId: "+e.params.allWithId+")");
						
						if (!e.params.allWithId)
							return;
						
						var o, id;
						
						if ((o = e.params.obj[e.params.i])
							&& typeof o === 'object'
							&& (
								(	Object.prototype.hasOwnProperty.call(o, 'id')
								&&	(id = o.id)				// save the id
								) || (
										Object.prototype.hasOwnProperty.call(o, 'field')
									&&	o.field
									&&	Object.prototype.hasOwnProperty.call(o.field, 'id')
									&&	(id = o.field.id)	// save the id
									&&	(o.id = id)			// save the id on the object itself
								)
							)
						)
						{
							e.params.objTracker[e.params.id+'.'+id] = o;
							
							if (e.params.allWithId)
							{
								e.params.tempObj[id] = o;
							}
						}
						else
						{
							e.params.allWithId = false;
						}
					}
					
					, onAfterWalkArray: function(e)
					{
						//console.log("in onAfterWalkArray function (id: "+e.params.id+"; allWithId: "+e.params.allWithId+")");
						
						if (e.params.allWithId)
						{
							e.params.obj = e.params.tempObj;
						}
					}
				});

	console.log(JSPON);

	this.directory = function(resolve, reject)
	{
		return this.fetch(this.url())

		.then(function(res) {
			return res.text();
		},function(err) {
			console.log("ERROR: " + err);
		})

		.then(function(json) {
			var j = JSPON.parse(json);
			return j;
			
		},function(err) {
			console.log("ERROR: " + err);
		})

		.then(resolve, reject)
		;
	}
	
	const processResponse = (dispatch, expectedResponse = 200) => (response) => {
		//  throwErrorOnUnexpectedResponse(response, expectedResponse)
		console.log(response);
		  return response.text(); //json()
		}

}).call(Directory.prototype);

