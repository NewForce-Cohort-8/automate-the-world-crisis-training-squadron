import { makeCountry } from "./factory-functions.js";
export let countryCollector = [];

// //test data
// makeCountry(
// 	countryCollector,
// 	"image",
// 	"The Netherlands",
// 	"date",
// 	"latitude",
// 	"long",
// 	278723827,
// 	"strup waffle",
// 	"Dutch",
// 	"French"
// );

// console.log(countryCollector);


makeCountry(
	countryCollector,
	"https://media.istockphoto.com/id/108268421/photo/overzealous-mother-feeding-adult-son-pasta.jpg?s=1024x1024&w=is&k=20&c=ACXPWBdbyXrJnsKM8OA9SMUC9JGbQbDvX6REpZCOlms=",
	"Italy",
	"June 2, 1946",
	"41.8719° N",
	"12.5674° E ",
	59110000,
	"Spaghetti alla Carbonara",
	"Italian",
	""
);

console.log(countryCollector);

