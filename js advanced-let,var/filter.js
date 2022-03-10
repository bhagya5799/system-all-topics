function array(){}
const a=[
{"brand":"sumsang","model":"m1","price":10000},
{"brand":"sumsang","model":"m1","price":20000},
{"brand":"sumsang","model":"m1","price":6000},
{"brand":"sumsang","model":"m1","price":87000},
{"brand":"sumsang","model":"m1","price":10780},
{"brand":"sumsang","model":"m1","price":10400},
{"brand":"sumsang","model":"m1","price":18800}]
const highphone=a.filter(m=> m.price>15000)
console.log("highphone",highphone.length);


let numbers = [1, 2, 6, 8, 12, 14];

let a=numbers.filter(k=>k>6)
// var result = numbers.filter(element => element>5)
// console.log(result);
console.log(a)
