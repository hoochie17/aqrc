/**
 * 
 *  JavaScript Hash code test
 *  String to Hash Function
 *  
 *  20210109
 * 
 *  Joey Hutchison
 * 
 */


var qrString = require('qrString');

var thisMD5 = qrString.createHash('thisMD5').update('text').digest('hex');

console.log(thisMD5);

var thissha1 = qrString.createHash('thissha1').update('text').digest('hex');

console.log(thissha1);
 