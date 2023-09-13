import { getCountries } from "./database.js";

const countries = getCountries();

console.log(countries);

const leftSide = document.querySelector("#left-column");

let htmlString = "";

countries.forEach((country) => {
	htmlString += `<section class="country-card">
    <img src="${country.image}" class="country-image image" />
    <h2 class="country-name">${country.name}</h2>
    <div class="row">
    <h3 class="population data-header">Population</h3>
    <p class="data">${country.population}</p>
    </div>
    <div class="row">
    <h3 class="languages data-header">Languages</h3>
    <p class="data">${country.languages.join(", ")}</p>
    </div>
    <div class="row">
    <h3 class="lat-long data-header">Coordinates</h3>
    <p class="data">${country.latitude} ${country.longitude}</p>
    </div>
    <div class="column">
    <h3 class="leaders">Leaders</h3>
    <div class="row">`;
	country.leaders.forEach((leader) => {
		htmlString += ` <img src="${leader.image}" class="leader-image image" />
        <h4 class="leader-name">${leader.name}</h4>
        <div class="row">
        <h4 class="type data-header">Type</h4>
        <p class="data">${leader.type}</p>
        </div>
        <h4 class="birthday data-header">Birthday</h4>
        <p class="data">${leader.birthday}</p>
        </div>`;

		if (leader.death !== "") {
			htmlString += `<div class="row">
            <h3 class="death data-header">Death</h3>
            <p class="data">${leader.death}</p>
            </div>`;
		}

		htmlString += `<div class="row">
        <h4 class="party data-header">Party</h4>
        <p class="data">${leader.party}</p>
        </div>
        <div class="column">
        <h4 class="knownFor data-header">Fun Facts</h4>`;

		leader.knownFor.forEach((fact) => {
			htmlString += `<div class"fact"><p>${fact}</p></div>`;
		});

		htmlString += `</div>`;
	});
	htmlString += `</div>
    <div class="row">
    <h3 class="independence data-header">Independence Day</h3>
    <p class="data">${country.independenceDay}</p>
    </div>
    <div class="row">
    <h3 class="food data-header">National Cuisine</h3>
    <p class="data">${country.food}</p>
    </div>
    <div class="column">
    <h3 class="celebrities">Celebrities</h3>
    <div class="row">`;
	country.celebrities.forEach((celebrity) => {
		htmlString += ` <img src="${celebrity.image}" class="celebrity-image image" />
        <h4 class="celebrity-name">${celebrity.name}</h4>
        <div class="row">
        <div class="row">
        <h4 class="type data-header">Type</h4>
        <p class="data">${celebrity.type}</p>
        </div>
        <h4 class="birthday data-header">Birthday</h4>
        <p class="data">${celebrity.birthday}</p>
        </div>`;

		if (celebrity.death !== "") {
			htmlString += `<div class="row">
            <h3 class="death data-header">Death</h3>
            <p class="data">${celebrity.death}</p>
            </div>`;
		}

		htmlString += `
        <div class="column">
        <h4 class="knownFor data-header">Fun Facts</h4>`;

		celebrity.knownFor.forEach((fact) => {
			htmlString += `<div class"fact"><p>${fact}</p></div>`;
		});

		htmlString += `</div>`;
	});
	htmlString += `</div>`;

	country.cities.forEach((city) => {
		htmlString += `<section class="city-card">
        <img src="${city.image}" class="city-image image" />
        <h2 class="city-name">${city.name}</h2>
        <div class="row">
        <h3 class="population data-header">Population</h3>
        <p class="data">${city.population}</p>
        </div>
        <div class="row">
        <h3 class="lat-long data-header">Coordinates</h3>
        <p class="data">${city.latitude} ${city.longitude}</p>
        </div>
        <div class="column">`;

		htmlString = +`<h3 class="leaders">Leaders</h3>
        <div class="row">;`;

		city.leaders.forEach((leader) => {
			htmlString += ` <img src="${leader.image}" class="leader-image image" />
        <h4 class="leader-name">${leader.name}</h4>
        <div class="row">
        <h4 class="type data-header">Type</h4>
        <p class="data">${leader.type}</p>
        </div>
        <h4 class="birthday data-header">Birthday</h4>
        <p class="data">${leader.birthday}</p>
        </div>`;

			if (leader.death !== "") {
				htmlString += `<div class="row">
            <h3 class="death data-header">Death</h3>
            <p class="data">${leader.death}</p>
            </div>`;
			}

			htmlString += `<div class="row">
        <h4 class="party data-header">Party</h4>
        <p class="data">${leader.party}</p>
        </div>
        <div class="column">
        <h4 class="knownFor data-header">Fun Facts</h4>`;

			leader.knownFor.forEach((fact) => {
				htmlString += `<div class"fact"><p>${fact}</p></div>`;
			});

			htmlString += `</div>`;
		});
		htmlString += `
        <div class="column">
        <h4 class="knownFor data-header">Fun Facts</h4>`;
		city.knownFor.forEach((fact) => {
			htmlString += `<div class"fact"><p>${fact}</p></div>`;
		});
	});

	country.landmarks.forEach((landmark) => {
		htmlString += `<section class="landmark-card">
        <img src="${landmark.image}" class="landmark-image image" />
        <h2 class="landmark-name">${landmark.name}</h2>
        <div class="row">
        <h3 class="type data-header">Type</h3>
        <p class="data">${landmark.type}</p>
        </div>
        <div class="row">
        <h3 class="lat-long data-header">Coordinates</h3>
        <p class="data">${landmark.latitude} ${landmark.longitude}</p>
        </div>
        <div class="column">`;
		htmlString += `
        <div class="column">
        <h4 class="knownFor data-header">Fun Facts</h4>`;
		landmark.knownFor.forEach((fact) => {
			htmlString += `<div class"fact"><p>${fact}</p></div>`;
		});
	});
	htmlString += `</section>`;
});
leftSide.innerHTML = htmlString;
