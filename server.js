const express = require('express');
const exphbs = require('express-handlebars');
require('dotenv').config();
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);
 





//app.use(express.static('public'));

//GET Route for test page

app.get('/test', (req, res) =>
   res.sendFile(path.join(__dirname, '/public/index.html'))
);

// // GET Route for feedback page
// app.get('/feedback', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
// );


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });