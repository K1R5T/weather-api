const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

require('dotenv').config();

const router = require('./routes/router');

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router)


app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.listen(3000, () => {
    console.log('listening on port 3000');
});