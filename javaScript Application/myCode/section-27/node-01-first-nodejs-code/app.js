const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const locationRoutes = require('./routes/location');
// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.json());

app.use(locationRoutes);

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((req, res, next) => {
//   let userName = req.body.username || 'Unknown User';
//   res.render('index', {
//     user: userName,
//   });
// });

app.listen(3000);
