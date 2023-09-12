import { makeCity } from "../factory-functions.js";

export let cityCollector = [];


makeCity(
	cityCollector,
	"Japan",
	"https://i.insider.com/5d26280921a86107bb51bd92?width=700",
	"Tokyo", 
	"37194105", 
	"35.6762° N",
	"139.6503° E", 
	"Historic Shrines and Temples",
	"Tokyo Skytree"
); 

console.log(cityCollector);
