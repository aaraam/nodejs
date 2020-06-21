const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Database
mongoose.connect('mongodb+srv://john:54321@rivet-x3jjc.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
    .then(() => console.log('Connection established..'))
    .catch(err => console.error(err))

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start Server
app.listen(process.env.PORT || 3300, () => console.log('Server started on port 3300'));

// Models
const UserModel = require('./models/userModel');

// Controllers
const UserControl = require('./controllers/userControl');
UserControl(app, UserModel);