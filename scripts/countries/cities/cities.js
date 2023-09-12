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
