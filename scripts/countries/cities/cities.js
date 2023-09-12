import { makeCity } from "../factory-functions.js";

export let cityCollector = [];

//test
makeCity(
	cityCollector,
	"The Netherlands",
	"image",
	"Amsterdam",
	20902380,
	"lat",
	"long",
	"Red Light District",
	"Drugs"
);

console.log(cityCollector);
