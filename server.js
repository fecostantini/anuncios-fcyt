require('./public/assets/js/helpers/helpers');
const express = require('express');
const hbs = require('hbs');
const database = require('./public/assets/database/database');

const app = express();
app.use(express.static(__dirname + '/public'));
port = process.env.PORT || 3000;

// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

let events = database.getEvents();

let getUserDate = () => {
	return new Date();
};

let getUpcomingEvents = userDate => {
	let upcomingEvents = [];

	events.forEach(event => {
		eventDate = new Date(event.date);
		eventHasntHappenedYet = eventDate > userDate;
		console.log(`fecha evento: ${eventDate} - fecha usuario: ${userDate}`);
		if (eventHasntHappenedYet) upcomingEvents.push(event);
	});

	return upcomingEvents;
};

app.get('/', (req, res) => {
	let userDate = getUserDate();
	let upcomingEvents = getUpcomingEvents(userDate);

	console.log(userDate);

	upcomingEvents.forEach(event => {
		console.log(new Date(event.date));
	});

	res.render('home', {
		upcomingEvents: upcomingEvents,
		userDate: userDate
	});
});

app.listen(port, () => {
	console.log(`Escuchando en el puerto ${port}`);
});
