import { makeLeader } from "../factory-functions.js";

export let leaderCollector = [];

//test
makeLeader(
	leaderCollector,
	"The Netherlands",
	"https://www.politico.eu/cdn-cgi/image/width=1024,quality=80,onerror=redirect,format=auto/wp-content/uploads/2020/07/GettyImages-1214246481-scaled.jpg",
	"Mark Rutte",
	"Prime Minister",
	"February 14, 1967",
	"",
	"People's Party for Freedom and Democracy",
	"First Liberal to serve as Prime Minister since 1918",
	"Second longest running Prime Minister in Dutch History",
	"Interrupted  and contradicted Donald Trump at a meeting in the Oval Office at The White House"
);

makeLeader(
	leaderCollector,
	"Amsterdam",
	"https://scontent.fric1-1.fna.fbcdn.net/v/t1.6435-9/56970959_10156329157595823_5285291775550816256_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=973b4a&_nc_ohc=zQs1XSvLMGAAX-3Krqr&_nc_ht=scontent.fric1-1.fna&oh=00_AfC0rz93GDzQnrBHGSsrzF6mMuyqrlCk5JtTejX6yeViFw&oe=6527FAC9",
	"Femke Halsema",
	"Mayor",
	"April 25, 1966",
	"",
	"GreenLeft",
	"First woman to fully hold the office of Mayor of Amsterdam",
	"First GreenLeft party memeber to be elected as mayor"
);

makeLeader(
	leaderCollector,
	"The Netherlands",
	"https://mamaseatdrinkchill.com/wp-content/uploads/2019/04/king-Williem-1.jpg",
	"Willem-Alexander Claus George Ferdinand",
	"King",
	"April 27, 1967",
	"",
	"Monarchy",
	"Was a member of the International Olumpic Committee",
	"Was a supervisory board member of the Dutch Central Bank",
	"Was going to be an airline pilot if he wasn't royalty"
);

console.log(leaderCollector);
