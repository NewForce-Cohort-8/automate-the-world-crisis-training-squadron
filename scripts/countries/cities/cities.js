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
	"Historical architecture, The tallest monument in the world(Motherland-102 meters"
);

makeCity(
	cityCollector,
	"Italy",
	"https://www.michiganhumane.org/wp-content/uploads/2018/07/Cat-Google-Maps-1080x675.png",
	"Rome",
	4316000,
	"41.9028° N",
	"12.4964° E",
	"The founding story of Rome is quite interesting. According to mythology, it was founded way back in 753 BC by twin brothers Romulus and Remus. It’s believed that the two brothers were raised by a she-wolf after being abandoned on the banks of the Tiber.",
	"The city of Rome has more fountains than any other city on the planet and their cats have special rights. Cats may live wherever they choose and it's against the law to relocate them by force."
);

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
