import { makeLandmark } from "../factory-functions.js";

export let landmarkCollector = [];

//test
makeLandmark(
	landmarkCollector,
	"The Netherlands",
	"https://upload.wikimedia.org/wikipedia/commons/e/e0/De_gooyer_amsterdam.jpg",
	"De Gooyer Molen",
	"Monument",
	"4.9262° E",
	"52.3669° N",
	"Tallest wooden mill in The Netherlands",
	"Last of the 26 corn mills on the bastions of the 17th century walls of Amsterdam"
);

console.log(landmarkCollector);
