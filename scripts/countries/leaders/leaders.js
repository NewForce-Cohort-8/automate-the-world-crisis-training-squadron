import { makeLeader } from "../factory-functions.js";

export let leaderCollector = [];


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

console.log(leaderCollector);
