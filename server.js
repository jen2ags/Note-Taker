const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const notes = require('./Develop/db/db.json')
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/api/notes', (req,res) => {
    res.send('It worked!');
});


app.listen(3001, () => {
    console.log(`API server is now on PORT 3001!`)
});