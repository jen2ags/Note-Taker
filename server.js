const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const notes = require('./Develop/db/db.json');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.json());
app.use(express.static('./Develop/public'));
app.use(express.urlencoded({extended: true}));


//Will GET notes that are saved.
app.get('/api/notes', (req, res)  => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

//Will POST new notes to the json file
app.post('/api/notes', (req, res) => {

});

//Will delete notes
app.delete('/api/notes', (req, res) => {

});

//HTML route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});


//listen for the port to be open
app.listen(3001, () => {
    console.log(`API server is now on PORT 3001!`)
});