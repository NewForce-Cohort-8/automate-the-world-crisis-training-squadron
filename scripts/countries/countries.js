import { makeCountry } from "./factory-functions.js";
export let countryCollector = [];


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
