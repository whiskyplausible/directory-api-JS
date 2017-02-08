/**
 * http://usejsdoc.org/
 */

var Dir = require('../lib');


//var fetch = require('node-fetch');

var dir = new Dir({
	  host: "bristol-stage.community-currency.org"
	, network: "bristolpound"
});

//const jsonPathQueryStr = '$..author'; //'$..h[?(@.foo>13)]';
//const result = dir.jp(jsonPathQueryStr,dir.store);

//console.log(result);

function test(json)
{
	console.log(json);
	console.log(json.directory['1466'].data);
}

console.log(dir.url());
dir.directory(test);
//dir.directory(console.log);

/*
console.log(new JSPON());
console.log(JSPON);
JSPON.setSettings({idFieldName:'$id'});
console.log(JSPON);
console.log((new JSPON()).constructor);
*/

console.log("done");