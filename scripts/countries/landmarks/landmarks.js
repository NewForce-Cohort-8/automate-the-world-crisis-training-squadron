import { makeLandmark } from "../factory-functions.js";

export let landmarkCollector = [];

makeLandmark(
	landmarkCollector,
	"Italy",
	"https://mymodernmet.com/wp/wp-content/uploads/2017/07/funny-leaning-tower-of-pisa-photos-7.jpg",
	"Leaning Tower of Pisa",
	"The tower is a cultural icon symbolizing the human ability to sometimes almost defy nature.",
	90.4,
	93.6,
	"The Leaning Tower of Pisa, with its equal helpings of beauty and folly, is one of the most recognizable buildings in the world. But behind that famous tilt is a fascinating history including plundered loot, treacherous subsoil, hundreds of years of engineering missteps and one proud Italian dictator.The tower was built to show off with stolen money and the lean didn't happen overnight. Given that the name “Pisa” comes from the Greek word for “marshy land” you would think that the cathedral’s architects would have taken the subsoil into account while building a very tall bell tower. They didn’t. By giving the tower a shallow and relatively heavy foundation, they inadvertently doomed it from the outset.",
	);

makeLandmark(
	landmarkCollector, 
	"Japan", 
	"https://media.istockphoto.com/id/1137578281/photo/fuji-mountain-and-cherry-blossoms-in-spring-japan.jpg?s=612x612&w=0&k=20&c=H4T0916_yYJTjeKAaaLmYoQY3OMmaFShks6RfpYYVf4=",
	"Mount Fuji", 
	"mountain", 
	"35.16667° N", 
	"138.68333° E", 
	"Highest mountain in Japan", 
	"Dormant Volcano"
  );

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