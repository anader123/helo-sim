require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const massive = require('massive');

// Controller Import 
const ctrl = require('./controller');

// .ENV
const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env; 

// Setup App
const app = express();

// Top Level Middleware
app.use(express.json());
app.use(cors());

// DB Connection 
massive(CONNECTION_STRING).then(db => {
    app.set('db', db); 
    console.log('Database Connected')
})

// End Points
app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);

// Server Listening
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on ${SERVER_PORT}`)
});