import { countryCollector } from "./countries/countries.js";
import { celebrityCollector } from "./countries/celebrities/celebrities.js";
import { cityCollector } from "./countries/cities/cities.js";
import { landmarkCollector } from "./countries/landmarks/landmarks.js";
import { leaderCollector } from "./countries/leaders/leaders.js";
import { justLetters } from "./countries/factory-functions.js";

let database = {
	countries: [],
	cities: [],
	celebrities: [],
	landmarks: [],
	leaders: [],
};

const modifyCountries = () => {
	for (let i = 0; i < database.countries.length; i++) {
		for (let j = 0; j < database.cities.length; j++) {
			if (
				justLetters(database.countries[i].name) ===
				justLetters(database.cities[j].country)
			) {
				database.countries[i].cities.push(database.cities[j]);
			}
		}
		for (let k = 0; k < database.landmarks.length; k++) {
			if (
				justLetters(database.countries[i].name) ===
				justLetters(database.landmarks[k].country)
			) {
				database.countries[i].landmarks.push(database.landmarks[k]);
			}
		}
		for (let h = 0; h < database.celebrities.length; h++) {
			if (
				justLetters(database.countries[i].name) ===
				justLetters(database.celebrities[h].country)
			) {
				database.countries[i].celebrities.push(database.celebrities[h]);
			}
		}
	}
	for (let g = 0; g < database.leaders.length; g++) {
		for (let f = 0; f < database.countries.length; f++) {
			if (
				justLetters(database.leaders[g].place) ===
				justLetters(database.countries[f].name)
			) {
				database.countries[f].leaders.push(database.leaders[g]);
			}
			for (let t = 0; t < database.cities.length; t++) {
				if (
					justLetters(database.leaders[g].place) ===
					justLetters(database.cities[t].name)
				) {
					database.cities[t].leaders.push(database.leaders[g]);
				}
			}
		}
	}
	/*
	for (let g = 0; g < database.leaders.length; g++) {
		for (let t = 0; t < database.cities.length; t++) {
			if (
				justLetters(database.leaders[g].place) ===
				justLetters(database.cities[t].name)
			) {
				database.cities[t].leaders.push(database.leaders[g]);
			}
		}
	}
	*/
};

database.countries = countryCollector;
database.celebrities = celebrityCollector;
database.cities = cityCollector;
database.landmarks = landmarkCollector;
database.leaders = leaderCollector;
modifyCountries();

export const getCountries = () => {
	return database.countries.map((copyOfSingleCountry) => ({
		...copyOfSingleCountry,
	}));
};
