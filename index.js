'use strict';

let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let serveStatic = require('serve-static');

let app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(serveStatic(path.join(__dirname, 'app/public/dist/')));

let router = express.Router();

router.get('/', (req, res, next) => {
  res.render('home');
});

app.use(router);

app.listen(process.env.PORT || '3000');