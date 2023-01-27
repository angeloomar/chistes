const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.config');

const jokesRoute = require('./server/routes/jokes.routes.js');


jokesRoute(app);

app.listen(port, () => console.log("Im in production my friend!"))
