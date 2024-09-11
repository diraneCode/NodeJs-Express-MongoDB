const express = require('express');
const dotenv = require('dotenv').config()

const routerUser = require('./routes/user.routes')
const app = express();
app.use('/', routerUser);

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Serveur en ecoute sur le port ${port}`)
})