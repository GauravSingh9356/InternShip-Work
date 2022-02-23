const express = require('express');
const { getTodos } = require('../controllers/todosController');

const router = express.Router();

router.get('/', getTodos);

module.exports = router;
