const express = require('express');
const fs = require('fs');
const uuid = require('uuid');

const app = express();






app.listen(3001, () => {
    console.log(`API server is now on PORT 3001!`)
});