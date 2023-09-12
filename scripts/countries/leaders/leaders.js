import { makeLeader } from "../factory-functions.js";

export let leaderCollector = [];

// //test
// makeLeader(
// 	leaderCollector,
// 	"The Netherlands",
// 	"image",
// 	"So and So",
// 	"Prime Minister",
// 	"date",
// 	"date",
// 	"This party",
// 	"Being Dutch"
// );

// console.log(leaderCollector);


//test
makeLeader(
	leaderCollector,
	"Italy",
	"https://www.irancartoon.com/site/media/uploads/daily/marzio_mariani---sergio_mattarella.jpg",
	"Sergio Mattarella",
	"President of Italy",
	"January 31, 2015",
	"still active President",
	"Catholic leftist politician",
	"He is the second longest-serving president of Italy, following his predecessor Giorgio Napolitano. Most recently he is making headlines for deciding to veto a populist alliance's choice of finance minister, causing their proposed government to collapse and plunging Italy into political turmoil."
);

console.log(leaderCollector);