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
})

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