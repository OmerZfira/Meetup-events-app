var events = require('./eventsData.js');
var emails = require('./emailsData.js');
var places = require('./placesData.js');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});
// *** REST API ***

// LIST
app.get('/events', (req, res) => {
    console.log('some one call me!');
    res.json(events.events);
})

// Get LIST of emails
app.get('/emails', (req, res) => {
    console.log('some one call me!');
    res.json(emails.emails);
})

// Get LIST of places
app.get('/places', (req, res) => {
    console.log('some one call me!');
    res.json(places.places);
})

// READ
app.get('/item/:id', (req, res) => {
    const id = +req.params.id;
    const item = items.find(currItem => currItem.id === id);
    res.json(item)
})

// DELETE email
app.delete('/item/:id', (req, res) => {
    const id = +req.params.id;
    emails.emails = emails.emails.filter(currEmail => currEmail.id !== id);
    res.end('the delete was succsesful!');
})



// CREATE
app.post('/addEvent', (req, res) => {
    let dateString = req.body.date + ' ' + req.body.hour;
    let event = {};
    event.id = randomId();
    event.name = req.body.name;
    event.description = req.body.description;
    event.venue = req.body.venue;
    event.status = req.body.status;
    event.link = req.body.link;
    console.log('time step : ', getTimestep(dateString));
    event.time = getTimestep(dateString);

});
// const item = {}
// item.id = findNextId();
// item.price = req.body.price;
// item.title = req.body.title;
// item.description = req.body.description;
// items.push(item);

// CREATE email
app.post('/addemail', (req, res) => {
    console.log('req', req.body);

    let email = {}
    email.id = findNextId();
    email.subject = req.body.subject;
    email.date = '';
    email.isRead = false;
    email.isDisplayed = false;
    email.body = req.body.body;
    console.log(email);
    emails.emails.push(email);

    res.end('add!');
});


function randomId() {
    let str = '';
    for (let i = 0; i < 10; i++) {
        let num = parseInt(Math.random() * 9);
        str += num;
    }
    let isExist = events.events.some(event => event.id === str);
    if (isExist) randomId();
    else return str;
}

function getTimestep(dateString) {
    // var dateString = '17-09-2013 10:08',
    dateTimeParts = dateString.split(' '),
        timeParts = dateTimeParts[1].split(':'),
        dateParts = dateTimeParts[0].split('-'),
        date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);
    return date.getTime()
}
// TODO: UPDATE 

// CREATE place
app.post('/addplace', (req, res) => {
    console.log('req', req.body);

    let place = {}
    place.id = findNextId();
    place.name = req.body.name;
    place.latitude = req.body.latitude;
    place.longitude = req.body.longitude;
    place.isDisplayed = false;
    place.type = req.body.type;
    place.tags = req.body.tags;
    places.places.push(place);
    res.end('add!');
})

app.put('/updateEvent', (req, res) => {
    console.log('req ID', req.body.id);
    events.events.forEach(event => {
        if (event.id === req.body.id) {
            if (req.body.link !== undefined) {
                event.link = req.body.link;
            }
            if (req.body.description) {
                event.description = req.body.description;
            }
            if (req.body.address_2) {
                event.venue.address_2 = req.body.address_2;
            }
            event.name = req.body.name;
            event.status = req.body.status;
            event.venue.address_1 = req.body.address_1;
        }
    });
    res.end('events has change!');
});

app.listen(3003, () => {
    console.log('REST API listening on port 3003!')
})

function findNextId() {
    var maxId = 0;
    emails.emails.forEach(email => {
        if (email.id > maxId) maxId = email.id;
    });
    return maxId + 1;
}