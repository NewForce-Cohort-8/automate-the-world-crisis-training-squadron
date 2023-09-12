import { makeCelebrity } from "../factory-functions.js";

export let celebrityCollector = [];

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
	"Currently dating US Rapper Cordae",
); 

console.log(celebrityCollector);
