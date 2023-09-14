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
);

makeCelebrity(
	celebrityCollector,
	"Italy",
	"https://static2.refinery29.com/bin/entry/b6f/x/246329/rmaniembed.jpg",
	"Giorgio Armani",
	"Fashion Designer",
	"July 11, 1934",
	"",
	"Giorgio Armani's signature style of relaxed yet luxurious ready-to-wear and elegant, intricately beaded evening wear helped introduce ease and streamlined modernity to late 20th-century dressing."
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

const findAge = (date1, date2, obj) => {
	let age;
	let birth = obj.birthday;
};

let today = new Date();
let thisYear = today.getFullYear();
let thisMonth = today.getMonth() + 1;
let thisDay = today.getDate();
console.log(today, thisYear, thisMonth, thisDay);

celebrityCollector.forEach((celebrity) => {
	let age;
	let birth = celebrity.birthday;
	let birthArray = birth.split(",").join("").split("th").join("").split(" ");
	let isMonth = /[A-Za-z]{3,}/;
	let isYear = /[0-9]{3,4}/;
	let birthMonth;
	let birthYear;
	let birthDay;

	if (isMonth.test(birthArray[0])) {
		birthMonth = birthArray[0];
		birthMonth.toLowerCase() === "january"
			? (birthMonth = 1)
			: birthMonth.toLowerCase() === "february"
			? (birthMonth = 2)
			: birthMonth.toLowerCase() === "march"
			? (birthMonth = 3)
			: birthMonth.toLowerCase() === "april"
			? (birthMonth = 4)
			: birthMonth.toLowerCase() === "may"
			? (birthMonth = 5)
			: birthMonth.toLowerCase() === "june"
			? (birthMonth = 6)
			: birthMonth.toLowerCase() === "july"
			? (birthMonth = 7)
			: birthMonth.toLowerCase() === "august"
			? (birthMonth = 8)
			: birthMonth.toLowerCase() === "september"
			? (birthMonth = 9)
			: birthMonth.toLowerCase() === "october"
			? (birthMonth = 10)
			: birthMonth.toLowerCase() === "november"
			? (birthMonth = 11)
			: birthMonth.toLowerCase() === "december"
			? (birthMonth = 12)
			: birthArray[0];
	}
	for (let i = 0; i < birthArray.length; i++) {
		if (isYear.test(birthArray[i])) {
			birthYear = birthArray[i];
			console.log(birthYear);
		}
	}

	if ()
	let deathArray;
	let deathYear;
	let deathMonth;
	if (celebrity.death !== "") {
		let death = celebrity.death;
		deathArray = death.split(",").join("").split("th").join("").split(" ");
		if (isMonth.test(deathArray[0])) {
			deathMonth = deathArray[0];
			deathMonth.toLowerCase() === "january"
				? (deathMonth = 1)
				: deathMonth.toLowerCase() === "february"
				? (deathMonth = 2)
				: deathMonth.toLowerCase() === "march"
				? (deathMonth = 3)
				: deathMonth.toLowerCase() === "april"
				? (deathMonth = 4)
				: deathMonth.toLowerCase() === "may"
				? (deathMonth = 5)
				: deathMonth.toLowerCase() === "june"
				? (deathMonth = 6)
				: deathMonth.toLowerCase() === "july"
				? (deathMonth = 7)
				: deathMonth.toLowerCase() === "august"
				? (deathMonth = 8)
				: deathMonth.toLowerCase() === "september"
				? (deathMonth = 9)
				: deathMonth.toLowerCase() === "october"
				? (deathMonth = 10)
				: deathMonth.toLowerCase() === "november"
				? (deathMonth = 11)
				: deathMonth.toLowerCase() === "december"
				? (deathMonth = 12)
				: deathArray[0];
		}
		for (let i = 0; i < deathArray.length; i++) {
			if (isYear.test(deathArray[i])) {
				deathYear = deathArray[i];
				console.log(deathYear);
			}
		}
	}
	console.log(birthMonth);
	console.log(birthArray);
	console.log(deathArray);
});
