const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql2'),
    myConnection = require('express-myconnection');

const app = express();

// importing routes
const postRoutes = require('./routes/post');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'posts'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', postRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
