const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path=require('path');

const app = express();
const PORT = process.env.PORT || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);
 





//app.use(express.static('public'));

// GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // GET Route for feedback page
// app.get('/feedback', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
// );


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);