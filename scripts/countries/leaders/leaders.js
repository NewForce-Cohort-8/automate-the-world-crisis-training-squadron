import { makeLeader } from "../factory-functions.js";

export let leaderCollector = [];

//test
makeLeader(
	leaderCollector,
	"The Netherlands",
	"image",
	"So and So",
	"Prime Minister",
	"date",
	"date",
	"This party",
	"Being Dutch"
);

console.log(leaderCollector);
