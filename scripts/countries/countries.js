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

console.log(countryCollector);
