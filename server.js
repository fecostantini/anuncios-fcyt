const express = require('express');
var hbs = require('hbs');
const database = require('./public/assets/database/database');

/*
testDateStr = '"2019-10-17T15:29:00.000Z"';
testDateJSON = JSON.parse(testDateStr);

let events = database.getEvents();

let getUpcomingEvents = () => {
	const userDate = new Date(testDateJSON);
	let upcomingEvents = [];

	events.forEach(event => {
		eventDate = new Date(event.date);
		eventHasntHappenedYet = eventDate > userDate;

		if (eventHasntHappenedYet) upcomingEvents.push(event);
	});

	return upcomingEvents;
};

console.log(getUpcomingEvents());
*/

const app = express();
app.use(express.static(__dirname + '/public'));
port = process.env.PORT || 3000;

// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
	res.render('home');
});

app.listen(port, () => {
	console.log(`Escuchando en el puerto ${port}`);
});
