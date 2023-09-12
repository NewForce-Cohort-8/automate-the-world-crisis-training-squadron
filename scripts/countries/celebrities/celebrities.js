import { makeCelebrity } from "../factory-functions.js";

export let celebrityCollector = [];


makeCelebrity(
	celebrityCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/Shevchenko-detail-portrait-artist.webp",
	"Taras Shevchenko",
	"Poet, writer, public and political figure",
	"March 9th 1814",
	"March 10th 1861",
	"Ukrainian, russian",
	"Foremost Ukrainian poet ot the 19th century and a major figure of the Ukrainian national revival",
	"The most famous poem-'The Caucasus'",
	"'Kobzar' is the name of the first book-collection of poetic works of Taras Shevchenko in 1840"
);

makeCelebrity(
	celebrityCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/jamala.jpg",
	"Susana Jamaladinova-'Jamala'",
	"Ukrainian singer",
	"August 27th 1983",
	"Ukrainian, Crimean Tatar, English and russian",
	"National singer of Ukraine, winner of Eurovision 2016"
)

console.log(celebrityCollector);
