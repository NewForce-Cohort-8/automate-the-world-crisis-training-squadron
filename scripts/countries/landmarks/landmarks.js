import { makeLandmark } from "../factory-functions.js";

export let landmarkCollector = [];



makeLandmark(
	landmarkCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/Khortytsia.jpg",
	"National Reserve Khortytsia",
	"symbol",
	"47.8600° N",
	"35.0712° E",
	"An unique memorial of nature, culture and history of Zaporizhzhia Cossacks",
	"Khortytsia is one of the Seven Wonders of Ukraine"
);


makeLandmark(
	landmarkCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/lake.jpg",
	"Svitiaz Lake",
	"514966° N",
	"23.8461° E",
	"Svitiaz is the deepest lake in Ukraine, with  a max depth of 58.4 m",
	"Scientists claim that the reservoir appeared approximately 10,000 years ago "
);

makeLandmark(
	landmarkCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/mountains.jpg",
	"Carpathian Mountains",
    "47.2390° N",
	"25.5909° E",
	"The Carpathian Mountains are home to one of the largest undisturbed forests in Europe",
	"400 unique species of mammals, including the Carpathian chamois, call the Carpathian Mountains home",
	"60% of European brown bear population lives in the Carpathian Mountains"
)

makeLandmark(
	landmarkCollector,
	"Italy",
	"https://mymodernmet.com/wp/wp-content/uploads/2017/07/funny-leaning-tower-of-pisa-photos-7.jpg",
	"Leaning Tower of Pisa",
	"The tower is a cultural icon symbolizing the human ability to sometimes almost defy nature.",
	90.4,
	93.6,
	"Treacherous subsoil", 
	"Engineering missteps"
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

makeLandmark(
	landmarkCollector, 
	"Greece", 
	"scripts/countries/celebrities/images/The_Parthenon_in_Athens.jpg",
	"The Parthenon", 
	"Temple", 
	"37.9715° N", 
	"23.7266° E", 
	"Dedicated to Athena", 
	"Architecture that makes use of the 1:1.618 <a href='https://en.wikipedia.org/wiki/Golden_ratio'>golden ratio<a>."
  );

console.log(landmarkCollector);