//object data provider functino

//factory funtctions
export const makeCountry = (
	arr,
	image,
	name,
	independenceDay,
	latitude,
	longitude,
	population,
	food,
	...languages
) => {
	let country = {
		celebrities: [],
		landmarks: [],
		cities: [],
		leaders: [],
		image: image,
		name: name,
		independenceDay: independenceDay,
		latitude: latitude,
		longitude: longitude,
		population: population,
		food: food,
		languages: languages,
	};
	arr.push(country);
};

export const makeCity = (
	arr,
	country,
	image,
	name,
	population,
	latitude,
	longitude,
	...knownFor
) => {
	let city = {
		leaders: [],
		country: country,
		image: image,
		name: name,
		population: population,
		latitude: latitude,
		longitude: longitude,
		knownFor: knownFor,
	};

	arr.push(city);
};

export const makeCelebrity = (
	arr,
	country,
	image,
	name,
	type,
	birthday,
	death,
	...knownFor
) => {
	let celebrity = {
		country: country,
		image: image,
		name: name,
		type: type,
		birthday: birthday,
		death: death,
		knownFor: knownFor,
	};
	arr.push(celebrity);
};
export const makeLeader = (
	arr,
	place,
	image,
	name,
	type,
	birthday,
	death,
	party,
	...knownFor
) => {
	let leader = {
		place: place,
		image: image,
		name: name,
		type: type,
		birthday: birthday,
		death: death,
		party: party,
		knownFor: knownFor,
	};
	/*
const findAge = (birthday, death) =>{
	let today = new Date();
	let age;
	If (death !== "") {
	age = death - birthday;
} else {
    age = today - birthday
}
celebrity.age = whateverFunctionWeNeedToGetToDisplayInYears(age)
}
findAge()
*/
	arr.push(leader);
};
export const makeLandmark = (
	arr,
	country,
	image,
	name,
	type,
	latitude,
	longitude,
	...knownFor
) => {
	let landmark = {
		country: country,
		image: image,
		name: name,
		type: type,
		latitude: latitude,
		longitude: longitude,
		knownFor: knownFor,
	};
	arr.push(landmark);
};

export const justLetters = (string) => {
	return string
		.toLowerCase()
		.split(" ")
		.join("")
		.split("'")
		.join("")
		.split(".")
		.join("")
		.split(",")
		.join("");
};

export const findAge = (arr) => {
	let today = new Date();
	let thisYear = today.getFullYear();
	let thisMonth = today.getMonth() + 1;
	let thisDay = today.getDate();
	console.log(today, thisYear, thisMonth, thisDay);

	arr.forEach((index) => {
		let age;
		let birth = index.birthday;
		let birthArray = birth.split(",").join("").split("th").join("").split(" ");
		let isMonth = /[A-Za-z]{3,}/;
		let isYear = /[0-9]{3,4}/;
		let isDay = /[A-za-z]{2,3}/;
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
			}
		}

		if (!isDay.test(birthArray[1])) {
			birthDay = birthArray[1];
		}
		let deathArray;
		let deathYear;
		let deathMonth;
		let deathDay;
		if (index.death !== "") {
			let death = index.death;
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
				}
			}
			if (!isDay.test(deathArray[1])) {
				deathDay = deathArray[1];
			}

			age = deathYear - birthYear - 1;
			if (deathMonth > birthMonth) {
				age++;
			} else if (deathMonth == birthMonth && deathDay > birthDay) {
				age++;
			}
		} else {
			age = thisYear - birthYear - 1;
			if (thisMonth > birthMonth) {
				age++;
			} else if (thisMonth == birthMonth && thisDay > birthDay) {
				age++;
			}
		}
		index.age = Math.abs(age);
	});
};
