/**
 * http://usejsdoc.org/
 */

//const DirectoryAPI = require('org.bristolpound.cyclos.api.directory');
const DirectoryAPI = require('..');

const directoryAPI = new DirectoryAPI({
	  host: "bristol-stage.community-currency.org"
	, network: "bristolpound"
});


const jp = require('@f5io/jsonpath');

//console.log( (jp("$.adf.adsf", {}) === undefined));

//const jsonPathQueryStr = '$..author'; //'$..h[?(@.foo>13)]';
//const result = dir.jp(jsonPathQueryStr,dir.store);

//console.log(result);

function test(json)
{
//	console.log(jp('$.fields',json));
//	console.log(jp('$.fields.businesscategory.possibleValues',json));
//	console.log(jp('$.fields.businesscategory.possibleValues.values.accountants',json));
//	console.log(jp('$.fields.businesscategory.possibleValues.values.chocolatier',json));
//	console.log(jp('$.fields.businesscategory.possibleValues.categories.lookingafteryou',json));
//	console.log(json);
//	console.log(json.fields);
//	console.log(json.fields.businesscategory.possibleValues.categories.shopping);
//	console.log(json.fields.businesscategory.possibleValues.categories.shopping.children[0]);
//	console.log(json.fields.businesscategory.possibleValues.values);
//	console.log(json.fields.businesscategory.possibleValues.values.entertainment);
/*	console.log(json.directory['2068777009451296761']);
	console.log(json.directory['2068777009451296761'].fields);
	console.log(json.directory['2068777009451296761'].fields.username);
	console.log("username: "+json.directory['2068777009451296761'].fields.username);
	console.log("username.value: "+json.directory['2068777009451296761'].fields.username.value);
	console.log("address: "+json.directory['2068777009451296761'].address);
	console.log("name: "+json.directory['2068777009451296761'].name);
*/
//	console.log(json.fields.businesscategory.possibleValues.values.accountants);
	console.log(json);
	console.log(json.fields.businesscategory);
	console.log(json.fields.businesscategory.possibleValues.categories);
	console.log(json.fields.businesscategory.possibleValues.values);
	return;
	console.log(json.directory['2068777009451344121']);
	console.log(json.directory['2068777009451344121'].address);
	console.log(json.directory['2068777009451344121'].fields.addresses);
	console.log(json.directory['2068777009451344121'].fields.businesscategory);
	console.log(json.directory['2068777009451344121'].categories);
	console.log(json.directory['2068777009451344121'].fields.description);

}

console.log(directoryAPI.url());
//var json = directoryAPI.directory(test);
var json = directoryAPI.staticDirectory(test);
console.log(json);

//dir.directory(console.log);

/*
console.log(new JSPON());
console.log(JSPON);
JSPON.setSettings({idFieldName:'$id'});
console.log(JSPON);
console.log((new JSPON()).constructor);
*/

console.log("done");