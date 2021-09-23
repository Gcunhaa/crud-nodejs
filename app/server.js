'use strict';

const express = require('express');
const router = require('./routes')

const PORT = 8080;
const HOST = '0.0.0.0';


(async () => {
    const database = require('./db');
    const User = require('./models');
 
    try {
        const resultado = await database.sync();
        console.log('Connected to DB succesfuly');
    } catch (error) {
        console.log(error);
    }
})();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'))

app.use('/', router)


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
