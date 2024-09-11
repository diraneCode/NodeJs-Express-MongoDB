const express = require('express');
const dotenv = require('dotenv').config()

const app = express();


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Serveur en ecoute sur le port ${port}`)
})