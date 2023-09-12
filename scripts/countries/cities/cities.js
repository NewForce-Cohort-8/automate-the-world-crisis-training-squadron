import { makeCity } from "../factory-functions.js";

export let cityCollector = [];

// //test
// makeCity(
// 	cityCollector,
// 	"The Netherlands",
// 	"image",
// 	"Amsterdam",
// 	20902380,
// 	"lat",
// 	"long",
// 	"Red Light District",
// 	"Drugs"
// );

// console.log(cityCollector);


//test
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

console.log(cityCollector);
