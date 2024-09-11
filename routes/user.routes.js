const express = require('express');
const { getUsers } = require('../controllers/user.ctrl');

const router = express.Router();

router.get('/user', getUsers)


module.exports = router