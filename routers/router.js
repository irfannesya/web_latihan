const express = require('express');
const HomeControler = require('../controllers/home.controler');
const router = express.Router();
const homeControler = new HomeControler();

router.get('/', homeControler.index)

module.exports = router