"use strict";

const jp = require('@f5io/jsonpath');

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
		if (typeof fetch != "function")
		{
			throw "no fetch";
		};
	}
	catch(e)
	{
		var fetch;
		
		try
		{
			fetch = window.fetch;
		}
		catch(e)
		{
			try
			{
				fetch = require('node-fetch');
			}
			catch(e)
			{
				console.log("fetch: n/a");
				throw e;
			}
		}
	}
	
	this.cities = [
		{ name: "London", "population": 8615246 },
		{ name: "Berlin", "population": 3517424 },
		{ name: "Madrid", "population": 3165235 },
		{ name: "Rome",   "population": 2870528 }
		];

	this.store =   {
			"store": {
				"book": [
					{
						"category": "reference",
						"author": "Nigel Rees",
						"title": "Sayings of the Century",
						"price": 8.95
					},
					{
						"category": "fiction",
						"author": "Evelyn Waugh",
						"title": "Sword of Honour",
						"price": 12.99
					},
					{
						"category": "fiction",
						"author": "Herman Melville",
						"title": "Moby Dick",
						"isbn": "0-553-21311-3",
						"price": 8.99
					},
					{
						"category": "fiction",
						"author": "J. R. R. Tolkien",
						"title": "The Lord of the Rings",
						"isbn": "0-395-19395-8",
						"price": 22.99
					}
					],
					"bicycle": {
						"color": "red",
						"price": 19.95
					}
			}
	};

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

	const isField		= /^\$\.fields\[\d+\]$/;
	const Field			= require('./fields/Field.js');

	const isGrouping	= /^\$\.groupings\[\d+\]$/;
	const Grouping		= require('./grouping/Grouping.js');

	var onWalk = function(e)
	{
		//	console.log(id, value);
		//	console.log(e.params.id);

		if (typeof e.params.obj != "object")
			return;

		if (e.params.id.match(isField))
		{
			console.log(e.params.id);
			e.params.obj = Field.create(e.params.obj.type, e.params.obj);
			return true;
		}

		if (e.params.id.match(isGrouping))
		{
			console.log(e.params.id);
			e.params.obj = Grouping.create(e.params.obj);
			return true;
		}

		//return true;
	}

	var JSPON	= this.JSPON
				= new require('JSPON-For-JavaScript')({
					
					 onBeforeWalk: onWalk
					
					,onAfterWalkArrayElement: function(e)
					{
						if (e.params.obj[e.params.i]
						&& typeof e.params.obj[e.params.i] === 'object'
						&& Object.prototype.hasOwnProperty.call(e.params.obj[e.params.i], 'id'))
						{
							e.params.objTracker[e.params.id+'.'+e.params.obj[e.params.i].id] = e.params.obj[e.params.i];
							if (e.params.allWithId)
							{
								e.params.tempObj[e.params.obj[e.params.i].id] = e.params.obj[e.params.i];
							}
						}
						else
						{
							e.params.allWithId = false;
						}
					}
					, onAfterWalkArray: function(e)
					{
						if (e.params.allWithId)
						{
							e.params.obj = e.params.tempObj;
						}
						return true;
					}
				});
	
	console.log(onWalk);
	console.log(JSPON);
	this.directory = function(callback)
	{
		return fetch(this.url())
		.then(function(res) {
			return res.text();
		})
		.then(function(json) {
		//	console.log(json);
			console.log("");
			console.log("hallo");
			console.log("");
			json = JSPON.parse(json);
			callback(json);
			return;
		})
		;
//				.then(processResponse());
	}
	
	const processResponse = (dispatch, expectedResponse = 200) => (response) => {
		//  throwErrorOnUnexpectedResponse(response, expectedResponse)
		console.log(response);
		  return response.text(); //json()
		}

}).call(Directory.prototype);

