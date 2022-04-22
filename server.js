const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const notes = require('./Develop/db/db.json');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('./Develop/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Will GET displayed notes that are saved.
app.get('/api/notes', (req, res)  => {
    res.sendFile(path.join(__dirname, './Develop/db/db.json'));
});


//Will POST new notes to the json file
app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notes));

    res.json(notes);
});

//Will delete notes
app.delete('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    const deleteNote = notes.filter((removeNote) => 
    removeNote.id !== req.params.id);
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);

});

//HTML route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});


//listen for the port to be open
app.listen(PORT, () => {
    console.log(`API server is now on PORT 3001!`)
});