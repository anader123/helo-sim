require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session'); 

// Controller Import 
const authCtrl = require('./Controllers/authController');
const postCtrl = require('./Controllers/postController'); 

// .ENV
const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env; 

// Setup App
const app = express();

// Top Level Middleware
app.use(express.json());
app.use(cors());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 60000
    }
}));

// DB Connection 
massive(CONNECTION_STRING).then(db => {
    app.set('db', db); 
    console.log('Database Connected')
})

// End Points

// Auth
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.post('/auth/logout', authCtrl.logout)

// Posts
app.get('/api/posts/:id', postCtrl.getPosts);
app.get('/api/post/:id', postCtrl.getPost)
app.post('/api/post/:id', postCtrl.createPost)

// Server Listening
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on ${SERVER_PORT}`)
});