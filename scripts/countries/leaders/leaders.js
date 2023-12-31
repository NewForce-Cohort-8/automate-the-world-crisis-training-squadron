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
	"Social Democratic Party of Ukraine"
);

makeLeader(
	leaderCollector,
	"Ukraine",
	"scripts/countries/celebrities/images/zelenskyy.jpg",
	"Volodymyr Zelenskyy",
	"President of Ukraine",
	"January 25th 1978",
	"",
	"Independent party"
);

makeLeader(
	leaderCollector,
	"Italy",
	"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fgaryckarntzen%2Fart%2FSergio-Mattarella-President-of-Italy-892854996&psig=AOvVaw3WD2zIOSwOJ3BOU9YRocnU&ust=1694717385272000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCJDZ0rOgqIEDFQAAAAAdAAAAABAD",
	"Sergio Mattarella",
	"President of Italy",
	"January 31, 2015",
	"still active President",
	"Catholic leftist politician",
	"Second longest-serving president"
);

makeLeader(
	leaderCollector,
	"Japan",
	"https://cloudfront-us-east-2.images.arcpublishing.com/reuters/RCIPB3FROBOYFPL7JTR6IMQRO4.jpg",
	"Fumio Kishida",
	"Prime Minister",
	"July 29, 1957",
	"",
	"Liberal Democratic Party (LDP)",
	"Previously served as Minister for Foreign Affairs from 2012 to 2017",
	"Chaired the LDP Policy Research Council from 2017 to 2020"
);

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

makeLeader(
	leaderCollector,
	"Greece",
	"scripts/countries/celebrities/images/Sakellaropoulou.jpg",
	"Katerina Sakellaropoulou",
	"President",
	"May 30, 1956",
	"",
	"Independent",
	"Is a judge"
);

console.log(leaderCollector);
