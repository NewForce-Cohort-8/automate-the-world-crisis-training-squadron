import { makeCountry } from "./factory-functions.js";
export let countryCollector = [];

//test data
makeCountry(
	countryCollector,
	"image",
	"The Netherlands",
	"date",
	"latitude",
	"long",
	278723827,
	"strup waffle",
	"Dutch",
	"French"
);

console.log(countryCollector);
