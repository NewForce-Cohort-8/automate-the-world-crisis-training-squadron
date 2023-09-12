import { makeCountry } from "./factory-functions.js";
export let countryCollector = [];


makeCountry(
	countryCollector,
	"scripts/countries/celebrities/images/ukr millt sunflow.jpg",
	"Ukraine",
	"August 24th 1991",
	"48.3794° N",
	"31.1656° E",
	36774636,
	"Borscht, Varenyky, Holubtsi, Pirozhki, Salo",
	"Ukrainian"
);

console.log(countryCollector);
