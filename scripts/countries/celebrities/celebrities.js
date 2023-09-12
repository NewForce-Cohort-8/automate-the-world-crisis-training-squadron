import { makeCelebrity } from "../factory-functions.js";

export let celebrityCollector = [];

//test data
makeCelebrity(
	celebrityCollector,
	"The Netherlands",
	"image",
	"Jack Nicholson",
	"Movie Star",
	"date",
	"",
	"The Shining",
	"Easy Riders",
	"One Flew Over the Cuckoo's Nest"
);

console.log(celebrityCollector);
