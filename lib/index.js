"use strict";

/**
 * http://usejsdoc.org/
 */

const jp = require('@f5io/jsonpath');

var Directory = module.exports = function(config)
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

	var apiVersion = "0.0.1";
	// Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
	if (typeof config.fetch == "string") {
		apiVersion = config.apiVersion.replace(/(^[\/]+|[\/]+$)/g, "");
	}
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
	
	this.JSPON = new require('JSPON-For-JavaScript')();
	var JSPON = this.JSPON;
	
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

