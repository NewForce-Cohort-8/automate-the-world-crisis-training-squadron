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
	" ",
	"Ukrainian, Crimean Tatar, English and russian",
	"National singer of Ukraine, winner of Eurovision 2016"
);

makeCelebrity(
	celebrityCollector,
	"Italy",
	"https://static2.refinery29.com/bin/entry/b6f/x/246329/rmaniembed.jpg",
	"Giorgio Armani",
	"Fashion Designer",
	"July 11, 1934",
	"",
	"His designs are best known for having sophisticated simplicity, sleek tailoring and classic colours."
);

makeCelebrity(
	celebrityCollector,
	"Japan",
	"https://static01.nyt.com/images/2023/01/11/multimedia/11tennis-osaka1-pwhv/11tennis-osaka1-pwhv-superJumbo.jpg",
	"Naomi Osaka",
	"Tennis Star",
	"October 16, 1997",
	"",
	"World's No. 1 in singles by the Women's Tennis Association",
	"Four Grand Slam singles titles, including two consecutive US Opens in 2018 and 2019",
	"Currently dating US Rapper Cordae"
);

makeCelebrity(
	celebrityCollector,
	"The Netherlands",
	"https://i.dailymail.co.uk/i/pix/2015/05/03/20/2827B13E00000578-3066450-Wheely_fun_Famke_Janssen_pedalled_her_way_past_a_photo_shoot_in_-a-5_1430681713678.jpg",
	"Famke Janssen",
	"Actress",
	"November 5th, 1964",
	"",
	"X-Men film series",
	"Taken film trilogy",
	"GoldenEye",
	"Nip Tuck"
);

makeCelebrity(
	celebrityCollector,
	"Greece",
	"scripts/countries/celebrities/images/socrates-1.jpg",
	"Socrates",
	"Philosopher",
	"470 BC",
	"399 BC",
	"Known for thinking about stuff",
	"Taught Plato",
	"Corrupted the youth of Athens (supposedly)",
	"Died from drinking juice"
);

console.log(celebrityCollector);
