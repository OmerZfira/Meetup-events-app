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
app.post('/add', (req, res) => {
    console.log('req', req.body);

    const item = {}
    item.id = findNextId();
    item.price = req.body.price;
    item.title = req.body.title;
    item.description = req.body.description;
    items.push(item);
    res.end('add!');
})

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