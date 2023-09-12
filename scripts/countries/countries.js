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
);

makeCountry(
	countryCollector,
	"https://easy-sushi.com/wp-content/uploads/2020/07/easy_sushi_7_anectodes_sur_le_japon.jpg",
	"Japan", 
	"1952",
	"36.2048° N", 
	"138.2529° E",
	"123294513",
	"Japanese Curry Rice", 
	"Japanese",
); 
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

