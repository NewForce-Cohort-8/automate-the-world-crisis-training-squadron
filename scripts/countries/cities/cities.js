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
	"Ukraine",
	"scripts/countries/celebrities/images/crimea.jpg",
	"Crimean Peninsula",
	2416856,
	"45,3453° N",
	"34.4997° E",
	"Cheburekki, Yantiq, Sarma, Laghman, Chak-Chak, Sherbet",
	"Crimea is a peninsula in Eastern Europe, on the northern coast of the Black Sea, almost entirely surrounded by the Black Sea and the smaller Sea of Azov."
);

makeCity(
	cityCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/lviv.jpg",
	"Lviv",
	721301,
	"49.8397° N",
	"24.0297° E",
	"Banosz, Halushki, Lviv coffee, Lviv chocolate, Lviv syrnyk",
	"Lviv is the city where the first Ukrainian book was printed, the first railroad tracks and a European-style post office were built, the first Ukrainian theater, university, and school were opened.",
	" The world's first kerosene lamp was lit and the first balloon was lifted into the air."
);

makeCity(
	cityCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/odesa.jpeg",
	"Odessa",
	112483,
	"46.4825° N",
	"30.7233° E",
	"Gefilte fish, seafood, varenyky with cherries",
	"The third most populous city in Ukraine and is alternatively known as the 'Pearl of the Black Sea',Southern Palmyra'"
)

makeCity(
	cityCollector,
	"Italy",
	"https://www.michiganhumane.org/wp-content/uploads/2018/07/Cat-Google-Maps-1080x675.png",
	"Rome",
	4316000,
	"41.9028° N",
	"12.4964° E",
	"Founded by twin brothers Romulus and Remus who were believed to be raised by a she-wolf after being abandoned on the banks of the Tiber.",
	"Cats have special rights and it is against the law to relocate them by force."
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

makeCity(
	cityCollector,
	  "Greece",
	  "scripts/countries/celebrities/images/athenean-coin.jpg",
	  "Athens",
	  643452,
	  "37.5903 N",
	  "23.4341 E",
	  "The birthplace of Democracy",
	  "The youth were 'corrupted' by Socrates (supposedly)",
	  "Had a large navy in ancient times"
  );


console.log(cityCollector);
