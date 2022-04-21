const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const notes = require('./Develop/db/db.json');
const app = express();
const path = require('path');
const { notes } = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.static('./Develop/public'));
app.use(express.urlencoded({extended: true}));


//Will GET notes that are saved.
app.get('/api/notes', (req,res) => {
    const results = notes;
    console.log(req.query)
    res.json(results);
});

//Will POST new notes to the json file
app.post('/api/notes', (req, res) => {

});

//Will delete notes
app.delete('/api/notes', (req, res) => {

});

//HTML routes
app.get('/notes', (req, res)  => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});


//listen for the port to be open
app.listen(3001, () => {
    console.log(`API server is now on PORT 3001!`)
});