const express = require('express');
const router = express.Router();
const numbersController = require('../controllers/numbersController');

router.get('/:numberid', numbersController.getNumbers);

module.exports = router;
