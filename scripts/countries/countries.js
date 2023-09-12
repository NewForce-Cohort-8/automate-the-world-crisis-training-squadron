import { makeCountry } from "./factory-functions.js";
export let countryCollector = [];

//test data
makeCountry(
	countryCollector,
	"https://i.redd.it/rsmvfe4n7df51.jpg",
	"The Netherlands",
	"May 5, 1945",
	"5.2913° E",
	"52.1326° N",
	17530000,
	"poffertjes",
	"Dutch",
	"Frisian"
);

console.log(countryCollector);
