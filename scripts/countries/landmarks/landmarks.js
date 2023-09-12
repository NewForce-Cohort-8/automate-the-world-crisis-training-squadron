import { makeLandmark } from "../factory-functions.js";

export let landmarkCollector = [];

//test
makeLandmark(
	landmarkCollector,
	"The Netherlands",
	"image",
	"Windmill",
	"symbol",
	90.4,
	93.6,
	"Clean Energy",
	"Milling grains"
);

console.log(landmarkCollector);
