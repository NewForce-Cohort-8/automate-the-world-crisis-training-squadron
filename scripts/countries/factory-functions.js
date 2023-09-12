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
		/*
	mayor: {
		image: ,
		name: ,
		party: ,
        */
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
		death: death, //(can be “date” or “”)
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
		death: death, //(can be “date” or “”)
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
