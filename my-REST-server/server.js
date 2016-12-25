var events = require('./eventsData.js');
var emails = require('./emailsData.js');
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
app.post('/add', (req, res) => {
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

// TODO: UPDATE 
app.put('/price', (req, res) => {
    const id = req.body.id;
    const newPrice = req.body.newPrice;
    const index = items.findIndex(item => item.id === id);
    items[index].price = newPrice;
    res.end(`the price of item id : ${id} was change to ${newPrice}`);
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