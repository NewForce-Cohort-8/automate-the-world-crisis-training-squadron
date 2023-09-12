import { makeCity } from "../factory-functions.js";

export let cityCollector = [];

//test
makeCity(
	cityCollector,
	"The Netherlands",
	"https://upload.wikimedia.org/wikipedia/commons/0/03/Amsterdam_%285274298633%29.jpg",
	"Amsterdam",
	821752,
	"4.9041° E",
	"52.3676° N",
	"Capital city of The Netherlands",
	"The Red Light District",
	"Canals",
	"Anne Frank's house",
	"The Van Gogh Museum"
);

console.log(cityCollector);
