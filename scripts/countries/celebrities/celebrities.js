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

makeCelebrity(
  celebrityCollector,
	"The Netherlands",
	"https://i.dailymail.co.uk/i/pix/2015/05/03/20/2827B13E00000578-3066450-Wheely_fun_Famke_Janssen_pedalled_her_way_past_a_photo_shoot_in_-a-5_1430681713678.jpg",
	"Famke Janssen",
	"November 5th, 1964",
	"date",
	"",
	"X-Men film series",
	"Taken film trilogy",
	"GoldenEye",
	"Nip Tuck"
);


console.log(celebrityCollector);
