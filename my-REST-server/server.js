var events = require('./eventsData.js');
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

// READ
app.get('/item/:id', (req, res) => {
    const id = +req.params.id;
    const item = items.find(currItem => currItem.id === id);
    res.json(item)
})

// DELETE
app.delete('/item/:id', (req, res) => {
    const id = +req.params.id;
    items = items.filter(currItem => currItem.id !== id);
    res.end('the delete was succses!');
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


    // const item = {}
    // item.id = findNextId();
    // item.price = req.body.price;
    // item.title = req.body.title;
    // item.description = req.body.description;
    // items.push(item);
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

// app.put('/price', (req, res) => {
//     const id = req.body.id;
//     const newPrice = req.body.newPrice;
//     const index = items.findIndex(item => item.id === id);
//     items[index].price = newPrice;
//     res.end(`the price of item id : ${id} was change to ${newPrice}`);
// });

app.listen(3003, () => {
    console.log('REST API listening on port 3003!')
})

function findNextId() {
    var maxId = 0;
    items.forEach(item => {
        if (item.id > maxId) maxId = item.id;
    });
    return maxId + 1;
}