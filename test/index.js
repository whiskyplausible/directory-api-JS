/**
 * http://usejsdoc.org/
 */

//const DirectoryAPI = require('org.bristolpound.cyclos.api.directory');
const DirectoryAPI = require('..');

const directoryAPI = new DirectoryAPI({
	  host: "bristol-stage.community-currency.org"
	, network: "bristolpound"
});

//const jsonPathQueryStr = '$..author'; //'$..h[?(@.foo>13)]';
//const result = dir.jp(jsonPathQueryStr,dir.store);

//console.log(result);

function test(json)
{
	console.log(json);
	console.log(json.directory['2068777009451340281'].fields.username);
}

console.log(directoryAPI.url());
var json = directoryAPI.directory(test);
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