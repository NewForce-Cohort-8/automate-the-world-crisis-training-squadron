import { makeCity } from "../factory-functions.js";

export let cityCollector = [];


makeCity(
	cityCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/Kyiv motherland.jpg",
	"Kyiv",
	3017000,
	"50.4501° N",
	"30.5234° E",
	"Chicken Kyiv",
	"Historical architecture, The tallest monument in the world(Motherland-102 meters)"
);

console.log(cityCollector);
