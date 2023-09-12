import { makeLandmark } from "../factory-functions.js";

export let landmarkCollector = [];


makeLandmark(
	landmarkCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/Khortytsia.jpg",
	"National Reserve Khortytsia",
	"symbol",
	47.8600,
	35.0712,
	"An unique memorial of nature, culture and history of Zaporizhzhia Cossacks",
	"Khortytsia is one of the Seven Wonders of Ukraine"
);


makeLandmark(
	landmarkCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/lake.jpg",
	"Svitiaz Lake",
	514966,
	23.8461,
	"Svitiaz is the deepest lake in Ukraine, with  a max depth of 58.4 m",
	"Scientists claim that the reservoir appeared approximately 10,000 years ago "
);

console.log(landmarkCollector);
