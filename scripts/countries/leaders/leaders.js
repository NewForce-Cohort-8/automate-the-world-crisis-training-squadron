import { makeLeader } from "../factory-functions.js";

export let leaderCollector = [];


makeLeader(
	leaderCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/kravchuk.jpg",
	"Leonid Kravchuk",
	"1st President of Ukraine",
	"January 10th 1934",
	"May 10th 2022",
	"Social Democratic Party of Ukraine",
);

makeLeader(
	leaderCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/zelenskyy.jpg",
	"Volodymyr Zelenskyy",
	"President of Ukraine",
	"January 25th 1978",
	"Independent party"
);

console.log(leaderCollector);
