import { makeLandmark } from "../factory-functions.js";

export let landmarkCollector = [];


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
  )
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
